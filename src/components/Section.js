import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import './Section.css';

const Section = ({ children, theme, id }) => {
    return (
        <ThemeProvider value={{ theme }}>
            <section className={`section ${theme}`}>
                <div className="section-container">
                    {children}
                </div>
            </section>
        </ThemeProvider>
    );
};

export default Section;