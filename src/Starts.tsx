import React from 'react';

const Starts: React.FC<{ stars: number }> = ({ stars }) => {
  const items = [];
  for (let i = 0; i <= stars; i++) {
    items.push('⭐');
  }
  return <>{items.join('')}</>;
};

export default Starts;
