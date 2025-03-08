import React from "react";


const videoGallery = [
  { id: 1, url: "https://www.youtube.com/embed/M67LBzJpSZM?si=P2t_pSEAgBvjLdQa" },
  { id: 2, url: "https://www.youtube.com/embed/PbyBf8DD3MI?si=3FLYJ7QqZaDjM-_T" },
  { id: 3, url: "https://www.youtube.com/embed/58xAQf_fXlM?si=KxVB9dF2K2jwCmtd" },
 
];

function VideoGallery() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">🎥 Video Gallery</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {videoGallery.map((video) => (
          <div key={video.id} className="border p-2 rounded-lg shadow-lg">
            <iframe
              className="w-full h-56 rounded-lg"
              src={video.url}
              title={`video-${video.id}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}




const imageGallery = [
  { id: 1, url: "https://source.unsplash.com/400x300/?nature" },
  { id: 2, url: "https://source.unsplash.com/400x300/?city" },
  { id: 3, url: "https://source.unsplash.com/400x300/?mountain" },
  { id: 4, url: "https://source.unsplash.com/400x300/?ocean" },
];

function ImageGallery() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">🖼️ Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {imageGallery.map((image) => (
          <div key={image.id} className="border p-2 rounded-lg shadow-lg">
            <img src={image.url} alt="gallery" className="w-full h-40 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}


export function Gallery(){
    return(
        <>
        <VideoGallery/>
        <ImageGallery/>
        </>
    )
}