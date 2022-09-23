import React, { useState } from 'react';

function UserManagement({ user }) {
  const [Loading] = useState(false);
  return (
    <div className="row p-3">
      <div className="col-12 ">
        <form className="p-3">
          <div className="mb-3">
            <div className="form-text">First Name</div>
            <input type="text" disabled value={user.first_name} required name="email" className="form-control" />
          </div>
          <div className="mb-3">
            <div className="form-text">Last Name</div>
            <input type="text" disabled value={user.last_name} required name="email" className="form-control" />
          </div>
          <div className="mb-3">
            <div className="form-text">Email</div>
            <input type="email" disabled value={user.email} required name="email" className="form-control" />
          </div>
          <div className="mb-3">
            <div className="form-text">Role</div>
            <select
              className="form-select text-center"
              aria-label="Default select example"
              required
              defaultValue={user.role}
            >
              <option value="admin">
                Admin
              </option>
              <option value="user">
                User
              </option>
            </select>
          </div>
          <div className="mb-3">

            {Loading ? (
              <div
                className="spinner-grow
       text-sm text-center text-success"
                role="status"
              />
            )
              : (
                <>
                  <button type="submit" className="btn btn-warning m-2">Update</button>
                  <button type="button" className="btn btn-danger m-2">Delete</button>
                </>
              )}
          </div>

        </form>
      </div>
    </div>
  );
}

export default UserManagement;
