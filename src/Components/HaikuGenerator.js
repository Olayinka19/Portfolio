import React, { useState } from 'react';

const HaikuGenerator = () => {
  const haikus = [
    ['Algorithms humming', 'Silicon minds at work', 'Code learns and evolves'],
    ['Data streams like rivers', 'Neural networks ignite', 'Machines dream in code'],
    ['Digital thoughts soar', 'Deep learning in the night', 'AI\'s wisdom grows'],
  ];

  const [randomHaiku, setRandomHaiku] = useState(null);

  const generateRandomHaiku = () => {
    const randomIndex = Math.floor(Math.random() * haikus.length);
    setRandomHaiku(haikus[randomIndex]);
  };

  return (
    <div className="haiku">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      <button onClick={generateRandomHaiku}>Generate Haiku</button>
      {randomHaiku && (
        <div className="haiku">
          {randomHaiku.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default HaikuGenerator;
