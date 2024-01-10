import React from "react";
import logo from '../iconMenu.png';
import { Link } from "react-router-dom";
import thumbnail from "../videoPlaceholder.jpg";

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

  function WebPage(){
    return(
        <div>
            
        </div>
    );
  }

export default function VideoPage(){
    return(
        <div id="video">
            <Header/>
            <div className="row">
                <Sidebar/>
                <WebPage/>
            </div>
        </div>
    );
}