import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Card.css';

const Card = ({ children, onClick }) => {
    const { theme } = useTheme();

    return (
        <div className={`card ${theme}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;