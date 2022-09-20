import { useEffect, useState } from 'react';
import { fetchHalls } from '../../Api/ApiCalls';
import Create from './create';

const Hall = () => {
  const [halls, setHalls] = useState([]);
  useEffect(() => {
    fetchHalls().then((response) => {
      setHalls(response);
    });
  }, []);

  return (
    <div className="p-5">
      <Create />
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
