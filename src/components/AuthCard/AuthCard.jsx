import { Grid, Card, Col, Row, Container } from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./AuthCard.css";
import { useNavigate } from "react-router-dom";
import Pokeball from "../Pokeball/Pokeball";

const AuthCard = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    console.log("entra");
    navigate("/home");
  };

  return <Pokeball btnFunction={navigateToHome} />;
  /* <svg viewBox="0 0 500 500">
    <path
      id="curve"
      d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
    />
    <text width="500">
      <textPath href="#curve">Pokemon finder</textPath>
    </text>
  </svg> */
};

export default AuthCard;
