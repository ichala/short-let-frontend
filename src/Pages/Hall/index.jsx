import { useEffect, useState } from 'react';
import { editHall, fetchHalls } from '../../Api/ApiCalls';
import Create from './create';

const Hall = () => {
  const [halls, setHalls] = useState([]);

  // Fetcha all halls when the the hall is created
  const [created, setCreated] = useState(false);

  useEffect(() => {
    // Restore the created state
    setCreated(false);
    fetchHalls().then((response) => {
      setHalls(response);
    });
  }, [created]);

  const getHall = (id) => {
    alert(id);
    editHall(id);
  };

  return (
    <div className="p-5">
      <Create setCreated={setCreated} />
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
                <button type="button" className="btn btn-sm btn-info" onClick={() => getHall(hall.id)}>
                  Update
                </button>
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
