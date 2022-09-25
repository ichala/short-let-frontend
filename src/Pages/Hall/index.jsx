import { useEffect, useState } from 'react';
import { fetchHalls } from '../../Api/admins/halls/api';
import Create from './create';
import HallsTable from './HallsTable';

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

  return (
    <div className="p-md-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Halls list</h2>
        <Create setChanged={setChanged} />
      </div>
      <HallsTable halls={halls} />
    </div>
  );
};

export default Hall;
