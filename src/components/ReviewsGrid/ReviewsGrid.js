import ReviewsCard from "../ReviewsCard/ReviewsCard";
import "../ReviewsGrid/ReviewsGrid.css";
function ReviewsGrid({ isLoading, reviewsData }) {
  return isLoading ? (
    <>
      {console.log(isLoading)}

      <h1>Loading...</h1>
    </>
  ) : (
    <section className="reviews-cards">
      {reviewsData.map((element) => (
        <ReviewsCard key={element.id} data={element} />
      ))}
    </section>
  );
}

export default ReviewsGrid;
