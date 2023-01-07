import Swal from 'sweetalert2';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { addHall } from '../../../../Api/admins/halls/api';
import Modal from '../../../../components/Modal';
import '../Hall.css';

const Create = ({ setChanged }) => {
  const [close, setClose] = useState(false);
  const data = {
    name: '',
    capacity: 0,
    cost: 0,
    image: '',
    description: '',
  };
  const [form, setForm] = useState(data);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    addHall(form).then(() => {
      setClose(true);
      setChanged(true); // Send a signla to the parent class.
      Swal.fire({
        title: 'Created',
        text: 'Hall has been successfully created!',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
    });
    setForm(data);
    setClose(false); // Allow the hall to have the closing ability next time.
  };
  const {
    name, capacity, cost, image, description,
  } = form;
  return (
    <Modal
      name="newhall"
      icon={<FaPlus />}
      buttonText="Add Hall"
      title="Add a new hall"
      close={close}
      btnClass="btn-outline-success btn-add-hall"
    >
      <form onSubmit={submit}>
        <div className="form-group mb-2">
          <label htmlFor="name" className="fomr-label w-100">
            Name:
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
          </label>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="capacity" className="fomr-label w-100">
            Capacity:
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
          </label>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="cost" className="fomr-label w-100">
            Cost:
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
          </label>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="image" className="fomr-label w-100">
            Image:
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
          </label>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="description" className="fomr-label w-100">
            Description:
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
          </label>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default Create;
