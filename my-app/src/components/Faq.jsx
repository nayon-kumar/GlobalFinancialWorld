import React from 'react';

const Faq = ({
  title = "Frequently Asked Questions",
  subtitle = "Frequently Asked Questions",
  faqs = [], // Pass array of FAQs [{question: "", answer: ""}]
  containerPadding = "px-6 md:px-16 lg:px-20 py-8",
}) => {
  return (
    <div className={containerPadding}>
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000000]">{title}</h2>
        <p className='py-5'>{subtitle}</p>
      </div>

      {/* FAQ Items */}
      {faqs.map((item, index) => (
        <div
          key={index}
          className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2"
        >
          <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
          <div className="collapse-title font-semibold">{item.question}</div>
          <div className="collapse-content text-sm">
            {item.answer.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
