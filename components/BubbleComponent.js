import React, { useEffect, useRef } from "react";

const BubbleComponent = () => {
  const interBubbleRef = useRef(null);

  useEffect(() => {
    const mousemoveListener = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", mousemoveListener);

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 10;
      curY += (tgY - curY) / 10;
      if (interBubbleRef.current) {
        interBubbleRef.current.style.transform = `translate(${Math.round(
          curX,
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(() => move());
    }

    move();

    return () => {
      window.removeEventListener("mousemove", mousemoveListener);
    };
  }, []);

  const rootStyles = {
    margin: 0,
    padding: 0,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "120vh",
    opacity: "0.6",
    overflow: "hidden",
  };

  const gradientBgStyles = {
    width: "100vw",
    height: "120vh",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(40deg, rgb(108, 0, 162), rgb(0, 17, 82))",
    top: 0,
    left: 0,
    overflow: "hidden",
  };

  const gradientsContainerStyles = {
    filter: "url(#goo) blur(40px)",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  };

  const g1Styles = {
    position: "absolute",
    background:
      "radial-gradient(circle at center, rgba(18, 113, 255, 0.8) 0, rgba(18, 113, 255, 0) 50%) no-repeat",
    mixBlendMode: "hard-light",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    transform: "translate(-50%, -50%)",
    transformOrigin: "center center",
    animation: "moveVertical 30s ease infinite",
    opacity: 1,
  };
  const g2Styles = {
    position: "absolute",
    mixBlendMode: "hard-light",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    transform: "translate(-50%, -50%)",
    background:
      "radial-gradient(circle at center, rgba(221, 74, 255, 0.8) 0, rgba(221, 74, 255, 0) 50%) no-repeat",
    transformOrigin: "calc(50% - 400px)",
    animation: "moveInCircle 30s reverse infinite",
    opacity: 1,
  };
  const g3Styles = {
    position: "absolute",
    mixBlendMode: "hard-light",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    transform: "translate(-50%, -50%)",
    background:
      "radial-gradient(circle at center, rgba(100, 220, 255, 0.8) 0, rgba(100, 220, 255, 0) 30%) no-repeat",
    transformOrigin: "calc(50% + 400px)",
    animation: "moveHorizontal 40s reverse infinite",
    opacity: 1,
  };
  const g4Styles = {
    position: "absolute",
    mixBlendMode: "hard-light",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    transform: "translate(-50%, -50%)",
    background:
      "radial-gradient(circle at center, rgba(200, 50, 50, 0.8) 0, rgba(200, 50, 50, 0) 50%) no-repeat",
    transformOrigin: "calc(50% - 300px)",
    animation: "moveHorizontal 20s linear infinite",
    opacity: 0.7,
  };
  const g5Styles = {
    position: "absolute",
    mixBlendMode: "hard-light",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    transform: "translate(-50%, -50%)",
    background:
      "radial-gradient(circle at center, rgba(180, 180, 50, 0.8) 0, rgba(180, 180, 50, 0) 40%) no-repeat",
    transformOrigin: "calc(50% - 200px)",
    animation: "moveInCircle 30s ease infinite",
    opacity: 0.9,
  };

  const interactiveStyles = {
    position: "absolute",
    background:
      "radial-gradient(circle at center, rgba(140, 100, 255, 0.8) 0, rgba(140, 100, 255, 0) 50%) no-repeat",
    mixBlendMode: "hard-light",
    width: "100%",
    height: "100%",
    top: "-50%",
    left: "-50%",
    opacity: 0.7,
  };

  return (
    <div style={rootStyles}>
      <div style={gradientBgStyles}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div style={gradientsContainerStyles}>
          <div className="g1" style={g1Styles} />
          <div className="g2" style={g2Styles} />
          <div className="g3" style={g3Styles} />
          <div className="g4" style={g4Styles} />
          <div className="g5" style={g5Styles} />
          <div
            className="interactive"
            ref={interBubbleRef}
            style={interactiveStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default BubbleComponent;
