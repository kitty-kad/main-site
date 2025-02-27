import React from 'react';
import Card from './Card';
import SubHeading from './SubHeading';
import Text from './Text';
import CardImage from './CardImage';

const ProjectCard = ({ title, description, imageSrc, imageAlt, url }) => {
    const handleCardClick = () => {
        if (url) {
            window.open(url, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <Card
            onClick={handleCardClick}
            style={{
                cursor: url ? 'pointer' : 'default',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
            <SubHeading>{title}</SubHeading>
            <Text>{description}</Text>
            <CardImage src={imageSrc} alt={imageAlt || title} />
        </Card>
    );
};

export default ProjectCard;