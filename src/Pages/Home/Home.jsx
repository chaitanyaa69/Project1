import React from 'react'
import Auditing from '../../components/Auditing/Auditing'
import Title from '../../components/title/Title'
import Consulting from '../../components/Consulting/Consulting';
import FAQ from '../../components/faqs/FAQ'
import { CheckCircle, Error, DoneAll, Assessment, School, TrackChanges, LocalShipping, Verified, Build } from '@mui/icons-material';


const Home = () => {
    const titleName='Catering & Restaurant Services';
    const descInfo="We Provide The Best Consulting & Auditing Services";
    
const steps = [
    {
      title: 'Audit & Inspection',
      description: `Systematic evaluations of food handling operations, including facilities, equipment, and procedures, are performed regularly to pinpoint potential risks and verify conformity with stringent food safety standards.`,
      icon: <CheckCircle />
    },
    {
      title: 'Risk Assessments',
      description:
        'Evaluating the potential hazards linked to food handling techniques, ingredients, suppliers, and distribution networks to design and implement effective risk management strategies and ensure the safety of the food supply chain.',
      icon: <Error />
    },
    {
      title: 'Documentation Reviews',
      description: `Conducting thorough reviews and updates of food safety documentation, encompassing standard operating procedures (SOPs), training resources, and compliance records, to ensure accuracy, relevance, and effective knowledge sharing.`,
      icon: <DoneAll />
    },
    {
      title: 'Training & Education',
      description: `Equipping employees with the knowledge and skills necessary to handle food safely, through comprehensive training and education programs that cover best practices in food handling, personal hygiene, sanitation protocols, and compliance with relevant regulations and standards.`,
      icon: <School />
    },
    {
      title: 'HACCP Implementation',
      description: `Putting in place a systematic approach to food safety, using Hazard Analysis and Critical Control Points (HACCP) principles to pinpoint and manage potential hazards at crucial stages in the food production process, ensuring effective risk mitigation and control.`,
      icon: <Assessment />
    },
    {
      title: 'Traceability & Recall Procedure',
      description: `Developing and implementing a traceability system to track the origin and movement of food products, and establishing a recall protocol to swiftly identify and remove potentially harmful or contaminated products from the market, ensuring prompt and effective action in the event of food safety concerns.`,
      icon: <TrackChanges />
    },
    {
      title: 'Supplier & Vendor Evaluation',
      description: `Assessing the food safety standards and practices of suppliers and vendors to guarantee the reliability, quality, and safety of ingredients and products used in food manufacturing, ensuring that only trustworthy and compliant sources are utilized.`,
      icon: <LocalShipping />
    },
    {
      title: 'Compliance Monitoring',
      description: `Conducting ongoing surveillance and evaluations to ensure adherence to food safety laws, industry benchmarks, and organizational policies, verifying conformity through systematic checks and assessments to maintain the highest level of compliance and risk management.`,
      icon: <Verified />
    },
    {
      title: 'Continuous Improvement',
      description: `Proactively seeking opportunities to optimize food safety processes and protocols, and executing targeted improvements to strengthen the overall food safety system, fostering a culture of continuous learning and advancement.`,
      icon: <Build />
    },
  ];
  
  return (
    <>
        <Title title={titleName} description={descInfo}/>
        <Consulting />
        <Auditing steps={steps}/>
        
    </>
  )
}

export default Home