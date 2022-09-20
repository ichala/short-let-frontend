/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { addHall } from '../../Api/ApiCalls';
import Modal from '../../components/Modal';

const Create = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    capacity: 0,
    cost: 0,
    image: '',
    description: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    addHall(form).then((response) => {
      console.log(response);
      if (response.created.name === form.name) navigate('/halls');
    });
  };

  return (
    <Modal name="newhall" icon={<FaPlus />} buttonText="Add Hall" title="Add a new hall">
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

export default Create;
