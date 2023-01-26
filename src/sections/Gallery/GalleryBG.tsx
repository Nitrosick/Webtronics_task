import { FC } from 'react';
import '../../app/background.css';

export const GalleryBG: FC = () => {
  return (
    <div className="section_background">
      <div className="background_spot" style={{ bottom: '-100px', left: '-15%' }}></div>
      <div className="background_spot" style={{ bottom: '-320px', right: '-17%' }}></div>

      <div className="background_star big" style={{ bottom: '120px', right: '25%' }}></div>
      <div className="background_star small" style={{ bottom: '-50px', right: '40%' }}></div>
      <div className="background_star small" style={{ bottom: '-120px', left: '20%' }}></div>
    </div>
  );
}
