import { FC } from 'react';
import { Directions } from '../../types';
import './Arrow.css';

interface ArrowProps {
    direction: Directions;
    change: (value: Directions) => void;
}

export const Arrow: FC<ArrowProps> = ({ direction, change }) => {
  return (
    <div className="arrow_wrapper">
        <button
          className="arrow_button"
          onClick={() => { change(direction === 'right' ? Directions.Right : Directions.Left) }}
        >
            <span className="arrow_button_sign">
                {direction === 'right' ? '>' : '<'}
            </span>
        </button>
    </div>
  );
}
