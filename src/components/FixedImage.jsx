import React from "react";
import backgroundImage from "../assets/images/cozy-nursery-with-cute-toy-comfortable-bedding-generated-by-ai.jpg"; // Replace with your actual image path

const FixedImage = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "73vh",
  };

  return <div style={containerStyle}></div>;
};

export default FixedImage;
