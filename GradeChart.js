import React from 'react';
import { Line } from 'react-chartjs-2';

function GradeChart({ grades }) {
  const data = {
    labels: grades.map(g => g.subject),
    datasets: [{
      label: 'Grades',
      data: grades.map(g => g.grade),
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 2,
      fill: false
    }]
  };

  return <Line data={data} />;
}

export default GradeChart;