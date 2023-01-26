import { FC } from 'react';
import '../../app/background.css';

export const ReviewBG: FC = () => {
  return (
    <div className="section_background">
      <div className="background_spot" style={{ top: '-150px', left: '-5%' }}></div>
      <div className="background_spot" style={{ top: '100px', right: '-20%' }}></div>
      <div className="background_star medium" style={{ top: '300px', right: '-7%' }}></div>
    </div>
  );
}
