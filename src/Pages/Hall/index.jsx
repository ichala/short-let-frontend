import { useEffect, useState } from 'react';
import { fetchHalls, removeHall } from '../../Api/halls/api';
import Create from './create';
import Update from './update';

const Hall = () => {
  const [halls, setHalls] = useState([]);

  // Fetcha all halls when the the hall is changed
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    fetchHalls().then((response) => {
      setHalls(response);
      setChanged(false);
    });
  }, [changed]);

  const deleteHall = (id) => {
    removeHall(id).then(() => setChanged(true));
    setChanged(false);
  };

  return (
    <div className="p-5">
      <Create setChanged={setChanged} />
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
            <tr key={hall.id}>
              <td>{hall.name}</td>
              <td>{hall.capacity}</td>
              <td>{hall.cost}</td>
              <td>{hall.description}</td>
              <td className="d-flex">
                <Update data={hall} setChanged={setChanged} />
                <button
                  type="button"
                  onClick={() => deleteHall(hall.id)}
                  className="btn btn-sm btn-danger ml-1"
                >
                  Delete
                </button>
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
