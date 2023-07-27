// Importiere die 'NavLink'-Komponente aus dem 'react-router-dom'-Modul
import { NavLink } from "react-router-dom";

// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import Header from "../components/Header";

// Importiere die Bilddateien für die Kategorien 'bigStuff', 'middleStuff' und 'smallStuff'
import bigStuff from "../assets/bigstuff.avif";
import middleStuff from "../assets/middlestuff.avif";
import smallStuff from "../assets/smallstuff.avif";

// Importiere die CSS-Datei für das Styling der Komponente
import "./Home.css";

// Definiere die React-Komponente 'Home'
const Home = () => {
  return (
    <main>
      {/* Container für den Header und den Haupttitel */}
      <section className="furniture-home">
        {/* Header-Komponente anzeigen */}
        <Header />
        {/* Container für den Haupttitel */}
        <article className="furniture-header">
          <h1>
            <span>M</span>Y FURNITURE
          </h1>
        </article>
      </section>
      <h2>Categories</h2>
      {/* Container für die Kategorie-Links */}
      <section className="furniture-link">
        {/* Link zur 'big-stuff'-Seite mit Kategorie 'BIG STUFF' */}
        <NavLink className="home-link" to="/big-stuff">
          <article className="home-stuff">
            <img src={bigStuff} alt="big-stuff" />
            <h6>BIG STUFF</h6>
          </article>
        </NavLink>

        {/* Link zur 'middle-stuff'-Seite mit Kategorie 'NOT SO BIG STUFF' */}
        <NavLink className="home-link" to="/middle-stuff">
          <article className="home-stuff">
            <img src={middleStuff} alt="middle-stuff" />
            <h6>NOT SO BIG STUFF</h6>
          </article>
        </NavLink>

        {/* Link zur 'small-stuff'-Seite mit Kategorie 'SMALL STUFF' */}
        <NavLink className="home-link" to="/small-stuff">
          <article className="home-stuff">
            <img src={smallStuff} alt="small-stuff" />
            <h6>SMALL STUFF</h6>
          </article>
        </NavLink>
      </section>
    </main>
  );
};

// Exportiere die 'Home'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default Home;
