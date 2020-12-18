import React, {useEffect, useState} from "react"
import './App.css';
import EmployeeDisplay from "./components/EmployeeDisplay";
import EmployeeForm from "./components/EmployeeForm"



function App() {
  const [currentEmployee, setCurrentEmployee] = useState(undefined)
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch("/employees")
    .then(res => res.json())
    .then(data => setEmployees(data.employees))
    .catch(error => console.log(error))
    return () => {}
  }, [])

  const URL = "/employees";
  const sendForm = (e, currentEmployee) => {
    e.preventDefault();
    let form = e.target;
    let formBody = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      salary: form.salary.value,
      hireDate: form.hireDate.value,
      position: form.position.value,
      manager: form.manager.value
    }
    const configObject = {
      method: currentEmployee ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formBody),
    };
    const endpoint = currentEmployee ? `${URL}/${currentEmployee.id}` : URL
    fetch(endpoint, configObject)
      .then((response) => response.json())
      .then((employee) => console.log(employee))
      .catch((err) => console.log(err));
    setCurrentEmployee(undefined)
  };

  const handleResponse = (employee) => {

  }

  return (
    <div className="App">
      <h1>G&G Employee Database</h1>
      <EmployeeDisplay employees={employees} setCurrentEmployee={setCurrentEmployee}/>
      <EmployeeForm sendForm={sendForm} currentEmployee={currentEmployee} /> 
    </div>
  );
}

export default App;
