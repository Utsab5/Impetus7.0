import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import disableScroll from "disable-scroll";
import lodash from "lodash";
import { useEffect, useRef, useState } from "react";
import { SwipeEventListener } from "swipe-event-listener";
import EventDescription from "../../components/EventDescription";
import EventDots from "../../components/EventDots";
import EventList from "../../components/EventList";

export default function EventPage() {
  const theme = useTheme();
  const [currIdx, setCurrIdx] = useState(0);

  const images = [
    "cadathon.jpg",
    "Yantra_.jpg",
    "heatovation_.jpg",
    "scrapyard_.jpg",
    "quizzical.jpg",
    "linefollower1.png",
    "LINEFOLLOWERS_F.png",
    "Valorant.jpg",
    "fun_.jpg",
  ];
  const size = [
    "750px",
    "550px",
    "570px",
    "530px",
    "580px",
    "580px",
    "580px",
    "550px",
    "580px",
  ];
  const position = [
    "25%",
    "30%",
    "29%",
    "27%",
    "29%",
    "27%",
    "27%",
    "29%",
    "28%",
  ];

  const descRef = useRef(null);

  const styles = {
    width: "100vw",
    paddingLeft: "100px",
    minHeight: "100vh",
    backgroundColor: "black",
    background: `url(/images/${
      images[currIdx % 10]
    }) no-repeat , url(/images/grid-white.svg) no-repeat `,

    background: `url(/images/${images[currIdx % 9]}) no-repeat  `,

    backgroundSize: `${size[currIdx % 9]} auto`,
    [theme.breakpoints.down("md")]: {
      backgroundSize: `calc(${size[currIdx % 9]} - 200px) auto`,
    },

    backgroundPosition: `${position[currIdx % 9]} center`,

    [theme.breakpoints.down("lg")]: {
      backgroundPosition: "50% 10%",
      paddingLeft: "0",
    },
    backgroundAttachment: "fixed",
    position: "relative",
    ".descWrapper": {
      height: "100vh",
      overflowY: "hidden",
      scrollSnapType: "y mandatory",
      scrollSnapPointsY: "repeat(100vh)",
    },
  };

  const moveUp = () => {
    setCurrIdx((idx) => (idx === 8 ? idx : idx + 1));
  };

  const moveDown = () => {
    setCurrIdx((idx) => (idx === 0 ? idx : idx - 1));
  };

  const handleScroll = (val, swipe) => {
    console.log("hello");
    if (val < 0) moveUp();
    else moveDown();
    if (swipe) {
      if (val < 0) {
        setTimeout(() => {
          descRef.current?.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }, 100);
      } else {
        setTimeout(() => {
          descRef.current?.scrollBy({
            top: -window.innerHeight,
            behavior: "smooth",
          });
        }, 10);
      }
    }
  };

  const handleDebounceScroll = lodash.debounce(handleScroll, 100, {
    leading: true,
    trailing: false,
  });

  useEffect(() => {
    disableScroll.on(descRef.current, {
      disableKeys: "false",
    });
    console.log(descRef.current);
    descRef.current?.addEventListener("mousewheel", (e) => {
      const val = e.wheelDeltaY;
      lodash.debounce(handleDebounceScroll).cancel();
      handleDebounceScroll(val);
    });
    descRef.current?.addEventListener("wheel", (e) => {
      const val = e.wheelDeltaY;
      lodash.debounce(handleDebounceScroll).cancel();
      handleDebounceScroll(val);
    });

    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 40) handleDebounceScroll(-1);
      if (e.keyCode === 38) handleDebounceScroll(1);
    });
    const { swipeArea } = SwipeEventListener({
      swipeArea: descRef.current,
    });
    swipeArea.addEventListener("swipeUp", () => handleDebounceScroll(-1, true));
    swipeArea.addEventListener("swipeDown", () =>
      handleDebounceScroll(1, true),
    );
    return () => {
      disableScroll.off();
    };
  }, []);

  return (
    <Box
      className="center1"
      style={{
        paddingTop: "50px",
        overflowY: "hidden",
        backgroundColor: "black",
      }}
    >
      <Box sx={styles}>
        <EventList setCurrIdx={setCurrIdx} currIdx={currIdx} />
        <EventDots currIdx={currIdx} setCurrIdx={setCurrIdx} />
        <Box ref={descRef} className="descWrapper">
          <EventDescription
            index={0}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={1}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={2}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={3}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={4}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={5}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={6}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={7}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
          <EventDescription
            index={8}
            setCurrIdx={setCurrIdx}
            currIdx={currIdx}
          />
        </Box>
      </Box>
    </Box>
  );
}
