import React from 'react';
import Section from './Section';
import Heading from './Heading';
import ProjectCard from './ProjectCard';
import './CommunityEfforts.css';

const CommunityEfforts = ({ theme }) => {
    return (
        <Section theme={theme}>
            <div id="community-efforts" className="content-section">
                <Heading>COMMUNITY EFFORTS</Heading>
                <div className="cards-container">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            imageAlt={project.imageAlt}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default CommunityEfforts;

const projectsData = [
    {
        title: "Donations",
        description: "Donated over $2,000 to charity",
        imageSrc: "/heart.png",
        imageAlt: "Donations"
    },
    {
        title: "Community Grants",
        description: "Kitty Kads given away to developer, designers and video creators in Kadena",
        imageSrc: "/hello_world.png",
        imageAlt: "Community Grants"
    },
    {
        title: "Pact Tutorials",
        description: "Multiple tutorials individually and with YouTubers",
        imageSrc: "/tutorials.png",
        imageAlt: "Pact Tutorials"
    },
    {
        title: "5,000 KDA Fund",
        description: "KDA set aside for growing the community.",
        imageSrc: "/kadena.png",
        imageAlt: "5,000 KDA Fund"
    }
];
