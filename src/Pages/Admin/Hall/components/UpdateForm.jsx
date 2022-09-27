import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { updateHall } from '../../../../Api/admins/halls/api';

const UpdateForm = ({ data, setChanged }) => {
  const [form, setForm] = useState(data);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    updateHall(form).then(() => {
      setChanged(true);
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
    <form onSubmit={submit} className="col-md-12 px-3">
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
      <div className="mb-4">
        <button type="submit" className="btn btn-sm btn-success">
          <FaEdit className="mb-1 me-2" />
          Save
        </button>
      </div>
    </form>
  );
};

export default UpdateForm;
