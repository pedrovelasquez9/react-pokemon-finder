import back1 from "../../assets/images/main-back-1.jpg";
import { getRandomValue } from "../../utils/arrayHelpers";
import { Container, Row } from "@nextui-org/react";
import "./App.css";
import AuthCard from "../AuthCard/AuthCard";

function App() {
  return (
    <main
      className="App"
      style={{
        backgroundImage: `url(${back1})`,
      }}
    >
      <Container responsive xs={true} gap={0}>
        <Row
          className="row-container"
          justify="center"
          align="center"
          direction="column"
          display="flex"
          xs={4}
        >
          <AuthCard />
        </Row>
      </Container>
    </main>
  );
}

export default App;
