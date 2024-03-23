import React, { useState } from 'react';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component
// import './styles.css'; // Import the stylesheet

function Budget() {
  const [budgets, setBudgets] = useState([]);
  const [newBudget, setNewBudget] = useState({ title: '', budget: '', spent: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBudget({ ...newBudget, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudgets([...budgets, newBudget]);
    setNewBudget({ title: '', budget: '', spent: '' });
  };

  return (
    <div>
    <br />
    <br />
    <br />
      <h1>Budget Visualization</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Budget Title"
          value={newBudget.title}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="budget"
          placeholder="Budget Amount"
          value={newBudget.budget}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="spent"
          placeholder="Spent Amount"
          value={newBudget.spent}
          onChange={handleInputChange}
        />
        <button type="submit">Add Budget</button>
      </form>
      <div>
        {budgets.map((budget, index) => (
          <div key={index} className="budget-item">
            <h2>{budget.title}</h2>
            <p>Budget: ${budget.budget}</p>
            <p>Spent: ${budget.spent}</p>
            <ProgressBar spent={budget.spent} budget={budget.budget} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Budget;
