import "../styles/newsletter.css";
import React from "react";

export default function Newsletter() {
  const [email, setEmail] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
  };

  return (
    <main>
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Get started today</h2>
            <p className="newsletter-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
              netus enim pellentesque pharetra semper at faucibus neque ac
              suspendisse.
            </p>
          </div>

          <div className="newsletter-email-content">
            <form onSubmit={handleSubmit} className="newsletter-email-form">
              <input
                type="text"
                placeholder="Email address"
                aria-label="Add email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button>Sign up</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
