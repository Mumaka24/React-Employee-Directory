import React from 'react';

const EmployeeListItem = ({ employee }) => {
  return (
    <div className="employee-list-item">
      <h3>{employee.name}</h3>
      <p>{employee.position}</p>
    </div>
  );
};

export default EmployeeListItem;
