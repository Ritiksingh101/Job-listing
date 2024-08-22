import React, { useState } from 'react';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  const generalQuestions = [
    { question: "What services do job agencies offer?", answer: "A job agency, also known as an employment agency or staffing agency, is a company that helps match job seekers with the employers job agencies specialize." },
    { question: "How do job agencies match job seekers with employers?", answer: "Agencies use a variety of methods to match job seekers with employers." },
    { question: "Are job agencies regulated by any government agency?", answer: "Yes, job agencies are regulated by various government agencies." },
    { question: "What are some of the best job agencies?", answer: "There are many reputable job agencies, such as Agency A, Agency B, and Agency C." },
    { question: "Can I find permanent job by using a job agency?", answer: "Yes, many job agencies offer services to help you find permanent employment." },
    { question: "Do job agencies only provide jobs for short-term?", answer: "No, job agencies provide both short-term and long-term job opportunities." },
  ];

  const paymentQuestions = [
    { question: "Do easy to use Interface for job seekers and employers?", answer: "A job agency, also known as an employment agency or staffing agency, is a company that helps match job seekers with the employers job agencies specialize." },
    { question: "Do multiple payment options?", answer: "Agencies offer multiple payment options for convenience." },
    { question: "Does Report and Analytic for financial monitoring?", answer: "Yes, agencies provide detailed reports and analytics for financial monitoring." },
    { question: "Automated payment reminders and follow-ups?", answer: "Automated payment reminders and follow-ups are available for efficient management." },
  ];

  return (
    <div className="p-16 md:p-16">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* General Questions */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-4">General Questions</h2>
          {generalQuestions.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left text-teal-500 font-semibold border-b pb-2"
              >
                {item.question}
                <span className="float-right">
                  {selectedQuestion === index ? '−' : '+'}
                </span>
              </button>
              {selectedQuestion === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Payment Questions */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-4">Payment Questions</h2>
          {paymentQuestions.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleQuestion(index + generalQuestions.length)}
                className="w-full text-left text-teal-500 font-semibold border-b pb-2"
              >
                {item.question}
                <span className="float-right">
                  {selectedQuestion === index + generalQuestions.length ? '−' : '+'}
                </span>
              </button>
              {selectedQuestion === index + generalQuestions.length && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
