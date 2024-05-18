// Carousel.js
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.css';

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className="carousel" {...handlers}>
            <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="carousel-image"
                    />
                ))}
            </div>
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    >
                        {index === activeIndex ? <div className="carousel-dot-line"></div> : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
