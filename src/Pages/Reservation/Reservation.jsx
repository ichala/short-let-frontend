import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PostReservation, checkDate } from '../../Api/reservation/reservationApi';

function Reservation() {
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const [availableHalls, setAvailableHalls] = useState([]);
  const [hall, sethall] = useState(availableHalls[0]);
  const [saved, setSaved] = useState(false);

  function ChooseHall(id) {
    availableHalls.forEach((hall) => {
      if (hall.id === Number(id)) {
        sethall(hall);
      }
    });
  }
  if (saved) {
    return <Navigate to="/" replace />;
  }
  // console.log(hall);
  if (availableHalls.length > 0) {
    return (
      <div>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => ChooseHall(e.target.value)}
        >
          {availableHalls.map((hall) => (
            <option key={hall.id} value={hall.id}>
              {hall.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => PostReservation(setError, date, setloading, hall, setSaved)}
        >
          Reserve
        </button>
      </div>
    );
  }

  return (
    <div>
      {error && error.message}
      <input
        type="date"
        className="form-control"
        onChange={(e) => setDate(e.target.value)}
      />
      {loading ? (
        <div
          className="spinner-grow text-sm text-center text-success"
          role="status"
        />
      ) : (
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => checkDate(setError, setAvailableHalls, date, setloading)}
        >
          Next
        </button>
      )}

    </div>
  );
}

export default Reservation;
