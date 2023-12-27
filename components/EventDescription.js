import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef } from "react";
import LearnMore from "./LearnMore";
import { useInViewport } from "react-in-viewport";

export default function EventDescription({ index, setCurrIdx, currIdx }) {
  const theme = useTheme();
  const ref = useRef(null);
  const headingRef = useRef(null);
  const { inViewport } = useInViewport(headingRef);

  const styles = {
    "div h2": {
      fontSize: "40px",
      fontWeight: "700",
      marginBottom: "13px",
      letterSpacing: "2px",
    },
    "div span": {
      fontSize: "18px",
      lineHeight: "0.5",
    },
    width: "500px",
    maxWidth: "90vw",
    textAlign: "justify",
    height: "100vh",
    position: "relative",
    left: "50vw",
    div: {
      position: "relative",
      top: "35vh",
    },
    [theme.breakpoints.down("lg")]: {
      left: "5vw",
      div: {
        top: "50vh",
        marginBottom: "300px",
      },
    },
    scrollSnapAlign: "center",
  };

  const handleScroll = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (index === currIdx) handleScroll();
  }, [currIdx, index]);
  const heading = [
    "CADathon",
    "Yantra Search",
    "Heatovation",
    "Scrapyard",
    "Quizzical Suspects",
    "Death Race",
    "Line Follower",
    "Valorant",
    "Fun Bunkers",
  ];
  const link = [
    "cadathon",
    "yantrasearch",
    "heatovation",
    "scrapyard",
    "quizzical",
    "deathrace",
    "lineFollower",
    "valorant",
    "fun",
  ];

  const cadathon =
    'This competition aims to develop the idea of assembly of 3D structures on a CAD software.This event will be organized by the Society of Automotive Engineers (SAE), IIEST Shibpur  under the banner of "Impetus 6.0".';
  const yantrasearch =
    "This event organized by ASME IIEST, aims to give you all the excitement of treasure hunt.You can look forward to having fun while solving mysteries together and hunting down simple machines in our college campus.";
  const heatovation =
    '"Heatovation", organized by IMPETUS 6.0 in association with ISHRAE-IIEST Kolkata chapter empowers social entrepreneurs to create a culture for entrepreneurship and to promote entrepreneurial education in the field of HVAC.';
  const scrapyard =
    'Innovation need not come from what everyone considers to be a resource; it can also come from making use of what others consider to be waste and producing something useful. With this thought in mind IMPETUS 6.0 presents to you "Scrapyard"';
  const quiz =
    "To instil the essence of quizzing, IMechE IIEST, Shibpur brings to you a Grand General Technical Quiz: 'Quizzical Suspects' under the banner of Impetus 6.0 .The quiz tests and showcases students' technical knowledge and skills.";
  const deathrace =
    "The Death Race is a thrilling competition that brings together talented individuals to showcase their skills in building and maneuvering a robot through a challenging track filled with obstacles. ";
  const lineFollower =
    "This competition aims to build a robot that can follow lines on a flat surface. The robot must detect and follow straight and curved lines, and navigate intersections and markings. The goal is to create a fast and reliable robot ";
  const valorant =
    "The Valorant gaming event is a competition that brings together talented players to showcase their skills and compete for recognition. It is an exciting opportunity for Valorant fans to experience high-level gameplay and celebrate the top talent in the game.";
  const fun =
    "Impetus 6.0 presents a carnival game of skill. Dodge between bunkers to lead, test hand coordination with pyramid breaking, aim for prizes with darts and wire wand loop. Work with a partner to navigate the proper pathway for a chance to win rewards.";

  const content = [
    cadathon,
    yantrasearch,
    heatovation,
    scrapyard,
    quiz,
    deathrace,
    lineFollower,

    valorant,
    fun,
  ];

  return (
    <Box ref={ref} sx={styles}>
      <Box>
        <h1
          ref={headingRef}
          class="mb-4 text-2xl font-extrabold tracking-tight xs:text-center leading-none text-white  lg:text-4xl"
        >
          {heading[currIdx % 9]}
        </h1>

        <p className="lg:tracking-normal  relative sm:tracking-tight text-lg font-normal lg:text-xl sm:px-18 sm:text-xm text-justify rtl:text-right text-gray-300">
          {content[currIdx % 9]}
        </p>
        <LearnMore link={`/events/${link[currIdx % 9]}`} />
      </Box>
    </Box>
  );
}
