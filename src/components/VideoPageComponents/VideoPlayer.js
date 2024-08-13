export default function VideoPlayer({ title }) {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src="https://www.youtube.com/embed/iAIBF2ngbWY" // Replace with actual video URL
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
