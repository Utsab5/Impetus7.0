import { Box } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import Contact from "../components/Contact";
import HomePageAbout from "../components/HomePageAbout";
import HomePageVideo from "../components/HomePageVideo";
import LoadingComp from "../components/LoadingComp";
import { useLoading } from "../components/LoadingContext";
import VideoText from "../components/VideoText";

const styles = {
  minHeight: "100vh",
  minWidth: "100vw",
};

const containerStyles = {
  background: "url(images/grid.svg) no-repeat center",
  backgroundColor: "black",
  height: "10vh",
  height: {
    xs: "0vh",
  },
  width: "100vw",
};

export default function HomePage() {
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const { loading } = useLoading();

  const hideIt = () => {
    setOpacity(0);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    Router.events.on("routeChangeComplete", scrollToTop);
    return () => {
      window.onbeforeunload = function () {};
      Router.events.off("routeChangeComplete", scrollToTop);
    };
  }, []);

  // useEffect(() => {
  //   if (isVisible) disableScroll.on(window);
  //   else disableScroll.off(window);
  //   return () => {
  //     disableScroll.off(window);
  //   };
  // }, [isVisible]);

  return (
    <Box>
      {loading && <LoadingComp />}
      <Box sx={containerStyles}>
        <AnimatePresence>
          <Box>
            {/* <HomePageVideo /> */}
            {/* <VideoText hideIt={hideIt} /> */}
          </Box>
        </AnimatePresence>
      </Box>
      <HomePageVideo />
      <VideoText hideIt={hideIt} />
      <HomePageAbout />
      <Contact />
    </Box>
  );
}

