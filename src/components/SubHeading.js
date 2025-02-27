import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './SubHeading.css';

const SubHeading = ({ children }) => {
    const { theme } = useTheme();

    return (
        <h2 className={`subheading ${theme}`}>{children}</h2>
    );
};

export default SubHeading;