import { FC } from 'react';
import './Mentor.css';

interface MentorProps {
    photo: string;
    name: string;
    post: string;
}

export const Mentor: FC<MentorProps> = ({ photo, name, post }) => {
    return (
        <div className="mentor">
            <div className="mentor_photo_wrapper">
                <img className="mentor_photo" src={photo} alt="mentor" />
            </div>
            <h4 className="mentor_name">{name}</h4>
            <p className="mentor_post">{post}</p>
        </div>
    );
}
