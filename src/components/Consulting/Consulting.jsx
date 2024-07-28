import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers,faHandshake, faFileAlt,faExclamationTriangle,faGavel,faTag,faSearch,faCogs } from '@fortawesome/free-solid-svg-icons';
import './consulting.css';

const logosData = [
  { 
    id: 1, 
    title: 'Food Risk Management', 
    content: 'Identifying, assessing, and mitigating risks to ensure food safety throughout the supply chain.', 
    icon: faExclamationTriangle 
  },
  { 
    id: 2, 
    title: 'Food Regulatory Consulting Services', 
    content: 'Providing expert guidance on compliance with food safety regulations and standards.',  
    icon: faGavel 
  },
  { 
    id: 3, 
    title: 'Food Labelling & Specifications', 
    content: 'Ensuring accuracy and compliance in food product labeling and specifications.', 
    icon: faTag 
  },
  { 
    id: 4, 
    title: 'Food Safety Gap Assessment', 
    content: 'Evaluating current food safety practices to identify and address gaps.',  
    icon: faSearch 
  },
  { 
    id: 5, 
    title: 'FSMS Readiness & Traceability', 
    content: 'Preparing and implementing food safety management systems and traceability protocols.',  
    icon: faCogs 
  },
  { 
    id: 6, 
    title: 'Food Safety Policy & Procedure Development', 
    content: 'Creating and refining policies and procedures to ensure food safety compliance.', 
    icon: faFileAlt 
  },
  { 
    id: 7, 
    title: 'Food Safety Supplier Management', 
    content: 'Managing and monitoring supplier practices to maintain food safety standards.', 
    icon: faHandshake 
  },
  { 
    id: 8, 
    title: 'Food Safety Culture', 
    content: 'Promoting a culture of food safety through leadership, training, and accountability.', 
    icon: faUsers 
  },
  
  ];

const Consulting = () => {
  return (
    <div>
      
      <section className="logos-page">
        <div className="container1">
          <h2>Our Consulting Services</h2>
          <div className="logos-list">
            {logosData.map((logo) => (
              <div key={logo.id} className="logo-item">
                <div className="logo-icon">
                  <FontAwesomeIcon icon={logo.icon} size="3x" />
                </div>
                <div className="logo-description">
                  <h3>{logo.title}</h3>
                  <p>{logo.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Consulting;