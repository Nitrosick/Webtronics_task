import { FC } from 'react';
import '../../app/background.css';

export const TechnologiesBG: FC = () => {
  return (
    <div className="section_background">
      <div className="background_spot" style={{ bottom: '-50px', left: '-150px' }}></div>
      <div className="background_star big" style={{ top: '0', right: '0' }}></div>
    </div>
  );
}
