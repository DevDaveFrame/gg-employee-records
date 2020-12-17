import React, { useState } from "react";

function EmployeeForm(props) {
  const currentEmployee = props.currentEmployee
  const [firstName, setFirstName] = useState(currentEmployee ? currentEmployee.firstName : "")
  const [lastName, setLastName] = useState(currentEmployee ? currentEmployee.lastName : "")
  const [salary, setSalary] = useState(currentEmployee ? currentEmployee.salary : 0)
  const [hireDate, setHireDate] = useState(currentEmployee ? currentEmployee.hireDate : "")
  const [position, setPosition] = useState(currentEmployee ? currentEmployee.position : "")
  const [manager, setManager] = useState(currentEmployee ? currentEmployee.manager : "")

  return (
    <form id="employee-form" onSubmit={(e) => props.sendForm(e, currentEmployee)}>
      <label htmlFor="first-name">First Name:</label>
      <input
        onChange={(e)=>setFirstName(e.target.value)}
        value={firstName}
        id="first-name"
        name="firstName"
        type="text"
        aria-autocomplete="list"
        aria-invalid="true"
        required
      />
      <label htmlFor="author">Last Name:</label>
      <input
        onChange={(e)=>setLastName(e.target.value)}
        value={lastName}
        id="last-name"
        name="lastName"
        type="text"
        aria-autocomplete="list"
        aria-invalid="true"
        required
      />
      <br />
      <label htmlFor="price">Salary:</label>
      <input
        onChange={(e)=>setSalary(e.target.value)}
        value={salary}
        type="number"
        name="salary"
        id="salary"
        step="any"
        aria-invalid="true"
        required
      />
      <label htmlFor="description">Hire Date:</label>
      <input 
        onChange={(e)=>setHireDate(e.target.value)}
        value={hireDate}
        id="hire-date"
        name="hireDate"
        type="date" 
        aria-invalid="true" 
        required
        />
      <br />
      <label htmlFor="first-name">Position:</label>
      <input
        onChange={(e)=>setPosition(e.target.value)}
        value={position}
        id="position"
        name="position"
        type="text"
        aria-autocomplete="list"
        aria-invalid="true"
        required
      />
      <label htmlFor="first-name">Manager:</label>
      <input
        onChange={(e)=>setManager(e.target.value)}
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