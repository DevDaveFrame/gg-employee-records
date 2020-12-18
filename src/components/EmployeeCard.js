import React from 'react';
import placeholder from '../avatar.png';
import Avatar from './Avatar';

export default function EmployeeCard(props) {
  return (
    <div className="employee-card">
      <div className="badge">
        <Avatar image={placeholder} alt="a robot" width="100px"/>
        <div className="title">
        <h2>{`${props.employee.first_name} ${props.employee.last_name}`}</h2>
        <p className="position">{props.employee.position}</p>
        </div>
      </div>
      <div className="details">
        <span><strong>Manager:</strong> {props.employee.manager}</span>
        <span><strong>Salary:</strong> {`$${props.employee.salary} annually`}</span>
        <span><strong>Hire Date:</strong> {props.employee.hire_date}</span>
      </div>
      <div className="actions">
        <button onClick={()=> props.setCurrentEmployee(props.employee)}>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
