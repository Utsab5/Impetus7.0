import React from 'react';
import { useState } from 'react';
import { Box } from "@mui/system";

const Divider2 = () => {
  const [svgWidth, setSvgWidth] = useState('calc(145% + 1.3px)');
  
  const boxStyle = {
    position: 'absolute',
    bottom: "0vh",
    left: 0,
    width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
    zIndex: "1",
  };

  const svgStyle = {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '177px',
  };

  return (
    <Box sx={boxStyle} className="custom-shape-divider-bottom-1703510648">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={svgStyle}
      >
        <defs>
          <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="black" />
            <stop offset="50%" stopColor="rgb(17, 24, 39)" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
        </defs>
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill="url(#shapeGradient)"
        ></path>
      </svg>
    </Box>
  );
};

export default Divider2;
