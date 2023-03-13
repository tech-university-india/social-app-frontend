import React from 'react';
import { useState } from 'react';

import './ImageSlider.css';

const ImageSlider = ({ slides }) => {

	const [currentIndex, setCurrentIndex] = useState(0);

	//   console.log("IMAGE SLIDER RERENDER")

	const goToPrevious = () => {
		console.log('PREV', currentIndex);
		currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : null ;
	};

	const goToNext = () => {
		console.log('NEXT', currentIndex);
		currentIndex < slides.length - 1 ? setCurrentIndex(currentIndex + 1) : null ;
	};

	const goToSlide = (slideIndex) => {
		(slideIndex < slides.length && slideIndex >= 0) ? setCurrentIndex(slideIndex) : null ;
	};

	return (
		<div className="slide-styles">
			<div>
				<div onClick={goToPrevious} className="right-arrow-styles"> ❰ </div>
				<div onClick={goToNext} className="left-arrow-styles"> ❱ </div>
			</div>
			<div className="slider-styles"><img src={slides[currentIndex]} alt={currentIndex} loading='lazy'/></div>
			<div className="dots-container-styles">
				{slides.map((slide, slideIndex) => (
					<div className="dot-style" key={slideIndex} onClick={() => goToSlide(slideIndex)} >●</div>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;