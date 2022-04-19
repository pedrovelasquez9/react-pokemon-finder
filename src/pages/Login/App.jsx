import back1 from "../../assets/images/main-back-1.jpg";
import "./App.css";
import AuthCard from "../../components/AuthCard/AuthCard";

function App() {
  return (
    <main
      className="App"
      style={{
        backgroundImage: `url(${back1})`,
      }}
    >
      <h1 className="main-page-title">Pokemon finder</h1>
      <div className="main-container">
        <AuthCard />
      </div>
      <footer className="main-footer">
        Desarrollado en directo por Twitch en el canal de{" "}
        <a href="https://www.twitch.tv/programacion_en_esp" target="_blank">
          Programación en Español
        </a>{" "}
        -{" "}
        <a
          href="https://github.com/pedrovelasquez9/react-pokemon-finder"
          target="_blank"
        >
          Ver el código
        </a>
      </footer>
    </main>
  );
}

export default App;
