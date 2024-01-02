import { Box } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import BubbleComponent from "../components/BubbleComponent";
import Contact from "../components/Contact";
import EventCarouselComp, { Owldemo1 } from "../components/EventCarouselComp";
import HomePageAbout from "../components/HomePageAbout";
import HomePageAbout1 from "../components/HomePageAbout1";
import HomePageVideo from "../components/HomePageVideo";
import IframeComp from "../components/IframeComp";
import LoadingComp from "../components/LoadingComp";
import { useLoading } from "../components/LoadingContext";
import MerchandiseComp from "../components/MerchandiseComp";
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

const aboutContent = [
  {
    name: "IMPETUS",
    text: "IMPETUS is an annual event organized by the Society of Mechanical Engineers at IIEST Shibpur to bring industry and education closer together. The events aim to provide students with practical knowledge and opportunities to interact with industry professionals in mechanical engineering.",
    link: "/about",
    img: "impetus_pic.png",
  },
  {
    name: "INDUSTRY ACADEMIA MEET",
    text: "The industrial meet in IMPETUS is to foster a productive dialogue between industry and academia, provide exposure to students and academics about current and future industrial trends, and equip them with the skills to be future-proof and industry-ready. It seeks to establish interactive communication between industry leaders, academicians, and students, bridging the gap between the company and institute and offering a comprehensive understanding of their needs.",
    link: "/industryacademiameet",
    img: "pic_1.png",
  },
];

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


  return (
    <Box>
      {loading && <LoadingComp />}
      {/* <Box sx={containerStyles}>
        
      </Box> */}
      {/* <HomePageVideo /> */}
      <VideoText hideIt={hideIt} />
      <IframeComp/>
      <MerchandiseComp/>
      {/* <EventCarouselComp /> */}
      {aboutContent.map((el) => (
        <HomePageAbout1 key={el.name} {...el} />
      ))}
      <BubbleComponent />
      {/* <HomePageAbout /> */}
      <Contact />
    </Box>
  );
}

