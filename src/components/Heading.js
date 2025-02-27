import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Heading.css';

const Heading = ({ children }) => {
    const { theme } = useTheme();

    return (
        <h1 className={`heading ${theme}`}>{children}</h1>
    );
};

export default Heading;