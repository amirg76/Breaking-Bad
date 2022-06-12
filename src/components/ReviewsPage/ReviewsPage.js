import axios from "axios";
import { MOKEAPI } from "../Api/Api";
import { useEffect, useState } from "react";
import ReviewsGrid from "../ReviewsGrid/ReviewsGrid";
import ReviewsPost from "../ReviewsPost/ReviewsPost";

import "../ReviewsPage/ReviewsPage.css";
const ReviewsPage = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await MOKEAPI.get("/breaking-bad");
        // const response = await axios.get(
        //   "https://628e6124368687f3e71608eb.mockapi.io//breaking-bad"
        //   // "https://imdb-api.com/en/API/Reviews/k_xybsxoyv/tt0903747"
        // );
        setReviewsData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews();
  }, []);

  const showReviews = () => {
    return (
      <div className="reviews-main-grid">
        <ReviewsPost
          reviewsData={reviewsData}
          setReviewsData={setReviewsData}
        />
        <ReviewsGrid
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          reviewsData={reviewsData}
          setReviewsData={setReviewsData}
        />
      </div>
    );
  };
  return isLoading ? (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div className="reviews-main-container">{showReviews()}</div>
  );
};

export default ReviewsPage;
