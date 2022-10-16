import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserDashboard = ({data, setData, getUserData, handleDelete}) => {

    // const [data, setData] = useState([]);

    useEffect(() => {
        getUserData();
    }, []);


    // const getUserData = async () => {

    //     await axios.get('http://localhost:4000/posts')
    //         .then(res => {
    //             console.log(res.data);
    //             setData(res.data); 
    //         })
    //         .catch(err => console.log(err));
    // }

    // const handleDelete = async (id) => {
    //     await axios.delete(`http://localhost:4000/posts/${id}`)
    //                 .then(res=> getUserData() )
    //                 .then(err => console.log(err)); 

    // }; 


    return (
        <div>
            <h1>User UserDashboard</h1>
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
                                style={{display: "flex", justifyContent: 'center', gap: '10px'}}
                            >
                                <button className='btn btn-info'>Edit</button>
                                <button className='btn btn-danger' onClick={()=> handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserDashboard