import { FC } from 'react';
import question_mark from '../../images/background/question_mark.png';
import { QuestionItem } from '../../components/QuestionItem/QuestionItem';
import { QuestionsBG } from './QuestionsBG';
import './Questions.css';

export const Questions: FC = () => {
  return (
    <div className="questions wrapper" id="questions_section">
        <QuestionsBG />
        <h2>Frequently Asked<br />Questions</h2>

        <div className="questions_content">
            <p className="questions_text">
                Do you have any kind of questions?<br />
                We are here to help.
            </p>

            <div className="questions_list">
                <QuestionItem title={'What is the price?'} description={'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'} open={true} />
                <QuestionItem title={'What is the price?'} description={'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'} />
                <QuestionItem title={'What is the price?'} description={'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'} />
                <QuestionItem title={'What is the price?'} description={'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'} />
                <QuestionItem title={'What is the price?'} description={'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'} />
            </div>

            <div className="questions_mark">
                <img
                    src={question_mark}
                    alt="questions mark"
                    className="questions_mark_img"
                    width="345"
                    height="405"
                />
            </div>
        </div>
    </div>
  );
}
