import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
// import "../components/a.css"

const styles = {
  height: "250px",
  width: "400px",
  margin: "auto 0",
  padding: "auto 0",
};

const SponsorCard = ({ sponsor }) => {
  return (
    <Box sx={styles} className="card">
      <Image
        onClick={() => window.open(`${sponsor.link}`, "_blank")}
        src={`/images/${sponsor.imgname}`}
        alt="card"
        width="300"
        height="210"
      />
    </Box>
  );
};
export default SponsorCard;
