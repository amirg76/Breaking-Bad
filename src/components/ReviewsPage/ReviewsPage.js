import axios from "axios";
import { useEffect, useState } from "react";
import ReviewsGrid from "../ReviewsGrid/ReviewsGrid";
import "../ReviewsPage/ReviewsPage.css";
const ReviewsPage = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://628e6124368687f3e71608eb.mockapi.io//breaking-bad"
          // "https://imdb-api.com/en/API/Reviews/k_xybsxoyv/tt0903747"
        );

        console.log(response.data);
        // setQuoteData(response.data);
        setReviewsData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchReviews();

    // const handleCreate = async (element) => {
    //   const newReview = {
    //     content: element.content,
    //     date: element.date,
    //     username: element.username,
    //     title: element.title,
    //   };
    //   try {
    //     const postedData = await axios.get(
    //       "https://628e6124368687f3e71608eb.mockapi.io//breaking-bad",
    //       newReview
    //     );
    //     console.log(postedData);
    //     // this.setState((prev) => {
    //     //   return {
    //     //     playersArr: [...prev.playersArr, postedData.data],
    //     //     newPlayerName: "",
    //     //     newPlayerImg: "",
    //     //     isSpinning: false,
    //     //   };
    //     // });
    //   } catch (e) {
    //     console.log(e.message);
    //   }
    // };
  }, []);
  return (
    <div className="reviews-main-container">
      <div className="reviews-main-grid ">
        <ReviewsGrid isLoading={isLoading} reviewsData={reviewsData} />
      </div>
    </div>
  );
};

export default ReviewsPage;
