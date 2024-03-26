import React from 'react';
import './EOIButton.css'; // Importing the CSS file

const EOIButton = () => {
  return (
    <div className="buttonContainer">
      <a
        href="https://docassemble2.flinders.edu.au/interview?i=docassemble.2024ALAAConference:data/questions/eoi.yml"
        className="interestButton"
        target='_blank'
        rel='noopener noreferrer'
      >
        Expression of Interest
      </a>
    </div>
  );
};

export default EOIButton;
