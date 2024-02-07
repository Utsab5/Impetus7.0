import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const containerStyles = {
  marginTop: "50px",
  margin: {
    xl: "9% auto",
    lg: "9%",
    sm: "9%",
    xs: "9%",
  },
  backgroundColor: "#ffffff26",
  padding: "50px",
  maxWidth: "1500px",
  width: "85vw",
  borderRadius: "15px",
  // backdropFilter:"blur(15px)",
  padding: {
    xs: "0",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  h1: {
    padding: "20px 0",
    textAlign: {
      lg: "left",
      sm: "center",
      xs: "center",
    },
    fontSize: {
      lg: "48px",
      sm: "32px",
      xs: "32px",
    },
  },
};

const style = {
  display: "flex",
  alignItems: "center",
  maxWidth: "1280px",
  width: "70vw",
  gap: "35px",
  margin: "20px",
  marginBottom: "50px",
  flexDirection: {
    xs: "column-reverse",
    sm: "column-reverse",
    lg: "row",
  },
  ".content": {
    flex: "1",
    display: "flex",
    p: {
      overflowY: "hidden",
      lineHeight: "1.5",
      height: "auto",
      minHeight: "150px",
      color: "white",
      textAlign: "justify",
    },
    flexDirection: "column",
  },
  ".ButtonBox": {
    display: "flex",
    justifyContent: "center",
    margin: "25px 0",
    ".Btn": {
      border: "solid #00A7E7 2px",
      borderRadius: "25px",
      padding: "10px 30px",
      color: "white",
      ":hover": {
        backgroundColor: "#00A7E7",
        color: "white",
      },
    },
  },
  ".tShirt": {
    backgroundColor: "#c4c4c4",
    width: {
      lg: "30%",
      sm: "40%",
      xs: "80%",
    },
    borderRadius: "10px",
  },
};

export default function MerchandiseComp() {
  
  return (
    <Box sx={containerStyles}>
      <Typography className="flux" variant="h1">
        MERCHANDISE
      </Typography>
      <Box sx={style}>
        <Box className="content">
          <Typography variant="p">
            Our official Impetus merchandise T-shirt is the perfect addition to
            your wardrobe! Made with High-quality materials, Reflective print
            and Customised Name, this shirt is sure to turn heads. Whether youre
            a die-hard Impetus fan or simply looking for a stylish and
            comfortable new piece to add to your collection, this T-shirt is the
            perfect choice.<br></br>
            <br></br>
            Stand out from the crowd and show your support for the Impetus
            community with our exclusive merchandise. Do not miss out on this
            unique opportunity to own an official Impetus T-shirt that is not
            only fashionable but also a great way to connect with like-minded
            individuals who share your passion for this iconic brand. So,
            upgrade your wardrobe today and join the Impetus community with our
            official merchandise T-shirt!
          </Typography>
          <Box className="ButtonBox">
            {/* <Button className="Btn" onClick={handleClick}>Buy Now</Button> */}
            <Button className="Btn" href="https://forms.gle/C2H9EZJeNkJ5PATD6">Buy Now</Button>
          </Box>
        </Box>
        <Box className="tShirt" style={{}}>
          <img src="/images/T_Shirt_WE_MOVETHE_WORLD-removebg-preview.png" alt="tshirt" />
        </Box>
      </Box>
    </Box>
  );
}

