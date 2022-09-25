import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';
import { removeHall } from '../../Api/admins/halls/api';
import UpdateForm from './components/UpdateForm';

const deleteHall = (id) => {
  removeHall(id).then(() => {
    // setChanged(true);
    Swal.fire({
      title: 'Deleted',
      text: 'Hall has been successfully deleted!',
      icon: 'Error',
      confirmButtonText: 'Okay',
    });
  });
  // setChanged(false);
};

const columns = [
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: (row) => row.name,
  },
  {
    name: 'Capacity',
    selector: (row) => row.capacity,
    sortable: (row) => row.capacity,
  },
  {
    name: 'Cost',
    selector: (row) => row.cost,
    sortable: (row) => row.cost,
  },
  {
    name: 'Description',
    selector: (row) => row.description,
  },
  {
    name: 'Actions',
    button: true,
    cell: (data) => (
      <button className="btn me-4" onClick={() => deleteHall(data.id)} type="button">
        <FaTrash className="text-danger" />
      </button>
    ),
  },
];

const HallsTable = ({ halls }) => (
  <DataTable
    columns={columns}
    data={halls}
    expandableRows
    highlightOnHover
    pagination
    responsive
    expandableRowsComponent={UpdateForm}
  />
);

export default HallsTable;
