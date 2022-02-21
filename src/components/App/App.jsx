import back1 from "../../assets/images/main-back-1.jpg";
import back2 from "../../assets/images/main-back-2.jpg";
import back3 from "../../assets/images/main-back-3.jpg";
import { getRandomValue } from "../../utils/arrayHelpers";
import { Col, Container, Row } from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main
      className="App"
      style={{
        backgroundImage: `url(${getRandomValue([back1, back2, back3])})`,
      }}
    >
      <Container fluid responsive gap={0}>
        <Row className="row-container" justify="center">
          {/* TODO: main login/register floating card */}
          <Link to="/home">
            <button>Test go home</button>
          </Link>
          <Col className="col-container"></Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
