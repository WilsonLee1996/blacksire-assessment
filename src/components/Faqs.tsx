import "../styles/faq.css";
import React from "react";

export default function FAQ() {
  const [isActiveIndex, setIsActiveIndex] = React.useState<number | null>(null);

  function toggleMenu(index: number) {
    setIsActiveIndex(index === isActiveIndex ? null : index);
  }

  const faqs = [
    {
      question: "Is Captivate easy to use for a beginner?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt.",
    },
    {
      question: "How is it different than PowerPoint?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt.",
    },
    {
      question: "How much does it cost to use Captivate?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt.",
    },
    {
      question: "Is Captivate right for my team?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt.",
    },
    {
      question: "How do I add members to our plan?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt.",
    },
    {
      question: "How do I contact support?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt.",
    },
  ];

  const faqsList = faqs.map((faq, index) => (
    <li key={index}>
      <div className="faqs-question">
        <p>{faq.question}</p>

        <button onClick={() => toggleMenu(index)}>
          <img
            src="../src/assets/plusIcon.svg"
            alt="active"
            className={`toggle-button ${
              isActiveIndex === index ? "active" : ""
            }`}
          />
        </button>
      </div>

      {isActiveIndex === index && (
        <div className="faq-answer">
          <p>{faqs[isActiveIndex].answer}</p>
        </div>
      )}
    </li>
  ));

  return (
    <main>
      <section className="faqs-section">
        <h2 className="faqs-title">Frequent Questions</h2>
        <ul className="faqs-list">{faqsList}</ul>
      </section>
    </main>
  );
}
