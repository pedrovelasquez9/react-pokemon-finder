import "./Pokeball.css";

const Pokeball = ({ btnFunction }) => {
  return (
    <section className="pokeball-section-container">
      <section className="pokeball-section pokeball-header"></section>
      <section className="pokeball-separator "></section>
      <button className="pokeball-btn" onClick={() => btnFunction()}></button>
      <section className="pokeball-section pokeball-footer"></section>
    </section>
  );
};

export default Pokeball;
