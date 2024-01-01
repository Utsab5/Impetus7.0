import React from "react";
import "./global.css";
const Fintech = [
  { image: "https://placekitten.com/150/150", name: "image1" },
  { image: "https://placekitten.com/150/151", name: "image2" },
  { image: "https://placekitten.com/150/152", name: "image3" },
  { image: "https://placekitten.com/150/153", name: "image4" },
  { image: "https://placekitten.com/150/154", name: "image5" },
  { image: "https://placekitten.com/150/155", name: "image6" },
  { image: "https://placekitten.com/150/156", name: "image7" },
  { image: "https://placekitten.com/150/157", name: "image8" },
  { image: "https://placekitten.com/150/158", name: "image9" },
  { image: "https://placekitten.com/150/159", name: "image10" },
  { image: "https://placekitten.com/150/160", name: "image11" },
  { image: "https://placekitten.com/150/149", name: "image12" },
  { image: "https://placekitten.com/150/148", name: "image13" },
];
const ImageGallery = () => {
  return (
    <>
      <div style={{ backgroundColor: "violet" }}>
        <h1 style={{ textAlign: "center" }}>EVENTS</h1>
        <hr />
        <div className="gallery-container">
          {Fintech.map((index) => (
            <>
              <div className="image-item">
                <img src={index.image} alt={index.name} />
                <button className="register-button">Register</button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
