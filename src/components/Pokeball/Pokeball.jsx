import "./Pokeball.css";

const Pokeball = ({ btnFunction, isLoginPage = false }) => {
  return (
    <section
      className={
        !isLoginPage
          ? "pokeball-section-container"
          : "pokeball-section-container-login"
      }
    >
      <section className="pokeball-section pokeball-header"></section>
      <section className="pokeball-separator "></section>
      <button
        className={!isLoginPage ? "pokeball-btn" : "pokeball-btn pulse"}
        onClick={() => btnFunction()}
      ></button>
      <section className="pokeball-section pokeball-footer"></section>
    </section>
  );
};

export default Pokeball;
