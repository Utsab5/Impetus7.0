import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import Contact from "../../components/Contact";
import EventMag from "../../components/EventManagement";

const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "400px",
  minHeight: "400px",

  background: `url(/images/Valorant_pg.jpg)  no-repeat  `,

  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  mt: "50px",
};

const dataStyles = {
  textAlign: "justify",
  maxWidth: "800px",
  ".data": {
    margin: "50px 0",
  },
  "div span,ul": {
    display: "block",
    margin: "20px 0",
  },
  "div ul li": {
    textIndent: "30px",
  },
  ".fee": {
    width: "100%",
    button: {
      margin: "10px 0",
    },
  },
  ".contact": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0",
  },
  ".data h2, .fee h3": {
    margin: "40px 0",
  },
};

export default function CadathonPage() {
  const theme = useTheme();
  const router = useRouter();

  const goNext = () => {
    router.push("/events/fun");
  };
  const goBack = () => {
    router.push("/events/deathrace");
  };

  const headerStyles = {
    width: "800px",
    maxWidth: "90vw",
    position: "relative",
    button: {
      position: "absolute",
      border: "1px solid white",
      backdropFilter: "blur(10px)",
    },
    ".left": {
      left: "0",
      [theme.breakpoints.down("md")]: {
        top: "100px",
      },
    },
    ".right": {
      right: "0",
      [theme.breakpoints.down("md")]: {
        bottom: "50px",
      },
    },
  };
  const person = {
    person1: {
      name: "Anuvab Ghosh",
      phone: "+91 6291884285",
    },
    person2: {
      name: "Shreyash Manze",
      phone: "+91 7700001193",
    },
  };
  return (
    <Box sx={{ width: "100vw" }} className="mt-10 center1">
      <Box sx={headerStyles} className="center2">
        <IconButton onClick={goBack} className="left">
          <ArrowBackIcon fontSize="large" color="white" />
        </IconButton>
        <Box sx={imageStyles}></Box>
        <IconButton onClick={goNext} className="right">
          <ArrowForwardIcon fontSize="large" color="white" />
        </IconButton>
      </Box>
      <section className="py-10 max-w-screen-lg md:px-10 px-4">
        <div className="py-2  ">
          Valorant has found an exponentially rising popularity amid the
          youngsters today. So for the grand gaming event of Impetus 6, we bring
          to you a Valorant tournament, where teams of 5 each, lock horns to be
          the best of the best. It will be conducted in 3 rounds, a knockout
          round, the eliminations, and the semi final and the final clash will
          be a best of 3 matches. The winners take home total prize money worth
          Rs. 10000 <p className="text-lg font-normal text-gray-200  "></p>
          <div className="py-2 flex items-center flex-col justify-center ">
            <div className="py-3 flex flex-col items-center justify-center gap-y-2">
              <p className="text-lg">
                <span className="py-3 px-2.5 me-2  md:text-lg text-md font-medium rounded-lg   bg-gray-800 text-gray-400  ">
                  <CalendarMonthIcon className="h-5" />
                  Dates{" "}
                </span>
                18th February, 2024 8:00pm
              </p>
            </div>
            <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/NRdSf7w4pvX5E96y7")
              }
            >
              Register Now
            </button>
          </div>
        </div>
        <div className="py-6 bg-gray-900 mb-2 shadow-md sm:rounded-lg px-0 rounded-md">
          <table className="min-w-full divide-y">
            <tbody className="bg-gray-900 md:text-lg text-gray-300 divide-y divide-gray-800">
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm md:text-lg font-medium ">
                    Registration fees
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm md:text-lg font-medium ">
                    ₹250 per team, one time re-entry ₹100 per team.
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm  md:text-lg font-medium ">
                    Pre-requirements
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    Laptop with valorant and discord installed, stable internet
                    connection.
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2  md:px-4  ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Participation
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    Team of 5 players, coach (not compulsory) and one extra
                    player tinformed before.
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 md:px-4  whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Platform
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    Discord and Valorant
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 md:px-4  whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    No. of rounds
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    3 (elimination, semi-finals, finals).
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 md:px-4  whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Duration of each round
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    100 mins
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 md:px-4 py-2 whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Prizes worth
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    {" "}
                    <span className="font-bold ">Rs.10000</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-3 mt-2 ">
          <h1 className="text-3xl font-bold ">Flow of the events</h1>
          <Box className="data mt-2" sx={dataStyles}>
            <ul className="bulletArrow">
              <ul className="BulletNone">
                <li>
                  Registration will be done through google form. Participants
                  will be required to join the discord server of Impetus 7.0.
                </li>
              </ul>{" "}
              <ul className="BulletNone">
                <li>The total teams will be divided into two pools.</li>
              </ul>{" "}
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 1 :
                </span>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    Each pool will have one match (best of 1) based on knockout
                    and teams moving forward will have more knockouts based on
                    the flow of the events, until 4 teams are left. Overtime
                    will be like ‘Endgame’ (after 12-12 score first team to get
                    13-12 score wins).
                  </li>
                </ul>
              </ul>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 2 :
                </span>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    The teams will have match based on best of 1 and two teams
                    will be selected for finals. Overtime will be normal
                    competitive wise (after 12-12 score first team to win two
                    consecutive rounds wins).
                  </li>
                </ul>
              </ul>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 3 :
                </span>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    Finals will be best of 3. Overtime rules same as ROUND 2.
                  </li>
                </ul>
              </ul>
            </ul>
          </Box>
        </div>
        <div className="py-3  ">
          <h1 className="md:text-3xl text-2xl font-bold ">
            Rules and Regulations
          </h1>
          <p className="text-lg font-normal text-gray-200  "></p>
        </div>
        <Box className="data" sx={dataStyles}>
          <ul className="bulletArrow">
            <ul className="BulletNone">
              <li>The tournament will be only on Mumbai Server.</li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>All weapons are allowed.</li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                All the players must sit in the respective voice channel through
                mobile/PC.
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                By Patch notes 7.0, since Breeze and Bind are temporarily
                removed from the game officially, hence; Ascent, Split, Haven,
                Icebox, Fracture, Pearl, Lotus map will be played.
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>Technical pause will be of 5 minutes.</li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                Tactical pause will be of 1 minute each (2 times, as per the
                RIOT tactical timeout section).
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                Coaches must be on mute during the game after the agent select
                is done, and can unmute only in tactical timeout.
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                Only coaches are allowed to sit in the coach slot, no players or
                managers are allowed to sit in the coach slot.
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                The max time to wait will be 10 minutes, if the team does not
                show in that 10 minute, the opponent will get a forfeit win.
              </li>
            </ul>{" "}
          </ul>
        </Box>
        <div className="">
          <p className="text-lg font-semibold  text-gray-200  ">
            If any team faces any problem, they are supposed to report to the
            Event Co-Ordinator or Pool Volunteer without much delay.<br></br>
          </p>
          <h1 className="text-xl  font-bold mt-2 md:text-3xl py-2">
            Registration fee
          </h1>
          <li className="py-1">
            <span className="font-bold text-xl">Rs.250</span>
          </li>
          <li>
            <span className="font-bold text-xl">Rs.100</span> (for re-entry)
          </li>
        </div>
        <Box>
          <Box className="fee">
            <Box sx={{ width: "100%" }} className="py-4 center1">
              <button
                type="button"
                className=" font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                onClick={(event) =>
                  (window.location.href = "https://forms.gle/NRdSf7w4pvX5E96y7")
                }
              >
                Register Now
              </button>
            </Box>
          </Box>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", marginTop: "20px" }}
            className="text-xl  font-bold mt-2 md:text-3xl py-2"
          >
            Event Coordinators
          </Typography>
          <Box className=" flex items-center md:flex-row flex-col justify-center md:gap-x-4 gap-y-4 mt-4">
            <EventMag person={person.person1} />
            <EventMag person={person.person2} />
          </Box>
        </Box>
      </section>
      <Contact />
    </Box>
  );
}
