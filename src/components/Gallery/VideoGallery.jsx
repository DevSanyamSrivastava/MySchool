import React from "react";

const videoGallery = [
  { id: 1, url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { id: 2, url: "https://www.youtube.com/embed/mP0RAo9SKZk" },
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

export default VideoGallery;
