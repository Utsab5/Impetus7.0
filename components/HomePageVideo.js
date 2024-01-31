import { Box } from "@mui/system";
import { useEffect, useRef } from "react";
import { useLoading } from "./LoadingContext";

const styles = {
  width: "100vw",
  height: "120vh",
  overflow: "hidden",
  position: "absolute",
  zIndex: 0,

  "#bgVideo": {
    width: "100vw",
    height: "120vh",
    objectFit: "cover",
    filter: "brightness(100%) hue-rotate(445deg) contrast(1) saturate(2)",
  },
};

export default function HomePageVideo() {
  const { startLoading, stopLoading } = useLoading();
  const videoRef = useRef(null);

  useEffect(() => {
    const readyState = videoRef.current.readyState;
  }, []);

  return (
    <Box sx={styles}>
      <video
        ref={videoRef}
        onLoadStart={startLoading}
        onCanPlay={stopLoading}
        autoPlay
        muted
        loop
        id="bgVideo"
      >
        <source src="images/bgvideo2.mp4" type="video/mp4" />
      </video>
    </Box>
  );
}
