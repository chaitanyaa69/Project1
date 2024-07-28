import React from 'react';
import './aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Header1 />
      <Mission />
      <Team />
      <Timeline />
    </div>
  );
};

const Header1 = () => (
  <div className="header1">
    <h1>About Us</h1>
    </div>
);

const Mission = () => (
  <section className="mission">
    <h2>Our Mission</h2>
    <p>
      We are seasoned and passionate Food Technologists with Background and Achievements in the Best of Global Food Organizations, striving to implement World Class Systems and Processes in the areas of Food Quality, Food Safety and Food Regulatory in Food Sector, Food Retail and Quick Service Restaurants.
    </p>
    <br />
    <p>
      We understand our customer's challenges and can join hands with Food and Beverage industry, QSR, Food & Grocery Retail and online Retail for quality, food safety and regulatory solutions.
    </p>
    <br />
    <p>We believe in providing simple, practical & implementable solutions to your challenges.</p>
  </section>
);

const Team = () => (
  <section className="team">
    <h2>Meet Our Team</h2>
    <div className="team-members">
      <TeamMember
        name="ABC"
        position="XYZ"
        imageUrl="https://via.placeholder.com/150"
        bio="ABCDEFGFHDLINVLD."
      />
      <TeamMember
        name="ABC"
        position="XYZ"
        imageUrl="https://via.placeholder.com/150"
        bio="ABCDEFGHIJKL"
      />
      
    </div>
  </section>
);

const TeamMember = ({ name, position, imageUrl, bio }) => (
  <div className="team-member">
    <img src={imageUrl} alt={name} />
    <h3>{name}</h3>
    <p className="position">{position}</p>
    <p className="bio">{bio}</p>
  </div>
);

const Timeline = () => (
  <section className="timeline">
    <h2>Our Journey</h2>
    <ul>
      <TimelineEvent
        year="2020"
        title="Company Founded"
        description="Our journey began with a small team of passionate individuals."
      />
      <TimelineEvent
        year="2021"
        title="First Product Launched"
        description="We launched our first product and received overwhelming positive feedback."
      />
      <TimelineEvent
        year="2022"
        title="Expansion"
        description="We expanded our team and moved into a larger office space."
      />
      <TimelineEvent
        year="2023"
        title="Global Reach"
        description="We extended our services to international markets."
      />
    </ul>
  </section>
);

const TimelineEvent = ({ year, title, description }) => (
  <li className="timeline-event">
    <span className="year">{year}</span>
    <div className="content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </li>
);

export default AboutUs;
