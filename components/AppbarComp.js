import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const styles = {
  position: "absolute",
  width: "100vw",
  ".appbar": {
    // backdropFilter: "blur(5px)",
    position: "relative",
    padding: {
      lg: " 0 50px",
      md: "0 50px",
      sm: "0 30px",
      xs: "0 25px",
    },
    paddingTop: "10px !important",
    boxShadow: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    ".logo": {
      cursor: "pointer",
    },
  },
};

export default function AppbarComp() {
  const SideBarComp = dynamic(() => import("./SideBarComp"), { ssr: false });
  const NavbarComp = dynamic(() => import("./NavbarComp"), { ssr: false });

  const router = useRouter();
  const [top, setTop] = useState(true);
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  const goToHome = () => {
    router.push("/home");
  };

  const handleTop = () => {
    if (window.scrollY === 0) setTop(true);
    else setTop(false);
  };

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleTop);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleTop);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const isMobile = width < 960;

  return (
    <Box sx={styles} className="center2">
      <AppBar
        className="appbar"
        style={{
          mt: "30px",
          background: "none",
          // backdropFilter: `${top ? "none" : "blur(10px)"}`,
          background: `${
            top
              ? "none"
              : "linear-gradient(to right, black ,rgb(17 24 39 ),black)"
          }`,
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          paddingBottom: "10px",
        }}
      >
        <Image
          onClick={goToHome}
          src="/images/final_logo.png"
          alt="logo"
          width="70"
          height="70"
          className="logo"
        />
        {isMobile ? <SideBarComp /> : <NavbarComp />}
      </AppBar>
    </Box>
  );
}
