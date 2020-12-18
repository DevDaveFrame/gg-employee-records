import React, { useEffect, useState } from "react";
import "./App.css";
import EmployeeDisplay from "./components/EmployeeDisplay";
import EmployeeForm from "./components/EmployeeForm";

const URL = "/employees";

function App() {
  const [currentEmployee, setCurrentEmployee] = useState(undefined);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data.employees))
      .catch((error) => console.log(error));
    return () => {};
  }, []);

  const sendForm = (e, currentEmployee) => {
    e.preventDefault();
    let form = e.target;
    let formBody = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      salary: form.salary.value,
      hireDate: form.hireDate.value,
      position: form.position.value,
      manager: form.manager.value,
    };
    const configObject = {
      method: currentEmployee ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formBody),
    };
    const endpoint = currentEmployee ? `${URL}/${currentEmployee.id}` : URL;
    fetch(endpoint, configObject)
      .then((response) => response.json())
      .then((employee) =>
        updateEmployeeList(employee, currentEmployee ? "update" : "add")
      )
      .catch((err) => console.log(err));
    setCurrentEmployee(undefined);
  };

  const updateEmployeeList = (newOrUpdatedEmployee, action) => {
    let updatedEmployeeList;
    if (action === "update") {
      updatedEmployeeList = employees.map((employee) => {
        if (employee.id === newOrUpdatedEmployee.id) {
          return newOrUpdatedEmployee;
        }
        return employee;
      });
    }
    if (action === "add") {
      updatedEmployeeList = [...employees, newOrUpdatedEmployee];
    }
    setEmployees(updatedEmployeeList);
  };

  const deleteEmployee = (employee) => {
    const configObject = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    };
    const endpoint = `${URL}/${employee.id}`;
    fetch(endpoint, configObject)
      .then((response) => response.json())
      .then((employee) => removeDeletedEmployee(employee))
      .catch((err) => console.log(err));
  };

  const removeDeletedEmployee = (deletedEmployee) => {
    const updatedEmployeeList = employees.filter(
      (employee) => employee.id !== deletedEmployee.id
    );
    setEmployees(updatedEmployeeList);
  };

  return (
    <div className="App">
      <h1>G&G Employee Records</h1>
      <EmployeeForm sendForm={sendForm} currentEmployee={currentEmployee} />
      <EmployeeDisplay
        employees={employees}
        setCurrentEmployee={setCurrentEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default App;
