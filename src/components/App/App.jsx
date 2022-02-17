import logo from "../../assets/images/Logo-PEE.png";
import "./App.css";
import Store from "../../store/Store";
import Data from "../Data/Data";

function App() {
  return (
    <Store>
      <main className="App">
        <section className="pee-section App-section">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="pee-main-title">
            Aplicación base usando Vite + React con control de state sin Redux!
          </p>
          <p className="pee-subtitle">
            Desarrollado en vivo en el canal de{" "}
            <a href="https://my.bio/prog-es">Programación en español</a>
          </p>
        </section>
        <section className="react-section App-section">
          <Data></Data>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite
            </a>
          </p>
        </section>
      </main>
    </Store>
  );
}

export default App;
