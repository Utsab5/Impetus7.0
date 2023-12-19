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
    <Box sx={styles} className="center1" style={{marginTop:"100px"}}
    >
      {/* <Typography variant="h1">Sponsors</Typography>       */}
      <Typography variant="h1" style={{height:"60px"}}>Coming Soon...</Typography>      
    </Box>
  );
}
