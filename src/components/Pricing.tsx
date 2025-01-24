import "../styles/pricing.css";

export default function Pricing() {
  return (
    <main>
      <section className="pricing-section">
        <div className="pricing-header">
          <h2 className="pricing-title">Pricing</h2>
          <p className="pricing-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor in
            laoreet justo lectus a eget vitae. Tellus id pretium.
          </p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card inactive">
            <h2 className="pricing-plan-title">Started</h2>

            <div className="pricing-price-container">
              <p className="pricing-price">$24</p>
              <span className="pricing-period">/Month</span>
            </div>

            <p className="pricing-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              orci penatibus sed donec consequat.
            </p>

            <div className="pricing-included-container">
              <p className="pricing-included-title">WHAT's Included</p>
              <ul className="pricing-included-lists">
                <li>
                  <img src={"/icons/checkmark.svg"} alt="checkmark" />
                  Lorem ipsum dolor sit amet consectetur
                </li>
                <li>
                  <img src={"/icons/checkmark.svg"} alt="checkmark" />
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <img src={"/icons/checkmark.svg"} alt="checkmark" />
                  Lorem ipsum dolor sit amet consectetur
                </li>
                <li>
                  <img src={"/icons/checkmark.svg"} alt="checkmark" />
                  Lorem ipsum dolor sit
                </li>
              </ul>
            </div>

            <button className="pricing-button">
              <span>Get started</span>
            </button>
          </div>

          <div className="pricing-card active">
            <h2 className="pricing-plan-title">Business</h2>

            <div className="pricing-price-container">
              <p className="pricing-price">$72</p>
              <span className="pricing-period">/Month</span>
            </div>

            <p className="pricing-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              orci penatibus sed donec consequat.
            </p>

            <div className="pricing-included-container">
              <p className="pricing-included-title">WHAT's Included</p>
              <ul className="pricing-included-lists">
                <li>
                  <img src={"/icons/checkmark.svg"} alt="checkmark" />
                  Lorem ipsum dolor sit amet consectetur
                </li>
                <li>
                  <img src={"/icons/checkmark.svg"} alt="checkmark" />
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <img src={"/icons/checkmark.svg"} alt="checkmark" />
                  Lorem ipsum dolor sit amet consectetur
                </li>
                <li>
                  <img src={"/icons/checkmark.svg"} alt="checkmark" />
                  Lorem ipsum dolor sit
                </li>
              </ul>
            </div>

            <button className="pricing-button">
              <span>Get started</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
