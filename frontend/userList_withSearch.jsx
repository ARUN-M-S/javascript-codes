import React, { useState, useRef } from 'react';

let originalUser = [
  { id: 1, name: 'Arun', city: 'kochi' },
  { id: 2, name: 'Manu', city: 'Delhi' },
  { id: 3, name: 'Arya', city: 'Pune' },
  { id: 4, name: 'Ravi', city: 'kochi' },
  { id: 5, name: 'Ravi s', city: 'Pune' },
  { id: 6, name: 'Achu', city: 'Delhi' },
  { id: 7, name: 'Arun M', city: 'Kolkata' }
];

function App() {
  const [users, setUsers] = useState(originalUser);
  const [currentPage,setCurrentPage] = useState(1)

  const usersPerPage = 3;
  const debounce = useRef(null);

  function handleChange(e) {
    const value = e.target.value.toLowerCase();
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
 // reset to first page on search
      if (value === '') {
        setUsers(originalUser);
      } else {
        let filtered = originalUser.filter(
          (data) =>
            data.id.toString().includes(value) ||
            data.name.toLowerCase().includes(value) ||
            data.city.toLowerCase().includes(value)
        );
        setUsers(filtered);
      }
    }, 300);
  }
  
  function handleNext(){
    setCurrentPage(currentPage+1)
  }
  
  function handlePrev(){
    setCurrentPage(currentPage-1)
    
  }

  return (
    <div>
      <h2>Search Users</h2>
      <input placeholder="Search user" onChange={handleChange} />
      <table border={1} cellPadding={10} style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          { 
            users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div style={{marginTop:10}}>
        <button disabled={currentPage==1} onClick={handlePrev} >prev</button>
        <span>{currentPage} of 3</span>
        <button disabled={currentPage==3} onClick={handleNext}>next</button>
      </div>

   
    </div>
  );
}

export default App;
