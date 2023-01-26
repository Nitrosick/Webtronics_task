import { FC } from 'react';
import '../../app/background.css';

export const AboutUsBG: FC = () => {
  return (
    <div className="section_background">
      <div className="background_spot" style={{ bottom: '-100px', right: '-200px' }}></div>

      <span className="background_text">Front-End</span>

      <div className="background_star medium" style={{ top: '40px', left: '20%' }}></div>
      <div className="background_star small" style={{ top: '-10px', left: '50%' }}></div>
      <div className="background_star small" style={{ top: '0', right: '27%' }}></div>
      <div className="background_star big" style={{ top: '0', right: '0' }}></div>
      <div className="background_star medium" style={{ top: '400px', left: '5%' }}></div>
      <div className="background_star small" style={{ bottom: '250px', right: '30%' }}></div>
      <div className="background_star small" style={{ bottom: '70px', right: '20%' }}></div>
    </div>
  );
}
