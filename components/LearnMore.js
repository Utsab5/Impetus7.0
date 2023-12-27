import { Typography } from "@mui/material";
import { useRouter } from "next/router";

const styles = {
  color: "#57B8FF",
  cursor: "pointer",
};

export default function LearnMore({ link }) {
  const router = useRouter();

  const changePage = () => {
    router.push(link);
  };

  return (
    <Typography className="mt-1" onClick={changePage} sx={styles}>
      Learn More ↗
    </Typography>
  );
}
