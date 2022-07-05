import "./about.css";
import desktop from "./../../assets/about/desktop.png";

export const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <h2>Quién soy?</h2>
      </div>
      <div className="about__body">
        <div className="about__body-text">
          <p>
            Soy una persona que le apasiona el desarrollo web y siempre esta en
            busquedad de nuevos retos y superarse.
          </p>
          <p className="frase">
            “ La fortuna favorece a los valientes ”
            <br />
            <span>-Virgilio-</span>
          </p>
        </div>
        <img className="img" src={desktop} />
      </div>
    </div>
  );
};
