import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import thumbnail from "../videoPlaceholder.jpg";
import Header from "./header.jsx";
import "../App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function VideoItem({ video }) {
  return (
    <Link to={`/video/${video.name}`} rel="noreferrer" className="home">
      <div className="videoItem">
        <img src={thumbnail} alt="video img" width="250" height="150" />
        <div className="videoDescription">
          <img
            className="profile"
            src={thumbnail}
            alt="video img"
            width="40"
            height="40"
          />
          <p className="videoTitle">{video.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Root() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div id="Outer" style={{ display: "flex" }}>
        <div id="Header">
          <Header />
        </div>
        <div id="Body"></div>
      </div>
    </ThemeProvider>
  );
}
