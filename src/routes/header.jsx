import * as React from "react";

import {
  Paper,
  InputBase,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from "react-router-dom";
import "../Header.css";

function Searchbar() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 500 }}
      style={{ borderRadius: "32px" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default function Header() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box  
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250, overflowX:"hidden" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="SidebarHeader" padding="0px">
          <IconButton aria-label="menu" onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </IconButton>
          <div id="logoSidebar">
            <Link to="/" rel="noreferrer" className="home">
              <h1
                className="logo"
                style={{
                  margin: "10px",
                  marginTop: "0px",
                  marginLeft: "15px",
                  color: "white",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                }}
              >
                Youtube
              </h1>
            </Link>
          </div>
        </ListItem>
        <ListItem key="Home" style={{ maxHeight: "50px" }}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem key="Shorts" style={{ maxHeight: "50px" }}>
          <ListItemButton>
            <ListItemIcon>
              <SlideshowIcon />
            </ListItemIcon>
            <ListItemText primary={"Shorts"} />
          </ListItemButton>
        </ListItem>
        <ListItem key="Subscriptions" style={{ maxHeight: "50px" }}>
          <ListItemButton>
            <ListItemIcon>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText primary={"Subscriptions"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />  
      <List>
        <ListItem key="You" style={{ maxHeight: "50px" }}>
          <ListItemButton>
            <ListItemIcon>
              <VideoLibraryIcon/>
            </ListItemIcon>
            <ListItemText primary={"You"}/>
          </ListItemButton>
        </ListItem>
        <ListItem key="History" style={{ maxHeight: "50px" }}>
          <ListItemButton>
            <ListItemIcon>
              <HistoryIcon/>
            </ListItemIcon>
            <ListItemText primary={"History"}/>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />  
      <List>
        <ListItem >
          <ListItemText primary={"Sign in to like videos, comment, and subscribe."}/>
        </ListItem>
        <ListItem style={{ dispaly:"flex", justifyContent:"center"}}>
          <Button
            variant="outlined"
            style={{
              marginRight: "15px",
              textTransform: "none",
              borderRadius: "32px",
            }}>
            <PersonOutlineIcon />
            Sign in
          </Button>
        </ListItem>
      </List>
      <Divider />  
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary={"Settings"}/>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />  
      <List>
        <ListItem>
          <ListItemText secondary={"Created for the purpose of demostrating React skills"}/>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="header" display="flex">
      <div id="sidebarIcon" style={{  marginLeft: "15px", }}>
        <React.Fragment key={"left"}>
          <IconButton aria-label="menu" onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            id="collapsing"
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      </div>
      <div id="logo" style={{  width: "200px", maxWidth:"200px"}}>
        <Link to="/" rel="noreferrer" className="home">
          <h1
            className="logo"
            style={{ color: "white", paddingTop: "2px", paddingBottom: "2px" , width:"120px"}}
          >
            Youtube
          </h1>
        </Link>
      </div>
      <div
        id="searchBar"
        style={{ flex: "1 0 70%", display: "flex", justifyContent: "center" }}
      >
        <Searchbar />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="mic"
          style={{ marginLeft: "5px" }}
        >
          <MicIcon />
        </IconButton>
      </div>
      <div
        id="profile"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="settings">
          <MoreVertIcon />
        </IconButton>
        <Button
          variant="outlined"
          style={{
            marginRight: "15px",
            textTransform: "none",
            borderRadius: "32px",
          }}
        >
          <PersonOutlineIcon />
          Sign in
        </Button>
      </div>
    </div>
  );
}
