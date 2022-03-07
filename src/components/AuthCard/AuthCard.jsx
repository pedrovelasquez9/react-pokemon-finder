import {
  Grid,
  Card,
  Col,
  Row,
  Button,
  Input,
  Container,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./AuthCard.css";

function AuthCard() {
  return (
    //   {TODO: override css for background to simulate pokeball}
    <Grid.Container>
      <Grid>
        <Card
          cover
          css={{ background: "transparent" }}
          xs={12}
          className="login-grid"
          justify="space-between"
          align="stretch"
          wrap="nowrap"
          direction="column"
          display="flex"
        >
          <Card.Header className="auth-card-header">
            <Col>
              {/* <Text h2 color="#fff"> */}
              <svg viewBox="0 0 500 500">
                <path
                  id="curve"
                  d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                />
                <text width="500">
                  <textPath href="#curve">Pokemon finder</textPath>
                </text>
              </svg>
              {/* </Text> */}
            </Col>
          </Card.Header>
          <Card.Body className="auth-card-body">
            <Container
              align="center"
              direction="column"
              display="flex"
              gap={2}
              className="auth-card-body-container"
            >
              <Row xs={4}>
                <Col>
                  <Input
                    animated={false}
                    className="auth-card-input"
                    clearable
                    type={["text"]}
                    placeholder="Username"
                    color="default"
                    aria-label="Username"
                  />
                </Col>
                <Col xs={4}>
                  <section className="auth-card-form-separator"></section>
                </Col>
                <Col xs={4}>
                  <Input
                    animated={false}
                    className="auth-card-input"
                    clearable
                    type={["password"]}
                    placeholder="Password"
                    color="default"
                    aria-label="Password"
                  />
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <Card.Footer blur className="auth-card-footer">
            <Row>
              <Col
                xs={6}
                align="center"
                display="flex"
                justify="center"
                direction="row"
              >
                <Button flat auto rounded className="auth-card-footer-btn">
                  Regístrate
                </Button>
              </Col>
              <Col
                xs={6}
                align="center"
                display="flex"
                justify="center"
                direction="row"
              >
                <Button flat auto rounded className="auth-card-footer-btn">
                  <Link to="/home">Iniciar</Link>
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      {/* <Link to="/home">
            <button>Test go home</button>
          </Link> */}
    </Grid.Container>
  );
}

export default AuthCard;
