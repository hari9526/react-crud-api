import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import UserDashboard from './components/UserDashboard';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUserData();
  }, );


  const getUserData = async () => {
    await axios.get('http://localhost:4000/posts')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/posts/${id}`)
      .then(res => getUserData())
      .then(err => console.log(err));

  };


  

  return (
    <div className="App">
      <AddUser
        getUserData={getUserData}
      />
      <UserDashboard
        data={data}
        setData={setData}
        getUserData={getUserData}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
