import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Button.css';

const Button = ({ children, onClick }) => {
    const { theme } = useTheme();

    return (
        <button
            className={`button ${theme}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;