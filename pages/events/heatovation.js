import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Contact from "../../components/Contact";
// import ContactCard from "../../components/ContactCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "next/router";
import EventMag from "../../components/EventManagement";
const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "400px",
  minHeight: "400px",
  background: `url(/images/heatovation_pg.jpg)  no-repeat  `,

  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  mt: "50px",
};

const dataStyles = {
  textAlign: "justify",
  maxWidth: "800px",
  ".data": {
    margin: "50px 0 0 0",
  },
  "div span,ul": {
    display: "block",
    margin: "10px 0",
  },
  "div ul li": {
    textIndent: "10px",
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
  ".nestedList": {
    margin: "0",
  },
  ".data h2, .fee h3": {
    margin: "40px 0",
  },
};

export default function CadathonPage() {
  const theme = useTheme();
  const router = useRouter();

  const goNext = () => {
    router.push("/events/scrapyard");
  };
  const goBack = () => {
    router.push("/events/yantrasearch");
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
      name: "Upendra Kikkari",
      phone: "+91 9704810737",
    },
    person2: {
      name: "Mahesh Bandlamudi",
      phone: "+91 8639555844",
    },
  };
  return (
    <Box sx={{ width: "100vw" }} className="center1 mt-10">
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
          <p className="text-lg font-normal text-gray-200  ">
            HEATOVATION is an event organized by the Impetus 6.0 which invites
            participation from students with entrepreneurial/ problem-solving
            mindsets in the field of HVAC pan India. It would require its
            participants to present their solutions to the panel of judges and
            answer their queries based on the presentation.
          </p>
          <div className="py-2 flex items-center flex-col justify-center ">
            <div className="py-3  ">
              <h1 className="md:text-3xl text-2xl font-bold ">
                Problem Statement
              </h1>
              <p className="text-lg font-normal text-gray-200  "></p>
            </div>
            <Box className="data" sx={dataStyles}>
              <ul className="bulletArrow">
                <ul className="BulletNone">
                  <li>Effective desalination using solar power systems.</li>
                </ul>{" "}
                <ul className="BulletNone">
                  <li>Waste heat and district heating</li>
                </ul>{" "}
                <ul className="BulletNone">
                  <li>
                    {" "}
                    Design of cooling vest for regulating body temperatures for
                    miners.
                  </li>
                </ul>{" "}
                <ul className="BulletNone">
                  <li>
                    Thermo-electric refrigeration for household applications
                  </li>
                </ul>{" "}
              </ul>
            </Box>
            <div className="py-3 flex flex-col items-center justify-center gap-y-2">
              <p className="text-lg">
                <span className="py-3 px-2.5 me-2  md:text-lg text-md font-medium rounded-lg   bg-gray-800 text-gray-400  ">
                  <CalendarMonthIcon className="h-5" />
                  Date
                </span>
                17th February, 2024 2:30pm
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
        <div className="py-2  ">
          <h1 className="text-3xl py-1 font-bold ">Objective</h1>
          <p className="text-lg font-normal text-gray-200  ">
            You have to upload the presentation along with an abstract of your
            idea (in less than 350 words) on the given link and the top 5
            performers will be selected for the second round.
            <br />
            In the second round, the participants will be given an opportunity
            to present the idea in front of the judges after which top
            performers will be announced.
          </p>
        </div>
        <div className="py-6 bg-gray-900 mb-2 shadow-md sm:rounded-lg px-0 rounded-md">
          <table className="min-w-full divide-y">
            <tbody className="bg-gray-900 md:text-lg text-gray-300 divide-y divide-gray-800">
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm md:text-lg font-medium ">
                    Registration
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm md:text-lg font-medium ">
                    2 days before the commencement of round1
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm  md:text-lg font-medium ">
                    Participation
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    Individual or team of max 2 members
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 md:px-4  whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Expected number of teams
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    15+ teams
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm md:text-lg font-medium ">
                    Event Duration
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm md:text-lg font-medium ">
                    1 hour 15 minutes
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
                  <div className="text-sm font-medium  md:text-lg ">2</div>
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
                    <span className="font-bold ">Rs.8000</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-3 mt-2 ">
          <h1 className="text-3xl font-bold ">Flow of the events</h1>
          <p className="text-lg font-normal text-gray-200  ">
            The following event occur in two rounds. The first round will be an
            online pitch deck submission. You have to upload the presentation
            along with an abstract of the presentation on the given form link
            and the top 5 performers will be selected for the second round. In
            the second round, the participants will be given an opportunity to
            present the idea in front of the judges after which top performers
            will be announced.
          </p>
        </div>
        <div className="py-3  ">
          <h1 className="md:text-3xl text-2xl font-bold ">
            Rules and Regulations
          </h1>
          <p className="text-lg font-normal text-gray-200  "></p>
        </div>
        <Box className="data" sx={dataStyles}>
          <ul className="bulletArrow">
            <li>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Basic Ruless{" "}
                </span>
                <ul className="BulletNone">
                  <li>
                    This competition is open to every student from the colleges
                    all over India.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    Start-up idea presentation is a must for this competition.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    One participant cannot be a part of more than one team.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    No change in team structure is permitted after the team is
                    registered.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    Registration: Individuals/teams registered through this form
                    will only be considered valid.
                  </li>
                </ul>
              </ul>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 1 :
                </span>
                <ul className="BulletNone">
                  <li>
                    This will be an online pitch deck submission round.
                    Participants have to submit their presentation (in .pptx
                    format) along with an abstract.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    The word limit of abstract should be strictly within 350
                    words (in .docx format).
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    Abstract should be precise and to the point and must be an
                    entrepreneurial/ problem-solving.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    Participants have to submit their files through the provided
                    link only.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    The last date for the round 1 will be three days before the
                    event and the result will be announced two days before the
                    event.
                  </li>
                </ul>
              </ul>
            </li>
            <li>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 2 :
                </span>
                <ul className="BulletNone">
                  <li>This will be a presentation round.</li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    The participants will be given an opportunity to present
                    their idea in-front of the judges
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    Time limit for the presentation is 10 minutes and another 5
                    minutes time will be given for interaction with the judges.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li></li>
                </ul>
              </ul>
            </li>
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
          <li className="py-1">Free (For IIEST students)</li>
          <li>
            <span className="font-bold text-xl">Rs.100</span> (For non-IIEST
            students)
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
