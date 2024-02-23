import React, { useState } from 'react';

const BetForm = () => {
  const [betTime, setBetTime] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Placeholder to illustrate where the bet placement logic would go
    console.log(`Placing bet for time: ${betTime}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="datetime-local"
        value={betTime}
        onChange={(e) => setBetTime(e.target.value)}
      />
      <button type="submit">Place Bet</button>
    </form>
  );
};

export default BetForm;