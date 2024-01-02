import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import ContactCard from "./ContactCard";
import { Typography } from "@mui/material";

const styles = {
  width: "90vw",
  maxWidth: "1200px",
  ".nav": {
    display: "grid",
    gridTemplateColumns: {
      lg: "repeat(8,1fr)",
      sm: "repeat(4,1fr)",
      xs: "repeat(2,1fr)",
    },
    flexDirection: "row",
    gap: "0 40px",
    a: {
      fontSize: "20px",
      textDecoration: "none",
      color: "white",
      fontWeight: "400",
      margin: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
    },
    pl: "20px",
  },
  ".icons": {
    fontSize: "100px",
    height: "100px",
    overflowY: "hidden",
    "button svg": {
      filter: "opacity(0.6)",
      margin: "15px",
      margin: {
        xs: "5px",
      },
      ":hover": {
        filter: "opacity(1)",
      },
      fontSize: "30px",
    },
    
  },
  ".terms p": {
    mt: "5px",
    mb: "40px",
  },
};

  const CStyle={
    display:"block",
    // width:{lg:"60%",sm:"70%",xs:"80%"},
    width:"100%",
    margin:"0 auto", 
    fontSize:"16px", 
    color:"#ccc",
    textAlign:"center"
  }

export default function Contact() {
  return (
    // <Box className="center1" sx={{ background: "linear-gradient(black, #1d1d1d)" }}>
    <Box className="center1" sx={{ background: "linear-gradient(transparent,#ffffff1a)", width:"100%" }}>
      <hr style={{width:"70%",height:"1px",borderTop:"solid 1px #555",margin:"40px 0"}}></hr>
      <Box sx={styles} className="center1">
        <Box sx={{textAlign:"center"}}>
          <Typography variant="h3" sx={{marginBottom:"25px"}}>Indian Institute of Engineering Science and Technology, Shibpur</Typography>
          <Typography variant="p" sx={{display:"block",width:{lg:"60%",sm:"70%",xs:"80%"},margin:"0 auto", fontSize:"16px", color:"#ccc"}}>Impetus, the annual departmental fest of Mechanical Engineering of IIEST Shibpur, is a boisterous festival brimming with sensational events and perpetual fun.</Typography>
        </Box>

        <Box sx={{display:"flex",width:"90%",justifyContent:"space-between",marginTop:"30px",flexDirection:{sm:"row", xs:"column"},marginBottom:{lg:"0",sm:"20px",xs:"0"}}}>
          <Box>
            <Typography variant="p" sx={CStyle}>Vasu Krishna Khemka (Main Coordiantor)</Typography>
            <Typography variant="p" sx={CStyle}>+91 7808814413</Typography>
            <Typography variant="p" sx={CStyle}>Divyansh Bajpai (Main Coordiantor)</Typography>
            <Typography variant="p" sx={CStyle}>+91 9369462864</Typography>
          </Box>
          <Box className="icons center2">
            <IconButton
              onClick={(event) =>
                (window.location.href = "https://www.facebook.com/smeiiests/")
              }
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              onClick={(event) =>
                (window.location.href =
                  "https://www.linkedin.com/in/society-of-mechanical-engineers-iiest-shibpur-89244a193")
              }
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              onClick={(event) =>
                (window.location.href =
                  "https://www.instagram.com/sme.iiests/?hl=en")
              }
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              onClick={(event) =>
                (window.location.href = "https://www.youtube.com/@smeiiests7235")
              }
            >
              <YouTubeIcon />
            </IconButton>
          </Box>

        </Box>

        <Box className="terms center1 ">
          <Link
            href="/team"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Meet the team
          </Link>

          <em style={{ margin: "10px 0 20px 0", textAlign: "center" }}>
            Copyright © 2024 - All rights reserved by Impetus
          </em>
        </Box>
      </Box>
    </Box>
  );
}
