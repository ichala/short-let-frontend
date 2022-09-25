import React, { useEffect, useState } from 'react';

import {
  FaBuilding, FaClipboardList, FaClock, FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GetStats from '../../../Api/dashboard/dashboardApi';
import StatCard from './Cards/StatCard';
import HallsCarousel from './Carousel/HallsCarousel';
import HallsChart from './Charts/HallsChart';
import ReservationsChart from './Charts/ReservationsChart';
import ReservationStatsTable from './Tables/ReservationStatsTable';
import UserStatsTable from './Tables/UserStatsTable';

function Dashboard() {
  const [Stats, setStats] = useState(null);
  const [Error, setError] = useState(null);
  const CardsData = [{
    stat_name: 'Users',
    stat_number: Stats?.card_stats?.total_users,
    stat_icon: <FaUser size="70px" />,
  }, {
    stat_name: 'Reservations',
    stat_number: Stats?.card_stats?.total_reservations,
    stat_icon: <FaClipboardList size="70px" />,
  }, {
    stat_name: 'Pending',
    stat_number: Stats?.card_stats?.total_pendings_reservations,
    stat_icon: <FaClock size="70px" />,
  }, {
    stat_name: 'Halls',
    stat_number: Stats?.card_stats?.total_halls,
    stat_icon: <FaBuilding size="70px" />,
  }];
  useEffect(() => {
    GetStats(setError, setStats);
  }, []);
  if (!Stats) {
    return (
      <>
        {!Error ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-lg text-center text-success" role="status" />
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            {Error}
          </div>
        )}

      </>
    );
  }

  return (
    <>
      <div className="row m-1 ">
        <div className="col-md-3 mt-1 col-12 d-flex justify-content-center align-content-center">
          <Link type="button" className="btn btn btn-outline-success" to="/admin/users"> Manage Users</Link>
        </div>
        <div className="col-md-3 mt-1 col-12 d-flex justify-content-center align-content-center">
          <Link type="button" className="btn btn btn-outline-success" to="/admin/dashboard/requests"> Manage Reservations</Link>
        </div>
        <div className="col-md-3 mt-1 col-12 d-flex justify-content-center align-content-center">
          <Link type="button" className="btn btn btn-outline-success" to="/admin/dashboard/pending-requests"> Pending Reservations</Link>
        </div>
        <div className="col-md-3 mt-1 col-12 d-flex justify-content-center align-content-center">
          <Link type="button" className="btn btn btn-outline-success" to="/admin/dashboard/halls"> Manage Halls</Link>
        </div>

      </div>
      <div className="row mt-2">
        {CardsData.map((card) => (
          <StatCard key={card.stat_name} data={card} />
        ))}
      </div>

      <div className="row mt-2">
        <ReservationsChart stats={Stats.reservation_chart} />
        <HallsChart stats={Stats.halls_chart} />
      </div>
      <div className="row mt-2">
        <UserStatsTable stats={Stats.recent_stats.recent_users} />
        <ReservationStatsTable stats={Stats.recent_stats.recent_reservations} />
      </div>
      <div className="row mt-2">
        <HallsCarousel stats={Stats.halls} />

      </div>
    </>
  );
}

export default Dashboard;
