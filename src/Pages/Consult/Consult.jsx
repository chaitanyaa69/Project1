import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './consult.css';

const contentData = [
  {
    id: 1,
    title: 'Food Risk Management',
    points: [
      { id: 'a1', title: 'Risk Assessment & Analysis', detail: 'Details about Point 1' },
      { id: 'a2', title: 'Regulatory Compliance', detail: 'Details about Point 2' },
      { id: 'a3', title: 'HACCP Implementation', detail: 'Details about Point 3' },
      { id: 'a4', title: 'Crisis Management Planning', detail: 'Details about Point 4' },
      { id: 'a5', title: 'Supplier & Vendor Risk Management', detail: 'Details about Point 5' },
      { id: 'a6', title: 'Training & Education', detail: 'Details about Point 6' },
      { id: 'a7', title: 'Traceability Systems Implementation', detail: 'Details about Point 7' },
    ],
  },
  {
    id: 2,
    title: 'Food Regulatory Consulting Services',
    points: [
      { id: 'b1', title: 'Licenses, Permits & Certifications', detail: 'Details about Point 1' },
      { id: 'b2', title: 'Regulatory Compliance Assessment', detail: 'Details about Point 2' },
      { id: 'b3', title: 'Regulatory Strategy Development', detail: 'Details about Point 3' },
      { id: 'b4', title: 'Food Additive & Ingredient Approval', detail: 'Details about Point 4' },
      { id: 'b5', title: 'FSMA Compliance', detail: 'Details about Point 5' },
    ],
  },
  {
    id: 3,
    title: 'Food Labelling & Specifications',
    points: [
      { id: 'c1', title: 'Regulatory Compliance Review / Updates', detail: 'Details about Point 1' },
      { id: 'c2', title: 'Nutrition Fact Analysis', detail: 'Details about Point 2' },
      { id: 'c3', title: 'Allergen Management', detail: 'Details about Point 3' },
      { id: 'c4', title: 'Country Specific Labelling Requirement', detail: 'Details about Point 4' },
      { id: 'c5', title: 'Labelling Audits & Reviews', detail: 'Details about Point 5' },
      { id: 'c6', title: 'Training & Education', detail: 'Details about Point 6' },
    ],
  },
  {
    id: 4,
    title: 'Food Safety Gap Assessment',
    points: [
      { id: 'd1', title: 'Detailed Audit', detail: 'Details about Point 1' },
      { id: 'd2', title: 'Review Regulations & Standards', detail: 'Details about Point 2' },
      { id: 'd3', title: 'Conduct On-site Observations', detail: 'Details about Point 3' },
      { id: 'd4', title: 'Interview Stakeholders', detail: 'Details about Point 4' },
      { id: 'd5', title: 'Assess Documentation', detail: 'Details about Point 5' },
      { id: 'd6', title: 'Identify Gaps', detail: 'Details about Point 6' },
      { id: 'd7', title: 'Prioritize Risks', detail: 'Details about Point 7' },
      { id: 'd8', title: 'Develop Action Plan', detail: 'Details about Point 8' },
      { id: 'd9', title: 'Implement Improvements', detail: 'Details about Point 9' },
      { id: 'd10', title: 'Monitor & Review', detail: 'Details about Point 10' },
      { id: 'd11', title: 'Document & Reporting', detail: 'Details about Point 11' },
    ]
  },
  {
    id: 5,
    title: 'FSMS Readiness & Traceability',
    points: [
      { id: 'e1', title: 'Understanding FSMS Requirements', detail: 'Details about Point 1' },
      { id: 'e2', title: 'Assessment of Current Practices', detail: 'Details about Point 2' },
      { id: 'e3', title: 'Development FSMS-Compliant Food Safety Plans', detail: 'Details about Point 3' },
      { id: 'e4', title: 'Training & Education', detail: 'Details about Point 4' },
      { id: 'e5', title: 'Traceability & Systems Implementation', detail: 'Details about Point 5' },
      { id: 'e6', title: 'Documentations', detail: 'Details about Point 6' },
    ],
  },
  {
    id: 6,
    title: 'Food Safety Policy & Procedure Development',
    points: [
      { id: 'f1', title: 'Policy & Purpose', detail: 'Details about Point 1' },
      { id: 'f2', title: 'Define Scope', detail: 'Details about Point 2' },
      { id: 'f3', title: 'Regulatory Compliance', detail: 'Details about Point 3' },
      { id: 'f4', title: 'Food Safety Regulations', detail: 'Details about Point 4' },
      { id: 'f5', title: 'Risk Management Approach', detail: 'Details about Point 5' },
      { id: 'f6', title: 'Quality Assurance & Control', detail: 'Details about Point 6' },
      { id: 'f7', title: 'Documentation & Formats Control', detail: 'Details about Point 7' },
    ],
  },
  {
    id: 7,
    title: 'Food Safety Supplier Management',
    points: [
      { id: 'g1', title: 'Supplier Approval & Qualifications', detail: 'Details about Point 1' },
      { id: 'g2', title: 'Supplier Audits & Assessments', detail: 'Details about Point 2' },
      { id: 'g3', title: 'Supplier Contracts & Agreements', detail: 'Details about Point 3' },
      { id: 'g4', title: 'Supplier Monitoring & Performance Measurement', detail: 'Details about Point 4' },
      { id: 'g5', title: 'Supplier Training & Education', detail: 'Details about Point 5' },
      { id: 'g6', title: 'Supplier Risk Management', detail: 'Details about Point 6' },
      { id: 'g7', title: 'Supplier Traceability & Recall Procedures', detail: 'Details about Point 7' },
    ],
  },
  {
    id: 8,
    title: 'Food Safety Culture',
    points: [
      { id: 'h1', title: 'Leadership Commitment', detail: 'Details about Point 1' },
      { id: 'h2', title: 'Clear Communication', detail: 'Details about Point 2' },
      { id: 'h3', title: 'Employee Empowerment', detail: 'Details about Point 3' },
      { id: 'h4', title: 'Training & Education', detail: 'Details about Point 4' },
      { id: 'h5', title: 'Lead by Example', detail: 'Details about Point 5' },
      { id: 'h6', title: 'Recognition & Rewards', detail: 'Details about Point 6' },
      { id: 'h7', title: 'Accountability & Consequences', detail: 'Details about Point 7' },
      { id: 'h8', title: 'Regular Audits & Assessments', detail: 'Details about Point 8' },
      { id: 'h9', title: 'Feedback & Surveys', detail: 'Details about Point 9' },
    ],
  },
];

