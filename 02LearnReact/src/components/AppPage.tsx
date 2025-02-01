import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MasterPage from './MasterPage';
import AdminPanel from './AdminPanel';
import TicTacGameBoard from './TicTacGame';

const AppPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MasterPage />}>
        <Route index element={<h1>Welcome to the App</h1>} />
        <Route path="admin" element={<AdminPanel />} />
        <Route path="tictac" element={<TicTacGameBoard />} />
      </Route>
    </Routes>
  );
};

export default AppPage;