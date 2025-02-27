import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Text.css';

const Text = ({ children }) => {
    const { theme } = useTheme();

    return (
        <p className={`text ${theme}`}>{children}</p>
    );
};

export default Text;