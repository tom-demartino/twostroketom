import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Logo from "../assets/logos/fullLogo";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  function handlePage(route) {
    navigate(route);
  }

  const pages = [
    { label: "Home", route: "/", callback: () => handlePage("/") },
    { label: "Fun", route: "/fun", callback: () => handlePage("/fun") },
    {
      label: "Highlights",
      route: "highlights",
      callback: () => handlePage("/highlights"),
    },
  ];

  const tabList = () => (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-end", // Location of page links in appbar
      }}
    >
      {pages.map((page, index) => (
        <Button
          key={index}
          onClick={page.callback}
          sx={{
            my: 2,
            display: "block",
            textUnderlineOffset: "5px",
            textDecorationLine: pathname === page.route ? "underline" : "none",
          }}
        >
          {page.label}
        </Button>
      ))}
    </Box>
  );

  const tabDrawer = () => (
    <Box
      sx={{
        flexGrow: 0,
        display: { xs: "flex", md: "none" },
      }}
    >
      <IconButton size="large" onClick={() => setOpenDrawer(true)}>
        <MenuIcon color="primary" />
      </IconButton>
    </Box>
  );

  return (
    <>
      <AppBar sx={{ backgroundColor: "white", height: "56px" }}>
        <Toolbar>
          <Box
            sx={{
              flexDirection: "row",
              flex: 1,
              flexWrap: "no-wrap",
              justifyContent: "left",
              overflow: "hidden",
              height: "70%",
            }}
          >
            <Logo />
          </Box>
          {tabList()}
          {tabDrawer()}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Box
          sx={{ width: "auto" }}
          role="presentation"
          onClick={() => setOpenDrawer(false)}
          onKeyDown={() => setOpenDrawer(false)}
        >
          <List>
            {pages.map((page, index) => {
              return (
                <ListItem
                  key={index}
                  selected={pathname === page.route}
                  disablePadding
                >
                  <ListItemButton onClick={e => page.callback(e, index)}>
                    <ListItemText primary={page.label} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
