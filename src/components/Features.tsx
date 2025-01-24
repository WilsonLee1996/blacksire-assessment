import "../styles/features.css";

export default function Features() {
  return (
    <main>
      <section className="features-section">
        <div className="features-header">
          <h2 className="features-title">Features</h2>
          <p className="features-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor in
            laoreet justo lectus a eget vitae. Tellus id pretium.
          </p>
        </div>

        <div className="features-cards">
          <div className="features-card">
            <div className="features-card-allinone">
              <img
                src="./public/images/interfaceAllInOne.png"
                alt="Interface all in one"
              />
              <div className="features-card-title-container">
                <p className="features-card-title">ALL-IN-ONE</p>
              </div>

              <h3 className="features-card-text">Everything you need</h3>
              <p className="features-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="features-card-design">
              <div style={{ marginBottom: "20px" }}>
                <div className="features-card-title-container">
                  <p className="features-card-title">Design</p>
                </div>
                <h3 className="features-card-text">Branding</h3>
                <p className="features-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <img
                src="./public/images/interfaceBranding.png"
                alt="Interface branding"
              />
            </div>
          </div>

          <div className="features-card-templates">
            <div className="features-card-template">
              <div className="features-card-title-container">
                <p className="features-card-title">TEMPLATES</p>
              </div>

              <h3 className="features-card-text">
                Create a beautiful presentation in minutes
              </h3>
              <p className="features-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                purus eu, non velit ut nisl. Arcu orci id aliquet elementum in.
              </p>
            </div>

            <div className="features-image-content">
              <img
                src="./public/images/interfaceGrid.png"
                alt="Interface all in one"
              />
            </div>
          </div>

          <div className="features-card">
            <div className="features-card-livestream">
              <img
                src="./public/images/interfaceLivestream.png"
                alt="Interface all in one"
              />
              <div className="features-card-title-container">
                <p className="features-card-title">LIVESTREAM</p>
              </div>

              <h3 className="features-card-text">Broadcast to the world</h3>
              <p className="features-card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="features-card-analytics">
              <div style={{ marginBottom: "20px" }}>
                <div className="features-card-title-container">
                  <p className="features-card-title">Analytics</p>
                </div>

                <h3 className="features-card-text">Track your performance</h3>
                <p className="features-card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <img
                src="./public/images/interfaceAnalytics.png"
                alt="Interface branding"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
