import React from 'react';
import './EOIButton.css'; // Importing the CSS file

const EOIButton = () => {
  return (
    <div className="buttonContainer">
      <a
        href="https://docassemble.flinders.edu.au"
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
