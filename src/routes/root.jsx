import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React,{ useState, useEffect } from "react";
import Header from "./header.jsx";
import "../App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// function VideoItem({ video }) {
//   return (
//     <Link to={`/video/${video.name}`} rel="noreferrer" className="home">
//       <div className="videoItem">
//         <img src={thumbnail} alt="video img" width="250" height="150" />
//         <div className="videoDescription">
//           <img
//             className="profile"
//             src={thumbnail}
//             alt="video img"
//             width="40"
//             height="40"
//           />
//           <p className="videoTitle">{video.name}</p>
//         </div>
//       </div>
//     </Link>
//   );
// }


function Videos(){
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchTitles = async () => {
      try{
        const response = await fetch('https://dummyjson.com/posts?limit=4');
        const data = await response.json();
        setTitles(data);
        console.log(data);
      } catch (error){
        console.log(error);
      }  
      
    };
    fetchTitles();
  },[]);

  return(
    <div id="VideoItem">
      {titles.posts.map((post) => {
        return(
          <p>{post.title}</p>
        )
      })}
    </div>
  )
}

export default function Root() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div id="Outer" style={{ display: "flex", flexDirection:"column" }}>
        <div id="Header" style={{marginBottom:"80px"}}>
          <Header />
        </div>
        <div id="Videos">
          <Videos/>
        </div>
        <div id="Body"></div>
      </div>
    </ThemeProvider>
  );
}
