import "./hobies.css";
import manga from "./../../assets/hobbies/manga.jpg";
import viajes from "./../../assets/hobbies/viajes.jpg";
import pluma from "./../../assets/hobbies/pluma.png";
import music from "./../../assets/hobbies/music.png";

const hobbiesCards = [
  {
    title: "Musica",
    src: music,
    clas: "overlayL",
    description: {
      title: "Top 5 Canciones ",
      fav: [
        { text: "Måneskin - i wanna be your slave" },
        { text: "Eminem - lose yourself " },
        { text: "AnnenMayKantereit & Giant Rooks - Tom's Diner" },
        { text: "El Cuarteto de Nos - Invierno del 92" },
        { text: "MARINA - Are You Satisfied?" },
      ],
    },
    style: {
      background: "#39065A",
    },
  },

  {
    title: "viajar",
    src: viajes,
    clas: "overlayM",
    description: {
      title: "Top 5 Lugares que deseo viajar *-*",
      fav: [
        { text: "Machu Picchu" },
        { text: "La Alhambra, Granada  " },
        { text: "Duomo de Milán " },
        { text: "Catedral de Notre Dame " },
        { text: "Lago Moraine " },
      ],
    },
    style: {
      background: "#3A3845",
    },
  },
  {
    title: "Manga",
    src: manga,
    clas: "overlayR",
    description: {
      title: "Top 5 mangas/animes",
      fav: [
        { text: "Mushoku tensei isekai ittara honki dasu" },
        { text: "Berserker" },
        { text: "Fullmetal Alchemist: Brotherhood" },
        { text: "Fumetsu no anata" },
        { text: "JoJo's Bizarre Adventure" },
      ],
    },
    style: {
      background: "#39065A",
    },
  },
];

export const Hobies = () => {
  return (
    <div className="hobies">
      <h2 className="hobies__title">¿Cuales son mis Hobbies? </h2>

      <div className="hobies__cards">
        {hobbiesCards.map(({ title, src, style, clas, description }) => (
          <div className="hobies__card" key={title} style={{ ...style }}>
            <div className="card-img">
              <img src={src} />
              <div className={`over ${clas}`}>
                <div className="text">
                  <p>{description.title}</p>
                  <ul>
                    {description.fav.map((val, i) => (
                      <li key={i}>{val.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-title">
              <h3>{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
