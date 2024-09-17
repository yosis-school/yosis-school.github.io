import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

const images = [
  '/yosis-school-logo.png',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
];

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <button>6-8</button>
          <button>9-12</button>
          <button>Adult Education</button>
          <button>Contact Us</button>
        </nav>
      </header>
      <main>
        <div className="gallery-container">
          <button className="gallery-button prev" onClick={goToPrevious}>&#8249;</button>
          <div 
            className="gallery" 
            style={{ 
              transform: `translateX(-${currentImage * 100}%)`,
            }}
          >
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Gallery image ${index + 1}`} />
            ))}
          </div>
          <button className="gallery-button next" onClick={goToNext}>&#8250;</button>
        </div>
      </main>
    </div>
  );
}

export default App;
