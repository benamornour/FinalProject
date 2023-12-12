import React, { useState } from 'react';
import './ProfilePage.css';

const InfoBox = ({ title, info }) => {
  return (
    <div className="info-box">
      <h3>{title}</h3>
      <div className="info-content">
        {info.map((item, index) => (
          <div key={index} className="info-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('studentId');
  const [showPassword, setShowPassword] = useState(false);

  const sections = {
    studentId: ['Full Name', 'ID'],
    personalInfo: ['Parent 1', 'Parent 2', 'Birth Date', 'Email Address'],
    accountSignIn: ['Username', 'Password'],
  };

  const sectionLabels = {
    studentId: 'Student ID',
    personalInfo: 'Personal Information',
    accountSignIn: 'Account Sign In',
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setShowPassword(false);
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="profile-page">
      <div className="sidebar">
        <ul>
          <li onClick={() => handleSectionClick('studentId')}>{sectionLabels['studentId']}</li>
          <li onClick={() => handleSectionClick('personalInfo')}>{sectionLabels['personalInfo']}</li>
          <li onClick={() => handleSectionClick('accountSignIn')}>{sectionLabels['accountSignIn']}</li>
        </ul>
      </div>
      <div className="content">
        <InfoBox title={sectionLabels[activeSection]} info={sections[activeSection]} />
        {activeSection === 'accountSignIn' && (
          <div>
            {showPassword && <p>Password: ********</p>}
            <button onClick={handlePasswordToggle}>
              {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
