import "../styles/newsletter.css";
import React from "react";

export default function Newsletter() {
  const [email, setEmail] = React.useState("");

  function addEmail(formData) {
    const newEmail = formData.get("email");
    setEmail(newEmail);
  }

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
            <form action={addEmail} className="newsletter-email-form">
              <input
                type="text"
                placeholder="Email address"
                aria-label="Add email"
                name="email"
              />
              <button>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
