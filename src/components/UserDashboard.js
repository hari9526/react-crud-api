import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UpdateUser from './UpdateUser';

const UserDashboard = ({ data, getUserData, handleDelete, handleEditData, setEditData, editData }) => {

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((user) => (
                        <tr>

                            <th scope='row'>{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td
                                style={{ display: "flex", justifyContent: 'center', gap: '10px' }}
                            >
                                <button className='btn btn-link text-decoration-none'
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => {
                                        setEditData({
                                            id: user.id,
                                            name: user.name,
                                            email: user.email,
                                        });
                                    }}
                                >
                                    Edit
                                </button>
                                <button className='btn btn-link text-decoration-none text-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <UpdateUser
                                editData={editData}
                                setEditData={setEditData}

                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-outline-success" data-bs-dismiss="modal" onClick={handleEditData}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard