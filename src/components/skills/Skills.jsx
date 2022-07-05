import "./skills.css";
import escucha from "./../../assets/skills/escucha.png";
import paciencia from "./../../assets/skills/paciencia.png";
import teamwork from "./../../assets/skills/teamwork.png";
import responsabilidad from "./../../assets/skills/responsabilidad.png";
import pensamiento from "./../../assets/skills/pensamiento.png";

const skillsCards = [
  {
    title: "Paciencia",
    src: paciencia,
    description: "",
  },
  {
    title: "Team work",
    src: teamwork,
    description: "",
  },
  {
    title: "Responsabilidad",
    src: responsabilidad,
    description: "",
  },
  {
    title: "Escucha",
    src: escucha,
    description: "",
  },
  {
    title: "Pensamiento Critico",
    src: pensamiento,
    description: "",
  },
];

export const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills__title">¿Que habilidades tengo?</h2>
      <div className="skills__cards">
        {skillsCards.map(({ title, src }) => (
          <div className="card" key={title}>
            <div className="card_img">
              <img src={src} alt="" />
            </div>
            <div className="card_button">
              <h3>{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
