import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

export default function SideBarComp() {
  const [state, setState] = React.useState(false);
  const router = useRouter();

  const goToPage = (key) => {
    const pg = key.split(" ").join("").toLowerCase();
    router.push({
      pathname: "/[a]",
      query: { a: pg },
    });
    // router.push(key.toLowerCase());
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "Home",
          "About",
          "Events",
          "Industry Academia Meet",
          "Expo",
          "Sponsors",
          "Team",
        ].map((text, index) => (
          <ListItem onClick={() => goToPage(text)} key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text.toString()} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ ml: "20px" }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          PaperProps={{ sx: { width: "500px", maxWidth: "80vw" } }}
          anchor="right"
          open={state}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
