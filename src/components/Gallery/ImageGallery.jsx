import React, { useState, useRef } from "react";


import Img1 from "../../../public/ImageGallery/Img1.jpg";
import Img2 from "../../../public/ImageGallery/Img2.jpg";
import Img3 from "../../../public/ImageGallery/Img3.jpg";
import Img4 from "../../../public/ImageGallery/img4.jpg";
import Img5 from "../../../public/ImageGallery/Img5.jpg";
import Img6 from "../../../public/ImageGallery/Img6.jpg";
import Img7 from "../../../public/ImageGallery/Img7.jpg";
import Img8 from "../../../public/ImageGallery/Img8.jpg";
import Img9 from "../../../public/ImageGallery/Img9.jpg";
import Img10 from "../../../public/ImageGallery/Img10.jpg";
import Img11 from "../../../public/ImageGallery/Img11.jpg";
import Img12 from "../../../public/ImageGallery/Img12.jpg";
import Img13 from "../../../public/ImageGallery/Img13.jpg";

const imageGallery = [
  { id: 2, url: Img11 },
  { id: 1, url: Img12 },
  { id: 3, url: Img13 },
  { id: 4, url: Img4 },
  { id: 5, url: Img5 },
  { id: 6, url: Img6 },
  { id: 7, url:  Img9},
  { id: 8, url: Img8 },
  { id: 9, url: Img7 },
  { id: 10, url: Img10 },
  { id: 11, url: Img1 },
  { id: 12, url: Img2 },
  { id: 13, url: Img3 },
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const longPressTimeout = useRef(null);

  const handleLongPress = (image) => {
    longPressTimeout.current = setTimeout(() => {
      setSelectedImage(image.url);
    }, 500); // Long press duration
  };

  const handleRelease = () => {
    clearTimeout(longPressTimeout.current);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        🖼️ Image Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {imageGallery.map((image) => (
          <div
            key={image.id}
            className="border p-2 rounded-lg shadow-lg"
            onTouchStart={() => handleLongPress(image)}
            onTouchEnd={handleRelease}
            onMouseDown={() => handleLongPress(image)}
            onMouseUp={handleRelease}
          >
            <img
              src={image.url}
              alt="gallery"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Pop-up */}
      {selectedImage && (
          <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-white/1 backdrop-blur-[3px]"
          onClick={handleClosePopup}
        >
          <img
            src={selectedImage}
            alt="Full Size"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
