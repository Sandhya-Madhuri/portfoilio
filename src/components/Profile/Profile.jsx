import React, { useContext } from "react";
import { RefContext } from "../RefContext";
import "./profile.css";
import About from "./About";
import Skills from "./Skills";
import ProfileCard from "./ProfileCard";

function Profile() {
  const { aboutRef } = useContext(RefContext);

  return (
    <div className="about-container">
      <div className="profile-content" ref={aboutRef}>
        <ProfileCard />
        <Skills />
      </div>
      <About />
    </div>
  );
}

export default Profile;
