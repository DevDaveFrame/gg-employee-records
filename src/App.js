import React, {useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css';
import EmployeeForm from "./components/EmployeeForm"



function App() {
  const [currentEmployee, setCurrentEmployee] = useState(undefined)

  useEffect(() => {
    fetch("/employees")
    .then(res => res.json())
    .then(data => console.log(data))
  })

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
      method: currentEmployee.id ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formBody),
    };
    const endpoint = currentEmployee.id ? `${URL}/${currentEmployee.id}` : URL
    fetch(endpoint, configObject)
      .then((response) => response.json())
      .then((employee) => console.log(employee))
      .catch((err) => console.log(err));
    setCurrentEmployee(undefined)
  };

  return (
    <div className="App">

      <EmployeeForm sendForm={sendForm} currentEmployee={currentEmployee}/> 
    </div>
  );
}

export default App;
