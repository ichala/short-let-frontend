import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ChooseDate from './ChooseDate';
import ChooseHall from './ChooseHall';

function Reservation() {
  const [date, setDate] = useState('');
  const [availableHalls, setAvailableHalls] = useState([]);
  const [Saved, setSaved] = useState(null);

  if (Saved) {
    return <Navigate to="/my-reservations" replace />;
  }

  if (availableHalls.length > 0) {
    return (
      <ChooseHall
        date={date}
        setSaved={setSaved}
        availableHalls={availableHalls}
      />
    );
  }

  return (
    <>
      <ChooseDate
        date={date}
        setDate={setDate}
        setAvailableHalls={setAvailableHalls}
      />
    </>
  );
}

export default Reservation;
