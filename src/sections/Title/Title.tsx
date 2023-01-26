import { FC } from 'react';
import { Button } from '../../components/Button/Button';
import './Title.css';

export const Title: FC = () => {
  return (
    <div className="title wrapper">
        <div className="title_content">
            <h1 className="text_frontend">Front-End</h1>
            <p className="title_content_text">
                Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).
            </p>
            <Button content='Start my career change' />
            <h1 className="text_developer">Developer</h1>
            <h3 className="text_courses">Courses</h3>
        </div>
    </div>
  );
}
