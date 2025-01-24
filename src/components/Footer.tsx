import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="../src/assets/captivateLogo.svg" alt="captivate" />
        </div>

        <div className="footer-row">
          <div className="footer-col">
            <p>LANDING PAGES</p>
            <ul>
              <li>
                <a href="#">Landing page V1</a>
              </li>
              <li>
                <a href="#">Landing page V2</a>
              </li>
              <li>
                <a href="#">Landing page V3</a>
              </li>
              <li>
                <a href="#">Landing page V4</a>
              </li>
              <li>
                <a href="#">Landing page V5</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <p>UTILITY PAGES</p>
            <ul>
              <li>
                <a href="#">Log in</a>
              </li>
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Password</a>
              </li>
              <li>
                <a href="#">404</a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="social-links">
          <div className="social-col">
            <a href="#">
              <img src="../src/assets/socialIconFacebook.svg" alt="facebook" />
            </a>
            <a href="#">
              <img src="../src/assets/socialIconTwitter.svg" alt="twitter" />
            </a>
            <a href="#">
              <img
                src="../src/assets/socialIconInstagram.png"
                alt="instagram"
              />
            </a>
            <a href="#">
              <img src="../src/assets/socialIconLinkedIn.svg" alt="linkedin" />
            </a>
          </div>
          <div className="social-col">
            <p>&#169; 2025. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
