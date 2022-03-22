import { Grid, Card, Col, Row, Container } from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./AuthCard.css";

const AuthCard = () => {
  return (
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
              <svg viewBox="0 0 500 500">
                <path
                  id="curve"
                  d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                />
                <text width="500">
                  <textPath href="#curve">Pokemon finder</textPath>
                </text>
              </svg>
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
                <Col xs={4}>
                  <Link to="/home">
                    <button className="auth-card-form-separator pulse"></button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <Card.Footer blur className="auth-card-footer"></Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default AuthCard;
