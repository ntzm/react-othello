import React from 'react';

const Counter = ({ player }) => (
    <div className={`counter counter--player-${player}`} />
);

export default Counter;
