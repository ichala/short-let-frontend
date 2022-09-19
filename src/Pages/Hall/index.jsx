import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { fetchHalls } from '../../Api/ApiCalls';

const Hall = () => {
  const [halls, setHalls] = useState([]);
  useEffect(() => {
    fetchHalls().then((response) => {
      setHalls(response);
    });
  }, []);

  return (
    <div className="p-5">
      <div>
        <a href="/" className="btn btn-success align-self-center mb-3">
          <FaPlus />
          New Hall
        </a>
      </div>
      <table className="table table-condensed">
        <thead className="table-header">
          <tr>
            <th>Name</th>
            <th>Capacity</th>
            <th>Cost</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {halls.map((hall) => (
            <tr key={hall.name}>
              <td>{hall.name}</td>
              <td>{hall.capacity}</td>
              <td>{hall.cost}</td>
              <td>{hall.description}</td>
              <td>
                <a href="/" className="btn btn-sm btn-info">
                  Update
                </a>
                <a href="/" className="btn btn-sm btn-danger">
                  Delete
                </a>
              </td>
            </tr>
          ))}
          {halls.length === 0 ? (
            <tr className="text-center">
              <td colSpan="6">No Hall Found</td>
            </tr>
          ) : (
            ''
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Hall;
