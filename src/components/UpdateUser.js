import React from 'react'

const UpdateUser = ({ editData, setEditData }) => {

    return (
        <div>
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter name"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <input type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    value={editData.email}
                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                />
            </div>
        </div>
    )
}

export default UpdateUser