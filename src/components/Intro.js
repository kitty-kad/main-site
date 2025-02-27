import React from 'react';
import Heading from './Heading';
import Text from './Text';
import Button from './Button';
import './Intro.css';
import Section from './Section';

const Intro = ({ theme }) => {
    return (
        <Section theme={theme}>
            <div className="intro">
                <div className="intro-image">
                    <img src="/kittykad.png" alt="Kitty Kad" />
                </div>
                <div className="intro-content">
                    <Heading>KITTY KAD</Heading>
                    <Text>Cute cat themed projects on Kadena</Text>
                    <Button onClick={() => window.location.hash = "#projects"}>Learn more</Button>
                </div>
            </div>
        </Section>
    );
};

export default Intro;