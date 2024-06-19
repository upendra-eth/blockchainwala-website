const videos = [
    {
      title: "Video A",
      description: "An in-depth tutorial on blockchain development.",
      url: "https://www.youtube.com/embed/exampleA?autoplay=1",
    },
    {
      title: "Video B",
      description: "Exploring the latest trends in cryptocurrency.",
      url: "https://www.youtube.com/embed/exampleB?autoplay=1",
    },
    {
      title: "Video C",
      description: "How to create your own blockchain from scratch.",
      url: "https://www.youtube.com/embed/exampleC?autoplay=1",
    },
  ];
  
  const YouTubeVideos = () => {
    return (
      <div className="bg-gray-900 text-white min-h-screen overflow-y-auto">
        <div className="container mx-auto text-center px-4 py-20">
          <h2 className="text-4xl font-bold mb-8">Famous YouTube Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4">{video.title}</h3>
                <p className="mb-4">{video.description}</p>
                <div className="relative pb-9/16">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default YouTubeVideos;
  