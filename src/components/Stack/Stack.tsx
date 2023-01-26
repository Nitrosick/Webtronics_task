import angular from '../../images/technologies/angular.svg';
import react from '../../images/technologies/react.svg';
import vue from '../../images/technologies/vue.svg';
import js from '../../images/technologies/js.svg';
import { FC } from 'react';
import './Stack.css';

export const Stack: FC = () => {
    return (
        <div className="stack">
            <div className="stack_item_wrapper">
                <div className="stack_item">
                    <img
                        src={angular}
                        alt="angular logo"
                        className="stack_item_logo"
                    />
                    <h4>Angular</h4>
                </div>
            </div>

            <div className="stack_item_wrapper">
                <div className="stack_item">
                    <img
                        src={react}
                        alt="angular logo"
                        className="stack_item_logo"
                    />
                    <h4>React</h4>
                </div>
            </div>

            <div className="stack_item_wrapper">
                <div className="stack_item">
                    <img
                        src={vue}
                        alt="angular logo"
                        className="stack_item_logo"
                    />
                    <h4>Vue.js</h4>
                </div>
            </div>

            <div className="stack_item_wrapper">
                <div className="stack_item">
                    <img
                        src={js}
                        alt="angular logo"
                        className="stack_item_logo"
                    />
                    <h4>JavaScript</h4>
                </div>
            </div>
        </div>
    );
}
