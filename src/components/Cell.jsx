import React from 'react';
import Counter from './Counter';
import { NONE } from '../players';

const Cell = ({ player, onClick }) => (
    <div className="cell" onClick={onClick}>
        {(() => {
            if (player !== NONE) {
                return <Counter player={player} />
            }
        })()}
    </div>
);

export default Cell;
