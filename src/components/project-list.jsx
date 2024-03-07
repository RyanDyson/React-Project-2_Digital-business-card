import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import HkScapes from '../assets/hkscapes.png';
import Hkiu from '../assets/hkiu.png';

function ProjectsList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const projects = [
    {
      title: 'University mock website',
      description: 'A mock website of a university, this project was used to learn the basics of HTML, CSS, and JavaScript.',
      img: Hkiu,
      link: 'https://github.com/RyanDyson/CW-CS2204',
    },
    {
      title: 'HKSCAPES website',
      description: 'A mock website of a startup touring company, this project was used to learn SASS and Bootstrap.',
      img: HkScapes,
      link: 'https://github.com/RyanDyson/HKscapes',
    },
  ];

  const goToPrevious = () => {
    setAnimationClass('slide-out-reverse');
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
      setAnimationClass('slide-in-reverse');
    }, 500);
  };

  const goToNext = () => {
    setAnimationClass('slide-out');
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % projects.length);
      setAnimationClass('slide-in');
    }, 500);
  };

  const { title, description, img, link } = projects[currentIndex];

  return (
    <div className="project-list">
      <div className="main-container">
        <div className="carousel-heading">
          <h1>Projects</h1>
          <button onClick={goToPrevious}><FaAngleLeft /></button>
          <button onClick={goToNext}><FaAngleRight /></button>
        </div>
        <div className="carousel">
          <div className={`carousel container ${animationClass}`}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="carousel-item">
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;