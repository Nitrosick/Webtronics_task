import { FC } from 'react';
import { Directions } from '../../types';
import './StepItem.css';

interface StepItemProps {
    direction: Directions;
    number: number;
    title: string;
    description: string;
}

export const StepItem: FC<StepItemProps> = ({ direction, number, title, description }) => {
  return (
    <div className={`step_item ${direction}`}>
        <div className="step_item_wrapper">
            <div className="step_item_content">
                <h4>Step {number}</h4>
                <h3>{title}</h3>
                <p className="step_item_description">{description}</p>
            </div>
        </div>
    </div>
  );
}
