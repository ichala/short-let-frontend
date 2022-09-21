import { useState } from 'react';
import { checkDate } from '../../Api/reservation/reservationApi';

function Reservation() {
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const [availableHalls, setAvailableHalls] = useState([]);

  console.log(availableHalls);
  console.log(date);
  if (availableHalls.length > 0) {
    return <div>Next step</div>;
  }
  return (
    <div>
      {error && error.message}
      <input
        type="date"
        className="form-control"
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="button" className="btn btn-dark" onClick={() => (checkDate(setError, setAvailableHalls, date))}>
        Next
      </button>
    </div>
  );
}

export default Reservation;
