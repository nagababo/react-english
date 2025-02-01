import React from 'react';
import '../components/Styling/AdminPanel.css';
import TictacGame from '../tictac';
const TicTacGameBoard: React.FC = () => {
  return (
    <div className="admin-panel">
      <TictacGame/>
      
    </div>
  );
};

export default TicTacGameBoard;