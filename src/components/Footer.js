import React from 'react';
import Button from './Button';
import './Footer.css';
import Section from './Section';
import Heading from './Heading';

const Footer = ({ theme }) => {
    const handleButtonClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Section theme={theme}>
            <div id="socials">
                <Heading>SOCIALS</Heading>
                <footer className="footer">
                    <div className="footer-button-container">
                        {buttons.map((button, index) => (
                            <Button
                                key={index}
                                onClick={() => handleButtonClick(button.url)}
                                children={button.children}
                            />
                        ))}
                    </div>
                </footer>
            </div>
        </Section>
    );
};

export default Footer;

const buttons = [
    { children: 'Discord', url: "https://discord.com/invite/ac5QDrYmhq" },
    { children: 'X / Twitter', url: "https://x.com/KittyKadToken" },
    { children: 'Medium', url: "https://medium.com/@kitty.kad.token" },
    { children: 'Github', url: "https://github.com/kitty-kad/" },
    { children: 'Reddit', url: "https://www.reddit.com/r/kittykad/" },
];