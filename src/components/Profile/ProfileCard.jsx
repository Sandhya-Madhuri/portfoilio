import React from "react";
import "./ProfileCard.css"; // Import CSS file for styling

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <img
        src="assets/profile.jpg" // Replace with actual image source
        alt="Profile"
        className="profile-img"
      />
      <div className="profile-details">
        <p>
          <strong>Name:</strong> Sandhya Madhuri
        </p>
        <p>
          <strong>Profile:</strong> Software Developer
        </p>
        <p>
          <strong>Email:</strong> sandhyamadhuri789@gmail.com
        </p>
        <p>
          <strong>Experience:</strong>2 years 4 months
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
