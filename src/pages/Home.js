import React from "react";
import { Link } from "react-router-dom";
import BannerImage from '../assets/img-1.avif'
const Home = () => {
  return (
    <div className='home' style={{backgroundImage :`url(${BannerImage})`}}>      
    <div className="headerContainer">
        <h1>Welcome to our website</h1>
        <p>You can rent any car</p>
        <Link to="/menu"><button>Rent now</button></Link>
      </div>
    </div>
  );
};

export default Home;

