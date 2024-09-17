import React, { useState, useEffect, useCallback, useRef } from 'react';

const images = [
  '/images/yosis-school-logo.png',
  '/images/yosi-pensive.png',
  '/images/yosi-painting.png',
  '/images/image4.jpg'
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [containerHeight, setContainerHeight] = useState('auto');
  const imageRefs = useRef(images.map(() => React.createRef()));

  const updateContainerHeight = useCallback(() => {
    const currentImageRef = imageRefs.current[currentImage];
    if (currentImageRef.current) {
      const { naturalWidth, naturalHeight } = currentImageRef.current;
      const aspectRatio = naturalHeight / naturalWidth;
      const containerWidth = Math.min(600, window.innerWidth * 0.9); // 90% of viewport width, max 600px
      const newHeight = `${containerWidth * aspectRatio}px`;
      setContainerHeight(newHeight);
    }
  }, [currentImage]);

  const goToNext = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  useEffect(() => {
    updateContainerHeight();
    window.addEventListener('resize', updateContainerHeight);
    return () => window.removeEventListener('resize', updateContainerHeight);
  }, [currentImage, updateContainerHeight]);

  return (
    <div className="home">
      <h1></h1>
      <div className="gallery-container" style={{ height: containerHeight }}>
        <button className="gallery-button prev" onClick={goToPrevious}>&#8249;</button>
        <div 
          className="gallery" 
          style={{ 
            transform: `translateX(-${currentImage * 100}%)`,
            width: `${images.length * 100}%`
          }}
        >
          {images.map((img, index) => (
            <img 
              key={index}
              ref={imageRefs.current[index]}
              src={`${process.env.PUBLIC_URL}${img}`}
              alt={`Gallery image ${index + 1}`} 
              onLoad={updateContainerHeight}
              onError={(e) => {
                console.error(`Error loading image: ${img}`);
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
              }}
            />
          ))}
        </div>
        <button className="gallery-button next" onClick={goToNext}>&#8250;</button>
      </div>
      
      <section className="old-new-options">
        <h1>Old-New Options</h1>
        <p>
          Choosing the best Jewish education for your children is not easy. For over 60 years, I've been teaching Jewish classes for kids, college students, and adults. Now is a time for both change and continuity.
        </p>
        
        <h1>Continuity</h1>
        <p>
          Parents of kids in grades 4-8, especially those whose children I've been teaching, encouraged me to continue offering classes in Torah text and Hebrew language. These approaches differ from those of congregational religious schools.
        </p>
        <p>
          For 52 years, I've created and taught 9th-12th-grade classes in Hebrew, Torah, Jewish thought, Israel, antisemitism, and Jewish tradition. Parents have noted, again and again, how their children have been supported, stimulated, challenged, and inspired by these courses. I will continue to do so as a freelance teacher for the coming year(s), God-willing.
        </p>
        
        <h1>Change</h1>
        <p>
          Today, I'm announcing that I am offering an alternative place for kids to learn, another option for families to consider.
        </p>
        <p>
          For grades 4-12, my online, live classes will look exactly like the classes I have taught since 1978, but, as always, updated, challenging, serious, and very engaging. We will learn modern, Israeli Hebrew as a living language, in a program that will enable students to continue through high school and beyond.
        </p>
        <p>
          Our Torah classes will not be about Torah, but will be the real, Hebrew Torah text. Our students will learn to translate, comprehend, probe, read critically, apply, and personalize our Torah.
        </p>
      </section>
    </div>
  );
}

export default Home;
