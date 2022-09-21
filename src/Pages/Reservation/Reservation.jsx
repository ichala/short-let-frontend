import { useState } from 'react';
import { PostReservation, checkDate } from '../../Api/reservation/reservationApi';

function Reservation() {
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const [availableHalls, setAvailableHalls] = useState([]);
  const [hall, sethall] = useState(availableHalls[0]);
  const [message, setmessage] = useState('');

  function ChooseHall(id) {
    availableHalls.forEach((hall) => {
      if (hall.id === Number(id)) {
        sethall(hall);
      }
    });
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
          onClick={() => PostReservation(setError, date, setloading, hall, setmessage)}
        >
          Reserve
        </button>
        {message}
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
