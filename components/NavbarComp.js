import { Box } from "@mui/system";
import Link from "next/link";
import ContactCard from "./ContactCard";

const styles = {
  width: "100%",
  maxWidth: "1200px",
  ".nav": {
    display: "grid",
    width: "100%",
    gap: {
      sm: "1px",
    },
    gridTemplateColumns: {
      lg: "repeat(6,0.7fr) 1.5fr",
      sm: "repeat(6,0.4fr) 1.3fr",
      xs: "repeat(6,0.8fr) 1.5fr",
    },
    flexDirection: "row",
    a: {
      fontSize: "18px",
      textDecoration: "none",
      color: "#fff",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "default",
      transition: "all 300ms cubic-bezier(0.075, 0.82, 0.165, 1)",
      textShadow: "0 0 15px #8e54e9",

      span: {
        position: "relative",
        display: " inline-block",
        transition: " color 0.3s ease",
        ":hover": {
          color: "#fff",
          transform: "scale(1.1)",
          cursor: "pointer",
          transition: "all 0.5s ease",
        },
        ":hover::before": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          borderBottom: "2px solid #fff",
          transition: "width 0.5s",
        },
      },
    },
  },
  "a.active": {
    borderBottom: "2px solid red",
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
