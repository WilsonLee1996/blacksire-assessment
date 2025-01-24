import "../styles/section1.css";

export default function Section1() {
  return (
    <main>
      <section className="section1-section">
        <div className="section1-content">
          <h2 className="section1-title">The Perfect Presentation</h2>
          <p className="section1-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            aliquam lectus duis feugiat maecenas penatibus.
          </p>
          <ul className="section1-lists">
            <li>
              <img src="../src/assets/checkmark.svg" alt="checkmark" />
              Lorem ipsum dolor sit amet
            </li>
            <li>
              <img src="../src/assets/checkmark.svg" alt="checkmark" />
              Lorem ipsum dolor
            </li>
            <li>
              <img src="../src/assets/checkmark.svg" alt="checkmark" />
              Lorem ipsum dolor sit
            </li>
          </ul>
        </div>

        <div className="section1-image-content">
          <img
            className="section1-image"
            src="../src/assets/images/womanInCafe.png"
            alt="the perfect presentation"
          />
        </div>
      </section>
    </main>
  );
}
