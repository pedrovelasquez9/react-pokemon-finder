import "./AuthCard.css";
import { useNavigate } from "react-router-dom";
import Pokeball from "../Pokeball/Pokeball";

const AuthCard = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <Pokeball btnFunction={navigateToHome} isLoginPage={true} />
    </>
  );
};

export default AuthCard;
