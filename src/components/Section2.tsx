import "../styles/section2.css";

export default function Section2() {
  return (
    <main>
      <section className="section2-section">
        <div className="section2-image-content">
          <img
            className="section2-image"
            src="./public/images/coworkingSpace.png"
            alt="the perfect presentation"
          />
        </div>
        <div className="section2-content">
          <h2 className="section2-title">All-in-One Platform</h2>
          <p className="section2-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            aliquam lectus duis feugiat maecenas penatibus.
          </p>
          <ul className="section2-lists">
            <li>
              <img src="./public/icons/checkmark.svg" alt="checkmark" />
              Lorem ipsum dolor sit amet
            </li>
            <li>
              <img src="./public/icons/checkmark.svg" alt="checkmark" />
              Lorem ipsum dolor
            </li>
            <li>
              <img src="./public/icons/checkmark.svg" alt="checkmark" />
              Lorem ipsum dolor sit
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
