import { VideoData } from "@/data/videos";

interface VideoCardProps {
  video: VideoData;
  className?: string;
}

export function VideoCard2({ video, className = "" }: VideoCardProps) {
  // Extract video ID and hash from vimeoId
  const getEmbedUrl = (vimeoId: string) => {
    return `https://player.vimeo.com/video/${vimeoId}`;
  };

  return (
    <div className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${className}`} data-testid={`video-card-${video.id}`}>
      <div className="relative aspect-video bg-gray-900">
        <iframe
          src={getEmbedUrl(video.vimeoId)}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={video.title}
          data-testid={`video-iframe-${video.id}`}
        />
      </div>
      
      <div className="p-2 bg-white">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors" data-testid={`video-title-${video.id}`}>
          {video.title}
        </h3>
      
        
      </div>
    </div>
  );
}