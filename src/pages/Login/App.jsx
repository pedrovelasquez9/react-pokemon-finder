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
      <div className="main-container">
        <AuthCard />
      </div>
    </main>
  );
}

export default App;
