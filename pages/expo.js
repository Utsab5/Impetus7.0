import { Button, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { BackgroundParticles } from "../components/BgParticles";
import Contact from "../components/Contact";
import Image from "next/image";
export default function ExpoPage() {
  const theme = useTheme();

  const styles = {
    ".Robo .img img": {
      width: "400px !important",
    },
    ".VR, .EV, .Robo": {
      width: "100vw",
      minHeight: "100vh",
      overflowY: "hidden",
      display: "grid",
      [theme.breakpoints.down("md")]: {
        placeItems: "center",
      },
      gridTemplateColumns: "1fr 1fr",
      ">*": {
        [theme.breakpoints.down("md")]: {
          gridColumn: "span 2",
        },
      },
      ".img": {
        width: "100%",
        minHeight: "400px",
        img: {
          width: {
            lg: "600px",
            md: "600px",
            sm: "500px",
            xs: "500px",
          },
          filter: "drop-shadow(16px 16px 10px black)",
        },
      },
      ".content": {
        width: "550px",
        maxWidth: "90vw",
        margin: "50px 0",
        textAlign: "justify",
        h2: {
          margin: "30px 0",
        },
      },
    },
    [theme.breakpoints.up("md")]: {
      ".EV .content": {
        order: "-1",
        marginLeft: "100px !Important",
      },
    },
    ".Robo .img img": {
      width: "300px !important",
    },
  };

  return (
    <Box sx={styles} style={{ paddingTop: "50px" }}>
      {/* <BackgroundParticles /> */}
      <div className="grid md:grid-cols-2 gap-8   md:py-20 py-10">
        <div className="flex items-center justify-center">
          <img
            className="w-full   w-[480px] "
            src="/images/VR1.png/"
            alt="Tech Show"
          />
        </div>
        <div className=" flex flex-col justify-center  lg:items-start items-center text-lg font-normal text-gray-300 mb-4 ">
          <h2 className="text-blue-400 md:text-3xl leading-6 md:leading-7text-2xl font-bold md:text-left text-center md-font-extrabold mb-2">
            Tech Show
          </h2>
          <p className=" px-3 md:w-5/6 md:px-0 ">
            Get ready for a Tech Show involving some of most future gen techs
            that will fascinate your mind. At this Tech Show, we Impetus 7.0
            bring you<br></br>
            <span className="text-lg font-bold text-white block">
              1. VIRTUAL REALITY ZONE{" "}
            </span>{" "}
            Feel the aura and landscape of the moon with your own eyes. Virtual
            reality experience from actual satellite footages to get the
            experience of having your own foot on the moon.
            <br></br>
            <span className="text-lg font-bold text-white block">
              2. AUGMENTED REALITY ZONE(Selfie Zone)
            </span>{" "}
            In the current world of Insta, Snapchat and Reels, the rulers are
            those who know how to Filter. Here, Design your own mobile filters
            with our AR technology, take snaps, share with your friends and
            family, get millions and illions of likes and love. Just dont forget
            to tag our Impetus in it.<br></br>
            <span className="text-lg font-bold text-white block">
              3. 3-D Printing{" "}
            </span>
            Get to see industry specialists work on one of most advanced 3-D
            printers in the world to create amazing miracles. A magic to amaze,
            a magic to learn, a magic to be the future.
            <br></br>
            <span className=" md:text-lg text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-200">
              Venue
            </span>
            <span className=" md:text-xl font-semibold ">
              Parade Ground,IIEST Shibpur Campus
            </span>
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-8 gap-1 md:py-20 py-10">
        <div className=" flex flex-col justify-center  lg:items-end items-center text-lg font-normal text-gray-300 mb-4 md:order-1 order-2">
          <h2 className="text-blue-400 md:text-3xl font-bold text-2xl md:text-left self-center md:ml-16  text-center md-font-extrabold mb-2">
            Electric Vehicle Expo
          </h2>
          <p className="text-left px-3 md:w-5/6 leading-7  md:px-0 ">
            With the world moving towards being an eco-friendly place to be, we
            engineers have to the pioneers while moving ahead in our vehicles.
            And these vehicles just can&apos;t be a usual bike or car, they need
            to be ELECTRIC.<br></br>
            So we at IMPETUS 7.0 bring to you, a designated expo for the EVs
            that are gonna rule the roads soon. During the Impetus 6.0 events do
            come to our expo to gaze upon one of the most efficient electronic
            vehicle and get a chance to meet the manufacturers of this NextGen
            Technology. Not only these EVs will be a cool way to roam around but
            they will make you realise that how important this transition of
            electronic vehicles are in the current world scenario.<br></br>
            <span className=" md:text-lg text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-200">
              Venue
            </span>
            <span className=" md:text-xl font-semibold ">
              Netaji Bhawan, IIEST Shibpur Campus
            </span>
          </p>
        </div>
        <div className="flex items-center md:justify-start justify-center md:order-2 order-1">
          <img className="w-2/3" src="/images/EV_nobg.png" alt="VR" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-24">
        <div className="flex items-center justify-center">
          <img
            className="md:w-[400px] w-[350px] h-[400px] "
            src="/images/humanoidRobot.png"
            alt="Robo"
          />
        </div>
        <div className=" flex flex-col justify-center  lg:items-start items-center text-lg font-normal text-gray-300 mb-4 ">
          <h2 className="text-blue-400 md:text-3xl  leading-6 md:leading-7 text-2xl font-bold md:text-left text-center md-font-extrabold mb-2">
            Humanoid Robo Expo
          </h2>

          <p className="text-left px-3 md:w-5/6 md:px-0 ">
            From imagination to daydreams. From dreams to sci-fi movies. From
            movies to possible future. And now, we bring the FUTURE here.
            <br></br>
            <br className="hidden md:block"></br>
            Come to IIEST Shibpur to meet our ROBO FRIEND, &apos;ENZO&apos;. A
            robot that has helped thousands of patients when even nurses cant
            keep close to them. A robot that the served has humanity when it was
            needed the most.<br></br>
            <br className="hidden md:block"></br>
            At the expo, get to see our humanoid robot, Enzo. Get a chance to
            physically meet it, meet the industrial experts who made it and
            learn from the best.<br></br>
            <br className="hidden md:block"></br>
            <span className=" md:text-lg text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-200">
              Venue
            </span>
            <span className=" md:text-xl font-semibold ">
              Parade Ground,IIEST Shibpur Campus
            </span>
          </p>
        </div>
      </div>

      <Contact />
    </Box>
  );
}
