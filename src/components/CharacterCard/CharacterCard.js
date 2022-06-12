import "./CharacterCard.css";
import { Link } from "react-router-dom";

const CharacterCard = ({ card }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={card.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{card.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong>
              <span>{card.portrayed}</span>
            </li>
            <li>
              <strong>Nickname: </strong>
              <span>{card.nickname}</span>
            </li>
            <li>
              <strong>Birthday: </strong>
              <span>{card.birthday}</span>
            </li>
            <li>
              <strong>Status: </strong>
              <span>{card.status}</span>
            </li>
            <li>
              {card.char_id <= 10 && (
                <Link to={`/${card.char_id}`}>
                  <button className="more-btn">More</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;

// tt7298034
