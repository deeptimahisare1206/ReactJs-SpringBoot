// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import UserCount from '../Components/UserCount';
import UserGraph from '../Components/UserGraph';
import axios from 'axios';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [userGrowthData, setUserGrowthData] = useState([30, 45, 55, 60, 70]);  // Initial sample data


  return (
    <div className="flex flex-1 ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Sidebar/>
        <UserCount />
        <UserGraph data={userGrowthData} />
      </div>
    </div>
  );
};

export default Dashboard;
