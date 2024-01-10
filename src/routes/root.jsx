import { Link } from "react-router-dom";
import React from "react";
import logo from '../iconMenu.png';
import thumbnail from "../videoPlaceholder.jpg";
import '../App.css';

function Header(){
  return(
    <div className="header">
      <SidebarMenu/>
      <Link to="/" rel="noreferrer" className="home">
        <h1 className="logo">Youtube</h1>
      </Link>
      <form>
        <input type="text" className="searchBar" placeholder="Search"></input>
      </form>
    </div>
  );
}

function SidebarMenu({clickFunction}){  
  return(
     <img className="hambMenu" src={logo} alt="menu" width="40" height="40" onClick={()=>clickFunction()}/>
    );
  }
    
function Sidebar(){
  return( 
    <div className="sidebar">
      <p>Sidebar Placeholder</p>
    </div>
  );
}

function VideoItem({video}){

  return(
    <Link to={`/video/${video.name}`} rel="noreferrer" className="home">
      <div className="videoItem">
          <img src={thumbnail} alt="video img" width="250" height="150"/>
        <div className="videoDescription">
          <img className="profile" src={thumbnail} alt="video img" width="40" height="40" />
          <p className="videoTitle">{video.name}</p>
        </div>
      </div>
    </Link>
  );
}
  
  function VideoGrid({ videos }){
    const videoList = [];
  
    videos.forEach((video) =>{
      videoList.push(video);
    });
    return(
      <>
        {videoList.map(video => (
          <VideoItem key={video.name} video={video}/>
        ))}
      </>
    );
  }

export default function Root(){  
    return (
      <div>
        <Header/>
        <div className="row">
        
          <Sidebar/>
          <div className="grid">
            <VideoGrid videos={VIDEOS}/>
          </div>
        </div>
      </div>
    );
  }
const VIDEOS = [
  {name:"Video 1", category:"Test"},
  {name:"Video 2", category:"Test1"},
  {name:"Video 3", category:"Test"},
  {name:"Video 4", category:"Test"},
  {name:"Video 5", category:"Test1"},
  {name:"Video 6", category:"Test1"},
  {name:"Video 7", category:"Test1"},
  {name:"Video 8", category:"Test1"},
  {name:"Video 9", category:"Test1"},
  {name:"Video 10", category:"Test1"},
  {name:"Video 11", category:"Test1"}
];