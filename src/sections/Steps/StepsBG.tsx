import { FC } from 'react';
import '../../app/background.css';

export const StepsBG: FC = () => {
  return (
    <div className="section_background">
      <div className="background_spot" style={{ top: '25%', left: '-100px' }}></div>

      <div className="background_star medium" style={{ top: '0', left: '20%' }}></div>
      <div className="background_star small" style={{ top: '450px', left: '5%' }}></div>
      <div className="background_star medium" style={{ top: '460px', right: '-50px' }}></div>
      <div className="background_star small" style={{ top: '600px', right: '30%' }}></div>
      <div className="background_star small" style={{ top: '900px', right: '10%' }}></div>
    </div>
  );
}
