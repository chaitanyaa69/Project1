import React from 'react';
import './auditing.css';

const Auditing = ({ steps }) => {
  return (
    <section className="we-offer-area text-center bg-gray">
      <div className="row">
        <div className="col-md-12">
          <div className="site-heading text-center">
            <h2>
              Steps We Do In<span> Auditing</span>
            </h2>
            <h4>Lorem Ipsum is simply dummy text</h4>
          </div>
        </div>
        <div className="row our-offer-items">
          {steps.slice(0, 4).map((item, index) => (
            <div className="col-md-12 equal-height" key={index}>
              <div className="item">
                <div className="number">{index + 1}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {steps.length > 4 && (
          <div className="more-steps text-center">
            <p>To see more steps, click the button</p>
            <button className="btn btn-primary"><a href="/consult">Show More</a></button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Auditing;
