import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import UserDashboard from './components/UserDashboard';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const initialData = {
  id: 0,
  name: '',
  email: '',
};



function App() {

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(initialData);
  const [editData, setEditData] = useState(initialData);

  useEffect(() => {
    getUserData();
  }, [data]);


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


  const handleFormSubmit = async (e) => {  
    axios.post("http://localhost:4000/posts", formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setFormData(initialData);
    getUserData();
  };

  const handleEditData = () => {
    debugger;
    axios.put(`http://localhost:4000/posts/${editData.id}`, editData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setEditData(initialData);
    getUserData();
  };

  return (
    <div className="App">

      <AddUser
        getUserData={getUserData}
        initialData={initialData}
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
      />
      <UserDashboard
        data={data}
        setData={setData}
        getUserData={getUserData}
        handleDelete={handleDelete}
        initialData={initialData}
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
        editData={editData}
        setEditData={setEditData}
        handleEditData = {handleEditData}
      />
    </div>
  );
}

export default App;
