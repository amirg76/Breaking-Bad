import "../MediaCard/MediaCard.css";
const MediaCard = ({ data }) => {
  return (
    <div className="media-card">
      <div className="media-card-inner">
        <div className="media-card-front">
          <img src={data.url} alt={data.url} />
          <div className="media-card-quote">
            <h1>{data.quote}</h1>
            <h3>{data.author}</h3>
          </div>
        </div>
        <div className="media-card-back">
          <h2>Trivia</h2>
          <h5>{data.text}</h5>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
