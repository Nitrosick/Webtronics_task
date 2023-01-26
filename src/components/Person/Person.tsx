import { FC } from 'react';
import './Person.css';

interface PersonProps {
  main_photo: string;
  alt_photo: string;
  selected?: boolean;
}

export const Person: FC<PersonProps> = ({ main_photo, alt_photo, selected = false }) => {
  return (
    <div className={`person ${selected ? 'selected' : ''}`} >
      <div
        className="person_image"
        style={{ backgroundImage: `url(${selected ? main_photo : alt_photo})` }}
      ></div>
    </div>
  );
}
