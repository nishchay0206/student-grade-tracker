import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GradeChart from '../components/GradeChart';

function Dashboard() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    axios.get(`http://localhost:5000/api/grades/${user}`).then(res => setGrades(res.data));
  }, []);

  return (
    <div className='p-4'>
      <h2 className='text-2xl'>Dashboard</h2>
      <ul>
        {grades.map((g, i) => (
          <li key={i}>{g.subject}: {g.grade}</li>
        ))}
      </ul>
      <GradeChart grades={grades} />
    </div>
  );
}

export default Dashboard;