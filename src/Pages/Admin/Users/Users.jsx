import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { fetchUsers } from '../../../Api/admins/users/UserApi';
import UserManagement from './UserManagement';

const conditionalRowStyles = [
  {
    when: (row) => row.role === 'admin',
    style: {
      backgroundColor: 'rgba(63, 195, 128, 0.2)',
      color: 'black',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }];
const columns = [
  {
    name: 'Full Name',
    selector: (row) => `${row.first_name} ${row.last_name}`,
    sortable: true,
  },
  {
    name: 'Email',
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: 'Role',
    selector: (row) => row.role,
    sortable: true,
  },
  {
    name: 'Reservations',
    selector: (row) => row.reservations.length,
    sortable: true,
  },
];

function Users() {
  const [Users, setUsers] = useState(null);
  const [Error, setError] = useState(null);
  const [Updated, setUpdated] = useState(false);
  const ExpandedComponent = ({ data }) => <UserManagement user={data} setUpdated={setUpdated} />;
  useEffect(() => {
    fetchUsers(setError, setUsers);
    setUpdated(false);
  }, [Updated]);
  if (!Users) {
    return (
      <>
        {!Error ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-lg text-center text-success" role="status" />
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            {Error}
          </div>
        )}
      </>
    );
  }

  return (
    <DataTable
      columns={columns}
      data={Users}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      pagination
      conditionalRowStyles={conditionalRowStyles}
    />
  );
}

export default Users;
