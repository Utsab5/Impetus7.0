import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Contact from "../components/Contact";
import SponsorCard from "../components/SponsorCard";

// const Food = [
//   { image: "/images/anacafe.png", name: "image1" },
//   { image: "/images/Bancharam.png", name: "image2" },
//   { image: "/images/cafe_coffee day.png", name: "image3" },
//   { image: "/images/chai_break.png", name: "image4" },
//   { image: "/images/coolberg.png", name: "image5" },
//   { image: "/images/ferrero.png", name: "image6" },
//   { image: "/images/foodwalas.png", name: "image7" },
//   { image: "/images/Haldirams.png", name: "image8" },
//   { image: "/images/Keventers.jpeg", name: "image9" },
//   { image: "/images/mahdev_kitchen.jpeg", name: "image10" },
//   { image: "/images/mars-wrigley.png", name: "image11" },
//   { image: "/images/mogu mogu drink.png", name: "image12" },
// ];
// const Edtech = [
//   { image: "/images/itc.png", name: "image1" },
//   { image: "/images/intel.jpeg", name: "image2" },
//   { image: "/images/Aakash byjus.png", name: "image" },
//   { image: "/images/Edufoster.jpeg", name: "image" },
//   { image: "/images/erudite.png", name: "image" },
//   { image: "/images/time.png", name: "image" },
//   { image: "/images/IMS.jpeg", name: "image" },
//   { image: "/images/doubtnut.jpeg", name: "image" },
//   { image: "/images/rice coaching.png", name: "image" },
//   { image: "/images/adda247.jpeg", name: "image" },
//   { image: "/images/educrat.png", name: "image" },
//   { image: "/images/Vani institute.png", name: "image" },
//   { image: "/images/Duolingo.png", name: "image" },
//   { image: "/images/physicswallah.jpeg", name: "" },
//   { image: "/images/Scaler.png", name: "image" },
// ];
// const medical = [
//   { image: "/images/Whisper.jpeg", name: "image1" },
//   { image: "/images/Narayana images.jpeg", name: "image2" },
//   { image: "/images/emami.jpeg", name: "image3" },
// ];
export default function SponsorsPage() {
  const styles = {
    overflowY: "hidden",
    h1: {
      mt: "100px",
      mb: "50px",
      fontSize: {
        lg: "54px",
        sm: "50px",
        xs: "40px",
      },
      height: "10vh",
    },
    h3: { mt: "100px", mb: "50px", fontSize: "54px" },
  };
  const sponsor = {
    sponsor1: {imgname: "Gainwell.png"},
    sponsor2: {imgname: "Mahr.jpg"},
    sponsor3: {imgname: "Purahsara.png"},
    sponsor4: {imgname: "Edugraph.jpg"},
    sponsor5: {imgname: "IOCL.jpg"},
    sponsor6: {imgname: "ISHRAE.jpg"},
    sponsor7: {imgname: "ISHRAE.jpg"},
    sponsor8: {imgname: "Lalbaba.jpg"},
    sponsor9: {imgname: "IMechE.jpg"},
    sponsor10: {imgname: "BLACKBIRDROBOTIX.png"},
    sponsor11: {imgname: "BLACKBIRDROBOTIX.png"},
    sponsor12: {imgname: "BLACKBIRDROBOTIX.png"},
    
  }
  const sponsorData = {
    sponsor1: { imgname: "Logiczap.png" },
    sponsor2: { imgname: "elearnmarkets.jpg" },
    sponsor3: { imgname: "idp.jpg" },
    sponsor4: { imgname: "iic.jpg" },
    // sponsor5: { imgname: "IMechE.jpg" },
    // sponsor6: { imgname: "Mahr.jpg" },
    sponsor7: { imgname: "moople.jpg" },
    sponsor8: { imgname: "ThinkAgainLab.jpg" },
    sponsor9: { imgname: "Alo bus.png" },
    sponsor10: { imgname: "Asawa insulation.png" },
    sponsor11: { imgname: "Dyna Temp.png" },
    sponsor12: { imgname: "Roasted.png" },
    sponsor13: { imgname: "7Spices.png" },
  };

  return (
    <>
      <Box sx={styles} className="center1" style={{ marginTop: "100px" }}>
        <Typography variant="h1">Title Sponsor</Typography>
        <Box className="cards">
          <SponsorCard sponsor={sponsor.sponsor1} />
        </Box>        
        <Typography variant="h1">Co-Sponsor</Typography>
        <Box className="cards">
          <SponsorCard sponsor={sponsor.sponsor2} />
          <SponsorCard sponsor={sponsor.sponsor3} styles={{border:"solid white 2px"}} />
        </Box>        
        <Typography variant="h1">Media Partner</Typography>
        <Box className="cards">
          <SponsorCard sponsor={sponsor.sponsor4} />
        </Box>        
        <Typography variant="h1">Event Partner</Typography>
        <Box className="cards">
          <SponsorCard sponsor={sponsor.sponsor5} />
          <SponsorCard sponsor={sponsor.sponsor6} />
          <SponsorCard sponsor={sponsor.sponsor7} />
          <SponsorCard sponsor={sponsor.sponsor8} />
          <SponsorCard sponsor={sponsor.sponsor9} />
        </Box>        
        <Typography variant="h1">Technology Partner</Typography>
        <Box className="cards">
          <SponsorCard sponsor={sponsor.sponsor10} />
        </Box>        
        <Typography variant="h1">Learning Partner</Typography>
        <Box className="cards">
          <SponsorCard sponsor={sponsor.sponsor11} />
          <SponsorCard sponsor={sponsor.sponsor12} />
        </Box>        
      </Box>      
      <Box sx={styles} className="center1" style={{ marginTop: "100px" }}>
        <Typography variant="h1">Past Sponsors</Typography>
        <Box className="cards">
          {Object.values(sponsorData).map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} />
          ))}
        </Box>
        {/* <Typography variant="h1">COMING SOON...</Typography> */}
      </Box>      

      <Contact />
    </>
  );
}
