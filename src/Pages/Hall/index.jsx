import { useEffect, useState } from 'react';
import { fetchHalls } from '../../Api/ApiCalls';
import Create from './create';
import Update from './update';

const Hall = () => {
  const [halls, setHalls] = useState([]);

  // Fetcha all halls when the the hall is changed
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    // Restore the created state
    setChanged(false);
    fetchHalls().then((response) => {
      setHalls(response);
    });
  }, [changed]);

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
            <tr key={hall.name}>
              <td>{hall.name}</td>
              <td>{hall.capacity}</td>
              <td>{hall.cost}</td>
              <td>{hall.description}</td>
              <td>
                <Update id={hall.id} setChanged={setChanged} />
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
