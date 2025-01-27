export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="aspect-w-16 aspect-h-9 mb-8">
      <div className="w-full max-w-5xl mx-auto">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[600px] rounded-lg"
        ></iframe>
      </div>
    </div>
  )
}

