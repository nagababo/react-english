import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../components/Styling/MasterPage.css';

const MasterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="master-page">
      <nav className="side-nav">
        <ul>
          <li><Link to="/app">Home</Link></li>
          <li><Link to="/app/admin">Admin Panel</Link></li>
          <li><Link to="/app/tictac">TicTac Game</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MasterPage;