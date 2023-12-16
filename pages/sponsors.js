import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";


export default function SponsorsPage() {
  const styles = {
    h1: {
      mt: "100px",
      mb: "50px",
      fontSize: "48px",
    }    
  };
  
  return (
    <Box sx={styles} className="center1">
      <Typography variant="h1">Sponsors</Typography>      
    </Box>
  );
}
