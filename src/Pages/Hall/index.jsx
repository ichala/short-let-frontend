import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { fetchHalls, removeHall } from '../../Api/halls/api';
import Create from './create';
import Update from './update';

const Hall = () => {
  const [halls, setHalls] = useState([]);

  // Fetch all halls when the the hall is changed or added
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    fetchHalls().then((response) => {
      setHalls(response);
      setChanged(false);
    });
  }, [changed]);

  const deleteHall = (id) => {
    removeHall(id).then(() => {
      setChanged(true);
      Swal.fire({
        title: 'Deleted',
        text: 'Hall has been successfully deleted!',
        icon: 'Error',
        confirmButtonText: 'Okay',
      });
    });
    setChanged(false);
  };

  return (
    <div className="p-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Halls list</h2>
        <Create setChanged={setChanged} />
      </div>
      <table className="table table-condensed mt-4 table-hover">
        <thead className="table-headeri active">
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
              <td className="d-flex justify-content-end">
                <Update data={hall} setChanged={setChanged} />
                <button
                  type="button"
                  onClick={() => deleteHall(hall.id)}
                  className="btn btn-sm btn-danger ms-2"
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
