import React from "react";

const videoGallery = [
  { id: 1, url: "https://www.youtube.com/embed/M67LBzJpSZM?si=dpiQ27f6dyOtNOAf" },
  { id: 2, url: "https://www.youtube.com/embed/PbyBf8DD3MI?si=9OAUiEClftNpaXZW" },
  { id: 3, url: "https://www.youtube.com/embed/505Z-Vv_q-Y?si=WcrUynOd1yp-eOhp" },
  { id: 4, url: "https://www.youtube.com/embed/rko-KPcBDqg?si=ejveblyRAHxskM80" },
  { id: 5, url: "https://www.youtube.com/embed/g6L7FLpGfdg?si=Iay8sRxqPIfoTB-c" },
  { id: 6, url: "https://www.youtube.com/embed/nFJlYYIDTAw?si=TzfHb_84AT6gk6jd" },
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

