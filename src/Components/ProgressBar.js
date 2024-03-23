// ProgressBar.js
import React from 'react';

function ProgressBar({ spent, budget }) {
  const percentage = (spent / budget) * 100;
  const barColor =
    percentage >= 100
      ? 'red'
      : percentage >= 75
      ? 'orange'
      : 'green';

  return (
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{
          width: `${percentage}%`,
          backgroundColor: barColor,
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
