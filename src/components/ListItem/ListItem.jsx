import "./ListItem.css";
import pokeball from "../../assets/images/pokeball.png";

//TODO: fetch pokemon detail
const ListItem = ({ value }) => {
  const { url, name } = value;
  return (
    <li className="list-item">
      <img src={pokeball} className="pokeball-icon" />
      <a href={url}>{name}</a>
    </li>
  );
};

export default ListItem;
