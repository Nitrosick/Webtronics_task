import { FC } from 'react';
import { StepItem } from '../../components/StepItem/StepItem';
import { Directions } from '../../types';
import './Steps.css';
import { StepsBG } from './StepsBG';

export const Steps: FC = () => {
  return (
    <div className="steps wrapper" id="steps_section">
        <StepsBG />
        <h2>Steps</h2>

        <div className="steps_tree">
            <div className="steps_scale"></div>
            <StepItem
                direction={Directions.Left}
                number={1}
                title={'Introduction to Front-End'}
                description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'}
            />

            <StepItem
                direction={Directions.Right}
                number={2}
                title={'Overview of Development'}
                description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'}
            />

            <StepItem
                direction={Directions.Left}
                number={3}
                title={'Introduction to Front-End'}
                description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'}
            />

            <StepItem
                direction={Directions.Right}
                number={4}
                title={'Overview of Development'}
                description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'}
            />

            <StepItem
                direction={Directions.Left}
                number={5}
                title={'Introduction to Front-End'}
                description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'}
            />

            <StepItem
                direction={Directions.Right}
                number={6}
                title={'Overview of Development'}
                description={'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'}
            />
        </div>
    </div>
  );
}
