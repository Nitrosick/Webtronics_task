import { FC } from 'react';
import './Poster.css';

export const Poster: FC = () => {
  return (
    <div className="poster">
      <div className="background_spot" style={{ bottom: '-100px', left: '10vw' }}></div>
      <div className="background_spot" style={{ bottom: '50px', right: '5vw' }}></div>
    </div>
  );
}
