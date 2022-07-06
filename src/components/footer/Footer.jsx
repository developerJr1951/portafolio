import "./footer.css";
import instagram from "./../../assets/social/instagram.png";
import gmail from "./../../assets/social/gmail.png";
import twitter from "./../../assets/social/twitter.png";
import linkedin from "./../../assets/social/linkedin.png";

export const Footer = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <h1 className="header__title">Contactame</h1>
        <div className="header__media">
          <div className="icon">
            <img src={linkedin} />
          </div>
          <div className="icon">
            <img src={twitter} />
          </div>
          <div className="icon">
            <img src={instagram} />
          </div>
        </div>
      </div>

      <div className="contact__body">
        <div className="social">
          <h3>Social</h3>
          {/* <p></p> */}
          <ul>
            <li>Instragram</li>
            <li>Twiter</li>
            <li>Linkendin</li>
          </ul>
        </div>
        <div className="otros">
          <h3>Otros</h3>
          <ul>
            <li>Brayanc1951@gmail.com</li>
            <li>+51 948867980</li>
          </ul>
        </div>
        <div className="copyright">
          <h2>Copyright © {new Date().getFullYear()}</h2>
        </div>
      </div>

      {/* <div className="contact__footer">
        <h2>Copyright © 2022</h2>
      </div> */}
    </div>
  );
};
