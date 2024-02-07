import { React, useState } from "react"; 
import hambIcon from '../iconMenu.png';
import pfpIcon from "../pfpIcon.jpg";
import samplePhoto from "../samplePhoto.avif";
import { Link, useLocation } from "react-router-dom";
import "../videoPage.css";


function Header(){
    return(
      <div style={{ display: "flex" }}>
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
   <img className="hambMenu" src={hambIcon} alt="menu" width="40" height="40" onClick={()=>clickFunction()}/>
  );
}

function Description(){
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  function toggleDescExpanded(){
    setIsDescExpanded(!isDescExpanded);
  }

  if(!isDescExpanded){
    return(
      <div id="description"
        style={{ display:"flex", flexDirection:"column", padding:"5px ", backgroundColor:"dimgray", borderRadius:"10px" }}>
        <p className="descriptionText" style={{ fontWeight:"bold"}}>670k views 7 months ago</p>
        <p className="descriptionText">Classic winter scene of a pond in the Canadian Praries.</p>          <p className="descriptionText" style={{ fontWeight:"bold" }}
          onClick={()=>toggleDescExpanded()}>...more</p>
      </div>
    );
  } else{
    return(
      <div id="description"
       style={{ display:"flex", flexDirection:"column", padding:"5px ", backgroundColor:"dimgray", borderRadius:"10px" }}>
       <p className="descriptionText" style={{ fontWeight:"bold"}}>670,583 views July 4, 2023</p>
       <p className="descriptionText">Classic winter scene of a pond in the Canadian Praries.</p>          
       <p className="descriptionText"
        style={{ marginTop:"10px", marginBottom:"10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       <p className="descriptionText" style={{ fontWeight:"bold" }}
         onClick={()=>toggleDescExpanded()}>...less</p>
      </div>
    );
  }

  
}

function WebPage(){
  const [isSubbed, setisSubbed] = useState(false);
  
  function toggleSubbed(){
    setisSubbed(!isSubbed);
  }

  return(
    <div className="webpage">
      <div className="videoArea">
        <img src={samplePhoto} alt="video" className="video"/>
      </div>
      <div id="bottomContents"
        style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gridTemplateRows:"1fr"}}>
        <div id="videoInformation"
          style={{ gridArea:"1/1/1/2", marginLeft:"1%"}}>
          <p id="videoTitle" 
          style={{ fontWeight:"bold", textTransform:"capitalize", margin:"10px 0 0 0"}}>
            {useLocation().pathname}
          </p>
          <div id="videoDescription"
          style={{ display:"flex", alignItems:"center", margin:"10px"}}>
            <img src={pfpIcon} alt="profilePic" style={{ borderRadius:"50%", height:"30px", width:"30px", objectFit:"contain" }}/>
            <div id="channelInfo"
              style={{ display:"flex", flexDirection:"column", marginLeft:"5px" }}>
              <p id="channelName"
              style={{ margin:"0px", fontSize:"16px", fontWeight:"bold"}}>Channel Name</p>
              <p id="subCount"
              style={{ margin:"0px", color:"lightgray", fontSize:"12px"}}> 16.8k subscribers </p>
            </div>
            <div id="subButton"
            style={{ display:"flex", alignItems:"center", margin:"0px 12px 0px 12px", height:"34px", backgroundColor:isSubbed===true?"gray":"white", borderRadius:"20px",
                      cursor:"pointer"}}
            onClick={()=> toggleSubbed()}>
              <p
              style={{ color:isSubbed===true?"lightgray":"black", padding:"0px 12px 0px 12px", fontSize:"16px", userSelect: "none" }}>Subscribe</p>
            </div>
          </div>
          <Description/>
        </div>
      </div>
    </div>      
  );
}

export default function VideoPage(){
  return(
    <div style={{display:"flex", flexDirection:"column", overflow:"hidden"}}>
      <Header/>
      <WebPage/>
    </div>  
  );
}