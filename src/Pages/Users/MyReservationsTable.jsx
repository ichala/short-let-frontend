/* eslint-disable no-nested-ternary */
import DataTable from 'react-data-table-component';
import MyReservationsModal from './MyReservationsModal';

const MyReservationsTable = ({
  reservations, setError, setReservation, setDeleted,
}) => {
  const columns = [
    {
      name: 'Date',
      selector: (row) => row.reserve_date,
      sortable: (row) => row.reserve_date,
    },
    {
      name: 'Hall',
      selector: (row) => row.hall.name,
      sortable: (row) => row.hall.name,
    },
    {
      name: 'Status',
      button: true,
      cell: (data) => (
        <span className="d-none d-lg-block">
          {data.status === 'Pending' ? (
            <span className="bg-warning text-white fw-semibold rounded status">{data.status}</span>
          ) : data.status === 'Confirmed' ? (
            <span className="bg-success text-white fw-semibold rounded status">{data.status}</span>
          ) : (
            <span className="bg-danger text-white fw-semibold rounded status">{data.status}</span>
          )}
        </span>
      ),
    },
    {
      name: 'Details',
      button: true,
      cell: (data) => (
        <MyReservationsModal
          error={setError}
          setReservations={setReservation}
          reservation={data}
          alert={setDeleted}
        />
      ),
    },
  ];

  return <DataTable columns={columns} data={reservations} />;
};

export default MyReservationsTable;
