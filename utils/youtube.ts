export interface YouTubeMetadata {
    title: string
    description: string
    thumbnailUrl: string
    publishedAt: string
  }
  
  export function getYouTubeThumbnail(videoId: string) {
    // YouTube thumbnail quality options: default, mqdefault, hqdefault, sddefault, maxresdefault
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }
  
  export function getYouTubeVideoId(url: string) {
    const regex = /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    const match = url.match(regex)
    return match ? match[1] : null
  }
  
  // Function to extract timestamps from YouTube description (kept for future use)
  export function extractTimestamps(description: string): { time: string; title: string }[] {
    const timestampRegex = /(\d{1,2}:\d{2}(?::\d{2})?)\s*[-–]\s*(.+)/g
    const timestamps: { time: string; title: string }[] = []
    let match
  
    while ((match = timestampRegex.exec(description)) !== null) {
      timestamps.push({
        time: match[1],
        title: match[2].trim(),
      })
    }
  
    return timestamps
  }
  
  