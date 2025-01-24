import "../styles/quote.css";

export default function Quote() {
  return (
    <main>
      <section className="quote-section">
        <div>
          <img src="./public/icons/logoAperture.svg" alt="Aperture Mini Logo" />
          <p className="quote">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            mauris, libero tellus nec tortor libero arcu, sapien. Venenatis sit
            morbi ac amet amet.”
          </p>
          <p className="quote-name">Mikayla Smith, Marketing Director</p>
        </div>
      </section>
    </main>
  );
}
