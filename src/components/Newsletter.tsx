import "../styles/newsletter.css";
// import React from "react";
import { useActionState } from "react";

export default function Newsletter() {

  function signup(prevState: FormData, formData: FormData) {
    const email = formData.get("email");
    console.log(`Added: "${email}"`);
  }

  const [message, signupAction] = useActionState(signup, null);

  console.log(message);

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
            <form action={signupAction} className="newsletter-email-form">
              <input
                type="text"
                placeholder="Email address"
                aria-label="Add email"
                name="email"
              />
              <button>Sign up</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
