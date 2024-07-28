import React from 'react';
import './title.css';
import header from './title.jpg';

const Title = ({ title, description }) => {
  const divStyle = {
    backgroundImage: `url(${header})`,
  };
  return (
    <div className="background-image" style={divStyle}>
      <div className="overlay"></div>
      <div className="text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Title;
