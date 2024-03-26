const VideoPage = () => {
  return (
    <div className="h-[900px] mt-10">
      <iframe
        width="720"
        height="480"
        src="https://www.youtube.com/embed/p02AIAoImzU?si=4mEGiONoI2WcsiK7"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPage;
