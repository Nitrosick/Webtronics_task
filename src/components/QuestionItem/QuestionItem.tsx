import { FC, useState } from 'react';
import './QuestionItem.css';

interface QuestionItemProps {
    title: string;
    description: string;
    open?: boolean;
}

export const QuestionItem: FC<QuestionItemProps> = ({ title, description, open = false }) => {
    const [closed, setClosed] = useState<boolean>(!open);

    return (
        <div className={`question_item ${closed ? 'closed' : ''}`}>
            <div className="question_item_content">
                <h4>{title}</h4>
                <p className="question_item_description">{description}</p>
                <button
                    className="question_item_switcher"
                    onClick={() => { setClosed(!closed) }}
                >
                    {closed ? '+' : '-'}
                </button>
            </div>
        </div>
    );
}
