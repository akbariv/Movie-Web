import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="slider">
            <div className="slider-image-container">
                <li>
                <img src={`${process.env.NEXT_PUBLIC_POSTER_API}${images}`}
                    alt="slide" className="slider-image" />
                </li>
            </div>
        </div>
    );
};

export default ImageSlider;
