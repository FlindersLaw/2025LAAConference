import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './EOIButton.css'; // Importing the CSS file

export const EOIButton = () => {
  return (
    <div className="buttonContainer">
      <a
        /* href="https://forms.office.com/Pages/ResponsePage.aspx?id=u30Vcr3o3ECNAD8IwjSsR5d-9ebgQuFCqx0MmfvIP1hUMjYzMFRUOFkyWU1OWDhTWDVXMVg0S0FTMC4u" */
        href='https://docassemble2.flinders.edu.au/interview?i=docassemble.2024ALAAConference:data/questions/eoi.yml'
        className="interestButton"
        target='_blank'
        rel='noopener noreferrer'
      >
        Expression of Interest
      </a>
    </div>
  );
};

// URL to internal registration URL (not payment gateway)
export function RegisterButton(props) {
  // console.log("registerURL:", props.registerURL);
  // console.log("buttonText:", props.buttonText);
  // console.log("props:", props);
  // console.log("theURL:", theURL);
  let theURL = useBaseUrl(props.registerURL);
  return (
    <div className='buttonContainer'>
      <a
        href={theURL}
        className='registerButton'
      >
        {props.buttonText}
      </a>
    </div>
  )
}

export default EOIButton;
