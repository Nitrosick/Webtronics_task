import { FC } from 'react';
import { Stack } from '../../components/Stack/Stack';
import { TechnologiesBG } from './TechnologiesBG';
import './Technologies.css';

export const Technologies: FC = () => {
  return (
    <div className="technologies wrapper" id="technologies_section">
      <TechnologiesBG />
      <h2>Programming<br />technologies</h2>
      <p className="technologies_text">
        By the end, you’ll have the portfolio and interview skills you need to start your new career.
      </p>
      <Stack />
    </div>
  );
}