const Consult = () => {
  const [activeStep, setActiveStep] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    refs.current = refs.current.slice(0, contentData.length);
  }, []);

  const handleScroll = (index) => {
    refs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const Stepper = () => (
    <div className="stepper5">
      {contentData.map((item, index) => (
        <div
          key={item.id}
          className={`step5 ${index === activeStep ? 'active' : ''}`}
          onClick={() => handleScroll(index)}
        >
          {/* <div className="step-number">{index + 1}</div> */}
          <div className="step-title">{item.title}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="image-description-page">
      <Stepper />
      <div className="container5">
        {contentData.map((item, index) => (
          <ContentItem
            key={item.id}
            item={item}
            index={index}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            ref={(el) => (refs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

const ContentItem = React.forwardRef(({ item, index, setActiveStep }, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveStep(index);
    }
  }, [inView, index, setActiveStep]);

  const setRefs = (el) => {
    if (ref) ref(el);
    inViewRef(el);
  };

  return (
    <div
      className={`content-item ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
      ref={setRefs}>
      <div className="image-container">
        <div className="overlay"></div>
      </div>
      <div className="description-container">
        <h2>{item.title}</h2>
        <ul className="points-list">
          {item.points.map((point) => (
            <li key={point.id} className="point-item">
              {point.title}
              <div className="details">{point.detail}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Consult;
