import { FaPlus } from 'react-icons/fa';

const Hall = () => {
  const m = 'No Hall Found';
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
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td colSpan="6">{m}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Hall;
