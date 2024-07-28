import React, { useState } from 'react';
import './faq.css'; // Assuming you have a CSS file for styling

const FAQ = ({ faqList }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {faqList.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div 
                        className={`faq-question ${openIndex === index ? 'open' : ''}`} 
                        onClick={() => toggleFAQ(index)}
                    >
                        {faq.question}
                    </div>
                    <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
