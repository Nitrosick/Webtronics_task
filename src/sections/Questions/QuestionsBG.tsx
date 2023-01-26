import { FC } from 'react';
import '../../app/background.css';

export const QuestionsBG: FC = () => {
  return (
    <div className="section_background">
      <div className="background_spot" style={{ top: '0', right: '-200px' }}></div>
      <div className="background_star medium" style={{ bottom: '180px', left: '8%' }}></div>
      <div className="background_star small" style={{ bottom: '-20px', right: '35%' }}></div>
    </div>
  );
}
