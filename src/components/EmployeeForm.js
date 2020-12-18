import React, { useState, useEffect } from "react";

function EmployeeForm(props) {
  console.log("RENDERING")
  const currentEmployee = props.currentEmployee
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [salary, setSalary] = useState(0)
  const [hireDate, setHireDate] = useState("")
  const [position, setPosition] = useState("")
  const [manager, setManager] = useState("")

  useEffect(() => {
    setFirstName(currentEmployee ? currentEmployee.first_name : "")
    setLastName(currentEmployee ? currentEmployee.last_name : "")
    setSalary(currentEmployee ? currentEmployee.salary : 0)
    setHireDate(currentEmployee ? currentEmployee.hire_date : "")
    setPosition(currentEmployee ? currentEmployee.position : "")
    setManager(currentEmployee ? currentEmployee.manager : "")
    return () => {
      setFirstName("")
      setLastName("")
      setSalary(0)
      setHireDate("")
      setPosition("")
      setManager("")
    }
  }, [currentEmployee])
  const handleSubmit = (e) => {
    props.sendForm(e, currentEmployee)
    setFirstName("")
    setLastName("")
    setSalary(0)
    setHireDate("")
    setPosition("")
    setManager("")
  }
  return (
    <div>
      <form id="employee-form" onSubmit={(e) => handleSubmit(e)}>
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
        <input type="submit" name="submit"/>
      </form>
    </div>
  );
}
export default EmployeeForm;