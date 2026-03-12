import { AdvancedVideo } from "@cloudinary/react";
import { quality, format } from "@cloudinary/url-gen/actions/delivery";
import { cld } from "./cloudinary";
import { useRef } from "react";

export default function CloudVideo({
  publicId,
  className = "",
  controls = true,
  muted = true,
}) {
  const video = cld
    .video(publicId)
    .delivery(quality("auto"))
    .delivery(format("auto"));

  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };
  return (
    <AdvancedVideo
      innerRef={videoRef}
      cldVid={video}
      controls={controls}
      muted={muted}
      className={className}
      preload="metadata"
      loop
      playsInline
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
