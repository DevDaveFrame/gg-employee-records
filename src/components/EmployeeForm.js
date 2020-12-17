import React, { useState } from "react";

function EmployeeForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [salary, setSalary] = useState(0)
  const [hireDate, setHireDate] = useState(Date.now())
  const [position, setPosition] = useState("")
  const [manager, setManager] = useState("")

  const URL = "/employees";
  const sendForm = (e) => {
    e.preventDefault();
    const formBody = {
      firstName,
      lastName,
      salary,
      hireDate,
      position,
      manager
    };
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formBody),
    };

    fetch(URL, configObject)
      .then((response) => response.json)
      .then((employee) => console.log(employee))
      .catch((err) => console.log(err));
  };
  return (
    <form id="employee-form" onSubmit={(e) => sendForm(e)}>
      <label for="first-name">First Name:</label>
      <input
        onChange={()=>setFirstName()}
        value={firstName}
        id="first-name"
        name="first-name"
        type="text"
        aria-autocomplete="list"
        aria-invalid="true"
        required
      />
      <label for="author">Last Name:</label>
      <input
        onChange={()=>setLastName()}
        value={lastName}
        id="last-name"
        name="last-name"
        type="text"
        aria-autocomplete="list"
        aria-invalid="true"
        required
      />
      <br />
      <label for="price">Salary:</label>
      <input
        onChange={()=>setSalary()}
        value={salary}
        type="number"
        name="salary"
        id="salary"
        step="any"
        aria-invalid="true"
        required
      />
      <label for="description">Hire Date:</label>
      <br />
      <input 
        onChange={()=>setHireDate()}
        value={hireDate}
        id="hire-date"
        name="hire-date"
        type="date" 
        aria-invalid="true" 
        required
        />
      <br />
      <label for="first-name">Position:</label>
      <input
        onChange={()=>setPosition()}
        value={position}
        id="position"
        name="position"
        type="text"
        aria-autocomplete="list"
        aria-invalid="true"
        required
      />
      <br />
      <label for="first-name">Manager:</label>
      <input
        onChange={()=>setManager()}
        value={manager}
        id="manager"
        name="manager"
        type="text"
        aria-autocomplete="list"
        aria-invalid="true"
        required
      />
      <br />
      <input type="submit" name="submit"/>
    </form>
  );
}
export default EmployeeForm;