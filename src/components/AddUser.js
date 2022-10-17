import axios from 'axios';
import React, { useState } from 'react';




const AddUser = ({ formData, setFormData, handleFormSubmit }) => {


  return (
    <div className='container'>
      <div className='row p-3 mx-auto my-auto'>

        <h1>Add User </h1>

        <div className="mb-3">
      
          <input type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          
          <input type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className='mb-3'>
          <button className="btn btn-outline-info" onClick={handleFormSubmit}>Add User</button>
        </div>



      </div>

    </div>

  );
}

export default AddUser