import React from "react";
import BannerImage from "../assets/img-1.avif";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut cum
          rerum minus aperiam, suscipit odio obcaecati, voluptatum repellendus,
          culpa neque magni maxime! Excepturi, iste vel est harum magnam
          repudiandae in, quam dolorum reprehenderit voluptatem aliquam
          provident nesciunt voluptatibus architecto ea, ab officia iure saepe
          odio obcaecati adipisci quaerat! Tenetur dignissimos obcaecati nemo
          illo ducimus ipsa, labore repellendus officiis deserunt?
        </p>
      </div>
    </div>
  );
}

export default About;
