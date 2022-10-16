import React from 'react'

const UpdateUser = ({editData, setEditData, formData, setFormData, handleFormSubmit}) => {

    return (
        <div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter name"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
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