import { FC } from 'react';
import photo_1 from '../../images/photos/photo_1.jpg';
import photo_2 from '../../images/photos/photo_2.jpg';
import photo_3 from '../../images/photos/photo_3.jpg';
import { Mentor } from '../../components/Mentor/Mentor';
import { AboutUsBG } from './AboutUsBG';
import './AboutUs.css';

export const AboutUs: FC = () => {
  return (
    <div className="about_us wrapper" id="about_section">
        <AboutUsBG />
        <h2>About Us</h2>

        <div className="about_us_content">
            <div className="about_us_mentors">
                <h3 className="about_us_mentors_title">Mentors</h3>
                <div className="about_us_mentors_list">
                  <Mentor photo={photo_1} name={'Wade Warren'} post={'Front-end engineers work closely with designers'} />
                  <Mentor photo={photo_2} name={'Kristin Watson'} post={'Front-end engineers work closely with designers'} />
                  <Mentor photo={photo_3} name={'Robert Fox'} post={'Front-end engineers work closely with designers'} />
                </div>
            </div>
            <p className="about_us_text">
                Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.
            </p>
        </div>
    </div>
  );
}
