/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Swal from 'sweetalert2';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { updateHall } from '../../Api/halls/api';
import Modal from '../../components/Modal';

const Update = ({ data, setChanged }) => {
  const [close, setClose] = useState(false);
  const [form, setForm] = useState(data);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    updateHall(form).then(() => {
      setClose(true);
      setChanged(true); // Send a signal to the parent class.
      Swal.fire({
        title: 'updated',
        text: 'Hall has been successfully updated!',
        icon: 'info',
        confirmButtonText: 'Cool',
      });
    });
    setClose(false); // Allow the hall to have the closing ability next time.
  };

  const {
    name, capacity, cost, image, description,
  } = form;

  return (
    <Modal
      name={`editHall${form.id}`}
      icon={<FaEdit />}
      buttonText="Edit"
      title="Update the hall"
      close={close}
      btnClass="btn-info btn-sm text-white"
    >
      <form onSubmit={submit}>
        <div className="form-group mb-2">
          <label htmlFor="name" className="fomr-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Hall name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="capacity" className="fomr-label">
            Capacity:
          </label>
          <input
            type="number"
            name="capacity"
            id="capacity"
            className="form-control"
            placeholder="Hall capacity"
            onChange={handleChange}
            value={capacity}
            required
            min={10}
            max={10000}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="cost" className="fomr-label">
            Cost:
          </label>
          <input
            type="number"
            name="cost"
            id="cost"
            className="form-control"
            placeholder="Hall cost"
            onChange={handleChange}
            value={cost}
            required
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="image" className="fomr-label">
            Image:
          </label>
          <input
            type="text"
            name="image"
            id="image"
            className="form-control"
            placeholder="Hall image link"
            onChange={handleChange}
            value={image}
            required
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="description" className="fomr-label">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Hall description"
            onChange={handleChange}
            value={description}
            required
            minLength={10}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default Update;
