import { Box } from "@mui/system";
import Link from "next/link";
import ContactCard from "./ContactCard";

const styles = {
  width: "100%",
  maxWidth: "1200px",
  ".nav": 
  {
    display: "grid",
    width:"100%",
    gridTemplateColumns: {
      lg: "repeat(5,0.8fr) 1.5fr",
    //   sm: "repeat(4,1fr)",
      sm: "repeat(5,0.8fr) 1.5fr",
      xs: "repeat(5,0.8fr) 1.5fr",
    //   xs: "repeat(2,1fr)",
    },
    flexDirection: "row",
    // gap: "0 40px",
    a: {
      fontSize: "17px",
      textDecoration: "none",
      color: "white",
      fontWeight: "400",
    //   margin: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor:"default",
        
      span:{
        ":hover":{
            color:"red",
            cursor:"pointer",
        }
      }
    },
    // pl: "20px",
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
    mt: "7px",
    mb: "40px",
  },
};

export default function NavbarComp() {
  return (
    <Box className="center1" sx={{ backgroundColor: "transparent" , width:"80%" , maxWidth:"900px"}}>
      <Box sx={styles} className="center1">
        <Box className="nav">
          {/* <Link href="/home"><span>Home</span></Link> */}
          <Link href="/about"><span>About</span></Link>
          <Link href="/events"><span>Events</span></Link>
          <Link href="/expo"><span>Expo</span></Link>
          <Link href="/sponsors"><span>Sponsors</span></Link>
          <Link href="/team"><span>Team</span></Link>
          <Link href="/industryacademiameet" style={{textAlign:"center"}}><span>Industry Academia Meet</span></Link>
          {/* <Link
            style={{ gridColumn: "span 2", textAlign: "center" }}
            href="/industryacademiameet"
          >
            Industry Acadameia Meet
          </Link> */}
        </Box>
        
      </Box>
    </Box>
  );
}
