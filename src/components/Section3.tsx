import "../styles/section3.css";

export default function Section3() {
  return (
    <main>
      <section className="presentation-section">
        
        <div className="presentation-container">
          <h1 className="presentation-title">Beautiful Presentations</h1>
          <p className="presentation-description">
            Captivate helps you create beautiful, branded presentation decks and
            experiences to engage your audience and potential customers.
          </p>
          <button className="presentation-button">
            <span>Button text</span>
          </button>
        </div>

        <div className="presentation-image-content">
          <img
            src={"/images/interfaceHalf.png"}
            alt="Interface half"
          />
        </div>
      </section>
    </main>
  );
}
