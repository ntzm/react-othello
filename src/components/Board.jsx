import React from 'react';
import Cell from './Cell';
import chunk from 'lodash.chunk';

const Board = ({ spaces, onCellClick }) => (
    <div className="board">
        {chunk(spaces.toJS(), 8).map((row, rowKey) => (
            <div className="board__row" key={rowKey}>
                {row.map((player, key) => (
                    <Cell
                        key={8 * rowKey + key}
                        player={player}
                        onClick={() => onCellClick(8 * rowKey + key)}
                    />
                ))}
            </div>
        ))}
    </div>
);

export default Board;
