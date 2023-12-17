import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
export default function SponsorsPage() {
  const styles = {
    h1: {
      mt: "100px",
      mb: "50px",
      fontSize: "54px",
    },
    h3: {
      mt: "100px",
      mb: "50px",
      fontSize: "30px",
    },
  };

  return (
    <>
      <Box sx={styles} className="center1">
        <Typography variant="h1">Sponsors</Typography>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3">Hardware</Typography>
        <div>
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
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3">Fintech</Typography>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3">Banking</Typography>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3">Tech</Typography>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3">Automotive</Typography>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3">Edtech</Typography>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3">Medical</Typography>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3">Entertainment</Typography>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3">Gaming</Typography>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3">Electric Vehicles</Typography>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3"></Typography>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3"></Typography>
      </Box>
      <Box sx={styles} className="center1">
        <Typography variant="h3"></Typography>
      </Box>
    </>
  );
}
