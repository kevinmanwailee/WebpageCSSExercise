
import logo from './iconMenu.png';
import { useState } from 'react';
import thumbnail from "./videoPlaceholder.jpg";
import './App.css';

function SidebarMenu({clickFunction}){  
  return <img className="hambMenu" src={logo} alt="menu" width="40" height="40" onClick={()=>clickFunction()}/>
  }
  
function Sidebar(){
  return( 
    <p>Sidebar Placeholder</p>
  );
}

function VideoItem({video}){

  return(
    <div className="videoItem">
      <img src={thumbnail} alt="video img" width="250" height="150"/>
      <div className="videoDescription">
        <img className="profile" src={thumbnail} alt="video img" width="40" height="40" />
        <p className="videoTitle">{video.name}</p>
      </div>
    </div>
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

export default function App() {
  const [sidebar, setSidebar] = useState({isHidden : false});
  const sidebarStyle = { visibility: sidebar.isHidden ? 'hidden' : 'visible' };
  function toggleHidden(){
    setSidebar( {isHidden : !sidebar.isHidden} );
  }

  return (
    <div>
      <div className="header">
        <SidebarMenu clickFunction={() => toggleHidden()}/>
        <h1 className="logo">Youtube</h1>
        <form>
          <input type="text" className="searchBar" placeholder="Search"></input>
        </form>
      </div>
      <div className="row">
        <div style={sidebarStyle} className="sidebar">
          <Sidebar/>
        </div>
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
  {name:"Video 5", category:"Test1"}
];