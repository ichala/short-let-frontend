import React from 'react';

import {
  FaBuilding, FaClipboardList, FaClock, FaUser,
} from 'react-icons/fa';
import StatCard from './Cards/StatCard';
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
    </>
  );
}

export default Dashboard;
