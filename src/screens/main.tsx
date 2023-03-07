import React from "react";
import "../styles/screens/main.scss";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/images/rice1.jpg" },
  { url: "/images/rice2.jpg" },
  { url: "/images/rice3.jpg" },
  { url: "/images/rice4.jpg" },
];

export const Main = () => {
  return (
    <div className="main">
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
