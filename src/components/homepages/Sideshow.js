import React, { useState, useEffect } from "react";
import img0 from "./sideshow-img2.jpg";
import img1 from "./sideshow-img1.jpg";
import img2 from "./sideshow-img0.jpeg";
import "./sideshow.css";

const Slideshow = () => {
  const images = [
    {
      src: img0,
      text: "Image 1",
      btnText: "Button 1",
    },
    {
      src: img1,
      text: "Image 2",
      btnText: "Button 2",
    },
    {
      src: img2,
      text: "Image 3",
      btnText: "Button 3",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(slideshowTimer);
    };
  }, [images]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow-container">
      <button className="prev-button" onClick={goToPreviousImage}>
        &lt;
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slideshow-image ${
            index === currentImageIndex ? "active" : ""
          }`}
        >
          <img src={image.src} alt={`Image ${index + 1}`} />
          <div className="slideshow-text">
            <h3>{image.text}</h3>
            <button>{image.btnText}</button>
          </div>
        </div>
      ))}
      <button className="next-button" onClick={goToNextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Slideshow;
