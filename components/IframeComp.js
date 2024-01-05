import { Box } from "@mui/system";
import React, { useState } from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const IframeComp = () => {
  const [svgWidth, setSvgWidth] = useState("calc(145% + 1.3px)");
  const boxStyle = {
    position: "absolute",
    bottom: "-20.1vh",
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
    transform: "rotate(180deg)",
    zIndex: "1",
  };

  return (
    <>
      <Box sx={boxStyle} className="custom-shape-divider-bottom-1703510648">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          // style={svgStyle}
          sx={{
            position: "relative",
            display: "block",
            width: svgWidth,
            height: "167px",
            width: {
              lg: "calc(145% + 1.3px)",
              sm: "calc(245% + 1.3px)",
              xs: "calc(245% + 1.3px)",
            },
          }}
        >
          <defs>
            <linearGradient
              id="shapeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="black" />
              <stop offset="50%" stopColor="rgb(17, 24, 39)" />
              <stop offset="100%" stopColor="black" />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#shapeGradient)"
          ></path>
        </svg>
      </Box>
    </>
  );
};

export default IframeComp;
