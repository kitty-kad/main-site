import React from 'react';
import Section from './Section';
import Heading from './Heading';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({ theme }) => {
    return (
        <Section theme={theme}>
            <div id="projects" className="dapps-section">
                <Heading>PROJECTS</Heading>
                <div className="cards-container">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            imageAlt={project.imageAlt}
                            url={project.url}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;

const projectsData = [
    {
        title: "NFT Collection",
        description: "First limited NFT collection on Kadena and a fun breeding game.",
        imageSrc: "/nft_collection.png",
        imageAlt: "NFT Collection",
        url: "https://kitties.kittykad.com/"
    },
    {
        title: "Token Tracker",
        description: "First price tracker for tokens on Kadena",
        imageSrc: "/price_tracker.png",
        imageAlt: "Token Tracker",
        url: "https://prices.kittykad.com/"
    },
    {
        title: "FUD Survivor Game",
        description: "Fun game to pass time and survive FUD times.",
        imageSrc: "/fud_survivor.png",
        imageAlt: "FUD Survivor Game",
        url: "https://fudsurvivor.kittykad.com/"
    }
];