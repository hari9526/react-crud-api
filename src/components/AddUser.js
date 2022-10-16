import axios from 'axios';
import React, { useState } from 'react';

const initialData = {
  name: '',
  email: '',
};


const AddUser = ({getUserData}) => {
  const [formData, setFormData] = useState(initialData);

  const handleFormSubmit = async (e) => {
    axios.post("http://localhost:4000/posts", formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setFormData(initialData);
    getUserData(); 
  };





  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-7'>
          <h1>Add User </h1>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className='mb-3'>
          <button className="btn btn-success" onClick={handleFormSubmit}>Add User</button>
        </div>



      </div>

    </div>

  );
}

export default AddUser