import React from 'react';

import {
  FaBuilding, FaClipboardList, FaClock, FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import StatCard from './Cards/StatCard';
import HallsCarousel from './Carousel/HallsCarousel';
import HallsChart from './Charts/HallsChart';
import ReservationsChart from './Charts/ReservationsChart';
import ReservationStatsTable from './Tables/ReservationStatsTable';
import UserStatsTable from './Tables/UserStatsTable';

function Dashboard() {
  const DummyData = [{
    stat_name: 'Users',
    stat_number: '54',
    stat_icon: <FaUser size="70px" />,
  }, {
    stat_name: 'Reservations',
    stat_number: '54',
    stat_icon: <FaClipboardList size="70px" />,
  }, {
    stat_name: 'Pending',
    stat_number: '54',
    stat_icon: <FaClock size="70px" />,
  }, {
    stat_name: 'Halls',
    stat_number: '54',
    stat_icon: <FaBuilding size="70px" />,
  }];
  return (
    <>
      <div className="row m-2  d-flex justify-content-center align-content-center">
        <div className="btn-group w-50" role="group" aria-label="Basic example">
          <Link className="btn btn-success" to="/"> Manage Users</Link>
          <Link className="btn btn-success" to="/"> Manage Reservations</Link>
          <Link className="btn btn-success" to="/"> Pending Reservations</Link>
          <Link className="btn btn-success" to="/"> Manage Halls</Link>
        </div>
      </div>
      <div className="row mt-2">
        {DummyData.map((card) => (
          <StatCard key={card.stat_name} data={card} />
        ))}
      </div>
      <div className="row mt-2">
        <ReservationsChart />
        <HallsChart />
      </div>
      <div className="row mt-2">
        <UserStatsTable />
        <ReservationStatsTable />
      </div>
      <div className="row mt-2">
        <HallsCarousel />

      </div>
    </>
  );
}

export default Dashboard;
