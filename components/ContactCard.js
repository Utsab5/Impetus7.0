import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const styles = {
  height: "300px",
  width: "400px",
  img: {
    margin: "8px",
  },
  "div h4": {
    margin: "10px",
  },
  ".title": {
    display: "flex !important",
    flexDirection: "column",
  },

  display: "flex !important",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const ContactCard = ({ person }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(true);
  const offHover = () => setHover(false);
  const toggleHover = () => setHover(!hover);

  return (
    <Box sx={styles} className="pcard bg-gray-900  ">
      <Image
        className={`profile ${hover ? "profileHover" : ""}`}
        onMouseEnter={onHover}
        onClick={toggleHover}
        onMouseLeave={offHover}
        src={`/images/${person.imgname}`}
        style={{ borderRadius: "50%" }}
        alt="guy"
        height="200"
        width="200"
      />
      <Box className="title">
        <h5 className=" text-xl font-medium text-gray-50 ">{person.name} </h5>
        <span className="text-[14px]  text-gray-300">{person.post}</span>
        <h5 className=" text-[16px] font-medium text-gray-100 ">
          {person.phone}{" "}
        </h5>
      </Box>

      <Box
        onMouseEnter={onHover}
        onClick={toggleHover}
        onMouseLeave={offHover}
        className={`text ${hover ? "textHover" : ""}`}
      >
        <a href={person.insta}>
          <InstagramIcon />
        </a>
        <a href={person.link}>
          <LinkedInIcon />
        </a>
      </Box>
    </Box>
  );
};

export default ContactCard;
