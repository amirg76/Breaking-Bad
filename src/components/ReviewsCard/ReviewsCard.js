import "../ReviewsCard/ReviewsCard.css";
function ReviewsCard({ data }) {
  return (
    <div className="review-card">
      <div className="review-card-inner">
        <div className="review-card-front">
          <h1>{data.title}</h1>
          <h3>{data.content}</h3>
          <div className="review-card-quote">
            <h1>{data.date}</h1>
            <h3>{data.username}</h3>
          </div>
        </div>
        {/* <div className="media-card-back">
          <h2>Trivia</h2>
          <h5>{data.text}</h5>
        </div> */}
      </div>
    </div>
  );
}

export default ReviewsCard;
