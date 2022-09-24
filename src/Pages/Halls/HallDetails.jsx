import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetHall } from '../../Api/PublicApi/public_api';

function HallDetails() {
  const { id } = useParams();
  const [Hall, setHall] = useState(null);
  const [Error, setError] = useState(false);
  useEffect(() => {
    GetHall(setError, setHall, id);
  }, []);

  console.log(Hall);
  console.log(Error);

  return (
    <div>HallDetails</div>
  );
}

export default HallDetails;
