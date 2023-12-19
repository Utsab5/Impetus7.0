import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
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
  "a.active": {
    borderBottom: "2px solid red",
  },
};

export default function NavbarComp() {
  
  const router = useRouter();
  return (   

    <Box className="center1" sx={{ backgroundColor: "transparent" , width:"80%" , maxWidth:"900px"}}>
      <Box sx={styles} className="center1">
        <Box className="nav">
          {/* <Link href="/home"><span>Home</span></Link> */}
          <Link href="/about" className={router.pathname === "/about" ? "active" : ""}><span>About</span></Link>
          <Link href="/events" className={router.pathname === "/events" ? "active" : ""}><span>Events</span></Link>
          <Link href="/expo"  className={router.pathname === "/expo" ? "active" : ""}><span>Expo</span></Link>
          <Link href="/sponsors" className={router.pathname === "/sponsors" ? "active" : ""}><span>Sponsors</span></Link>
          <Link href="/team" className={router.pathname === "/team" ? "active" : ""}><span>Team</span></Link>
          <Link href="/industryacademiameet" style={{textAlign:"center"}} className={router.pathname === "/industryacademiameet" ? "active" : ""}><span>Industry Academia Meet</span></Link>
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
