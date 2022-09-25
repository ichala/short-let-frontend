import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import { useState } from 'react';
// import { FaEdit } from 'react-icons/fa';
import { updateHall } from '../../Api/admins/halls/api';

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
    name: 'Action',
    selector: (row) => row.action,
  },
];

const ExpandedComponent = ({ data }) => {
  const [form, setForm] = useState(data);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    updateHall(form).then(() => {
      Swal.fire({
        title: 'updated',
        text: 'Hall has been successfully updated!',
        icon: 'info',
        confirmButtonText: 'Cool',
      });
    });
  };

  const {
    name, capacity, cost, image, description,
  } = form;

  return (
    <form onSubmit={submit} className="col-md-12 ps-3">
      <div className="form-group mb-2">
        <label htmlFor="name" className="fomr-label w-100">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            className="form-control w-100"
            placeholder="Hall name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="capacity" className="fomr-label w-100">
          Capacity:
          <input
            type="number"
            name="capacity"
            id="capacity"
            className="form-control w-100"
            placeholder="Hall capacity"
            onChange={handleChange}
            value={capacity}
            required
            min={10}
            max={10000}
          />
        </label>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="cost" className="fomr-label w-100">
          Cost:
          <input
            type="number"
            name="cost"
            id="cost"
            className="form-control w-100"
            placeholder="Hall cost"
            onChange={handleChange}
            value={cost}
            required
          />
        </label>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="image" className="fomr-label w-100">
          Image:
          <input
            type="text"
            name="image"
            id="image"
            className="form-control w-100"
            placeholder="Hall image link"
            onChange={handleChange}
            value={image}
            required
          />
        </label>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="description" className="fomr-label">
          Description:
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Hall description"
            onChange={handleChange}
            value={description}
            required
            cols={32}
            minLength={10}
          />
        </label>
      </div>
      <div className="d-flex justiy-between">
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
};

const HallsTable = ({ halls }) => (
  <DataTable
    columns={columns}
    data={halls}
    expandableRows
    highlightOnHover
    pagination
    responsive
    expandableRowsComponent={ExpandedComponent}
  />
);

export default HallsTable;
