import React from 'react';
import './audit.css';
import auditing from '../../static/audting.jpg'
import risk from '../../static/risk.jpg'
import document from '../../static/document.jpg'
import traning from '../../static/training.jpg'
import HACCP from '../../static/HACCCP.jpg'
import tracability from '../../static/tracability.jpg'
import supplier from '../../static/supplier.jpg'
import complaince from '../../static/compliance.jpg'
import improvement from '../../static/improvement.jpg'
import trouble from '../../static/trouble.jpg'

const plotContents = [
    {
        title: 'Audit & Inspection',
        content: `Systematic evaluations of food handling operations, including facilities, equipment, and procedures, are performed regularly to pinpoint potential risks and verify conformity with stringent food safety standards.`,
        image: auditing
    },
    {
        title: 'Risk Assessments',
        content:'Evaluating the potential hazards linked to food handling techniques, ingredients, suppliers, and distribution networks to design and implement effective risk management strategies and ensure the safety of the food supply chain.',
        image: risk
    },
    {
        title: 'Documentation Reviews',
        content: `Conducting thorough reviews and updates of food safety documentation, encompassing standard operating procedures (SOPs), training resources, and compliance records, to ensure accuracy, relevance, and effective knowledge sharing.`,
        image: document
        
    },
    {
        title: 'Training & Education',
        content: `Equipping employees with the knowledge and skills necessary to handle food safely, through comprehensive training and education programs that cover best practices in food handling, personal hygiene, sanitation protocols, and compliance with relevant regulations and standards.`,
        image: traning
        
    },
    {
        title: 'HACCP Implementation',
        content: `Putting in place a systematic approach to food safety, using Hazard Analysis and Critical Control Points (HACCP) principles to pinpoint and manage potential hazards at crucial stages in the food production process, ensuring effective risk mitigation and control.`,
        image: HACCP

    },
    {
        title: 'Traceability & Recall Procedure',
        content: `Developing and implementing a traceability system to track the origin and movement of food products, and establishing a recall protocol to swiftly identify and remove potentially harmful or contaminated products from the market, ensuring prompt and effective action in the event of food safety concerns.`,
        image: tracability
        
    },
    {
        title: 'Supplier & Vendor Evaluation',
        content: `Assessing the food safety standards and practices of suppliers and vendors to guarantee the reliability, quality, and safety of ingredients and products used in food manufacturing, ensuring that only trustworthy and compliant sources are utilized.`,
        image: supplier

    },
    {
        title: 'Compliance Monitoring',
        content: `Conducting ongoing surveillance and evaluations to ensure adherence to food safety laws, industry benchmarks, and organizational policies, verifying conformity through systematic checks and assessments to maintain the highest level of compliance and risk management.`,
         image: complaince
    },
    {
        title: 'Continuous Improvement',
        content: `Proactively seeking opportunities to optimize food safety processes and protocols, and executing targeted improvements to strengthen the overall food safety system, fostering a culture of continuous learning and advancement.`,
         image: improvement
    },
    {
      title: 'Troubleshooting',
      content: `Developing plans and protocols for responding to food safety emergencies,including contamination outbreaks, product recalls, and customer complaints.`,
       image: trouble
  },
];

function Plot({ title, content, number, image }) {
  const isOdd = number % 2 !== 0;
  return (
    <>
    
    <div className={`plot ${isOdd ? 'odd' : 'even'}`} style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay"></div>
      <div className="number">{number}</div>
      <div className="content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
    </>
  );
}

function Audit() {
  return (
    <div className="App">
      <div className="header1">
        <h1>Auditing Services</h1>
        <h2>"Ensuring Safe Food, Every Step of the Way"</h2>
        <p>"Protecting Your Plate with Rigorous Audits and Inspections"</p>
      </div>
      <div> 
        <div className="header2">
          <h1>Food Safety Audits</h1>
          <p>Our team of experts conducts thorough audits and inspections to ensure the safety of food products
            from farm to fork. We assess every step of the supply chain, from raw materials to finished
            products, to guarantee that food is handled, processed, and stored safely.</p>
        </div>
      {plotContents.map((plot, index) => (
        <Plot key={index} number={index + 1} title={plot.title} content={plot.content} image={plot.image} />
      ))}
      </div>
      
    </div>
  );
}

export default Audit;
