import React from "react";
import "./Home.css";
import {Link} from 'react-router-dom'
import {MdApps} from 'react-icons/md'
import {BsPersonSquare} from 'react-icons/bs'
import Search from "../components/Search";
import Weather from "../components/Weather";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to='about'>About</Link>
          <Link to='store'>Store</Link>
        </div>
        <div className="home__headerRight">
        {/* <Link to='gmail'>Gmail</Link> */}
        <a href="https://gmail.com">Gmail</a>
        {/* <Link to='images'>Images</Link> */}
        <a href="https://facebook.com">Facebook</a>
        <MdApps className="svg"/>
        <BsPersonSquare />
        </div>
      </div>
      <div className="home__body">
        <div className="zeach__container"><h1 className="zearch">ZEARCH</h1></div>
        <div className="home__inputContainer">
          <Search />
        </div>
        <Weather />
      </div>
    </div>
  );
}

export default Home;
