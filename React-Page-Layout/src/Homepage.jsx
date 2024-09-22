import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';



const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager' },
    // Add more employees as needed
  ]);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage">
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <EmployeeList employees={filteredEmployees} />
      
    </div>
  );
};

export default Homepage;
