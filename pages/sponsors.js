import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Contact from "../components/Contact";
import SponsorCard from "../components/SponsorCard";

const Food = [
  { image: "/images/anacafe.png", name: "image1" },
  { image: "/images/Bancharam.png", name: "image2" },
  { image: "/images/cafe_coffee day.png", name: "image3" },
  { image: "/images/chai_break.png", name: "image4" },
  { image: "/images/coolberg.png", name: "image5" },
  { image: "/images/ferrero.png", name: "image6" },
  { image: "/images/foodwalas.png", name: "image7" },
  { image: "/images/Haldirams.png", name: "image8" },
  { image: "/images/Keventers.jpeg", name: "image9" },
  { image: "/images/mahdev_kitchen.jpeg", name: "image10" },
  { image: "/images/mars-wrigley.png", name: "image11" },
  { image: "/images/mogu mogu drink.png", name: "image12" },
];
export default function SponsorsPage() {
  const styles = {
    overflowY:"hidden",
    h1: {
      mt: "100px",
      mb: "50px",
      fontSize: {
        lg:"54px",
        sm:"50px",
        xs:"40px",
      },
      height:"10vh",
    },
    h3: { mt: "100px", mb: "50px", fontSize: "54px" },
  };
  const sponsorData = {
    sponsor1: { imgname: "Logiczap.png" },
    sponsor2: { imgname: "elearnmarkets.jpg" },
    sponsor3: { imgname: "idp.jpg" },
    sponsor4: { imgname: "iic.jpg" },
    sponsor5: { imgname: "IMechE.jpg" },
    sponsor6: { imgname: "Mahr.jpg" },
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
      <Box sx={styles} className="center1" style={{marginTop:"100px"}}>
        <Typography variant="h1">Past Sponsors</Typography>
        <Box className="cards">
          {Object.values(sponsorData).map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} />
          ))}
      </Box>
        {/* <Typography variant="h1">COMING SOON...</Typography> */}
      </Box>

      {/* <Box sx={styles} className="center1">
        <Typography variant="h3">Hardware</Typography>
        <div className="image-container" >
          <img src="/images/Thyssenkrupp.png" alt="Image 1" className="image" />
          <img src="/images/hero_vired.jpeg" alt="Image 2" className="image" />
          <img src="/images/JSW-steel.png" alt="Image 2" className="image" />
          <img
            src="/images/TVS motor company.png"
            alt="Image 2"
            className="image"
          />
          <img
            src="/images/Hero motocorp.webp"
            alt="Image 2"
            className="image"
          />
          <img src="/images/Hyundai.png" alt="Image 2" className="image" />
          <img
            src="/images/Royal-Enfield-Logo.jpg"
            alt="Image 2"
            className="image"
          />
          <img src="/images/Indian_Oil.png" alt="Image 2" className="image" />
        </div>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3">Food</Typography>
        <div className="image-container">
          {Food.map((s) => (
            <img key={s.name} src={s.image} alt={s.name} className="image" />
          ))}
        </div>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3">Fintech</Typography>
      </Box> */}
     
      <Contact />
    </>
  );
}

