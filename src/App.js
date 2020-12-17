import React, {useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import EmployeeForm from "./components/EmployeeForm"



function App() {
  useEffect(() => {
    fetch("/employees")
    .then(res => res.json())
    .then(data => console.log(data))
  })

  const URL = "/employees";
  const sendForm = (e) => {
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formBody),
    };

    fetch(URL, configObject)
      .then((response) => response.json())
      .then((employee) => console.log(employee))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <EmployeeForm sendForm={sendForm}/> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
