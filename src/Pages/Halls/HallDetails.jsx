import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetHall } from '../../Api/PublicApi/public_api';

function HallDetails() {
  const { id } = useParams();
  const [Hall, setHall] = useState(null);
  const [Error, setError] = useState(second);
  useEffect(() => {
    GetHall(setError, setHall, id);
  }, []);

  return (
    <div>HallDetails</div>
  );
}

export default HallDetails;
