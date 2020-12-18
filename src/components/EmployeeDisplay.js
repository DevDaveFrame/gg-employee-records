import React from 'react'
import EmployeeCard from './EmployeeCard'

export default function EmployeeDisplay(props) {
  console.log(props.employees)
  return (
    <div className="employee-display">
      {props.employees.map(employee => {return <EmployeeCard setCurrentEmployee={props.setCurrentEmployee} key={employee.id} employee={employee}/>}) }
    </div>
  )
}
