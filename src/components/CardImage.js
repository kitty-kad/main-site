import React from 'react';
import './CardImage.css';

const CardImage = ({ src, alt }) => {
    return (
        <div className="card-image-container">
            <img src={src} alt={alt} className="card-image" />
        </div>
    );
};

export default CardImage;