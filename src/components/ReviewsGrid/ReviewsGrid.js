// import { useState } from "react";
// import axios from "axios";
import { MOKEAPI } from "../Api/Api";
import { newDate } from "../Tools/Date";
import ReviewsCard from "../ReviewsCard/ReviewsCard";
import "../ReviewsGrid/ReviewsGrid.css";
function ReviewsGrid({ isLoading, setIsLoading, reviewsData, setReviewsData }) {
  // const [isLoading, setIsLoading] = useState(true);
  //
  const handleUpdate = async (id, newUserName, newTitle, newContent) => {
    const reviewToUpdate = reviewsData.find((review) => review.id === id);

    const updatedReview = {
      ...reviewToUpdate,
      username: newUserName !== "" ? newUserName : reviewToUpdate.username,
      title: newTitle !== "" ? newTitle : reviewToUpdate.title,
      content: newContent !== "" ? newContent : reviewToUpdate.content,
      date: newDate(),
    };
    const { data } = await MOKEAPI.put(`/breaking-bad/${id}`, updatedReview);

    // setReviewsData((prev) => {
    //   return [...prev, postedData.data];
    // });
    setReviewsData((prev) => {
      return prev.map((review) => {
        if (review.id === id) return data;
        return review;
      });
    });
    setIsLoading(false);
    // this.setState((prev) => {
    //   return {
    //     shoesArr: prev.shoesArr.map((shoe) => {
    //       if (shoe.id === id) {
    //         return data;
    //       }
    //       return shoe;
    //     }),
    //     isSpinning: false,
    //   };
    // });
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await MOKEAPI.delete(
        `/breaking-bad/${id}`
        // `https://628e6124368687f3e71608eb.mockapi.io//breaking-bad${id}`
      );
      setReviewsData((prev) => prev.filter((review) => review.id !== id));
      // setData(reviewsData.filter((review) => review.id !== id));
      // setData(() => {
      //   const newReviewsArr = reviewsData.filter((review) => review.id !== id);
      //   return { newReviewsArr };
      // });
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  return isLoading ? (
    <>
      {console.log(isLoading)}

      <h1>Loading...</h1>
    </>
  ) : (
    <section className="reviews-cards">
      {reviewsData.map((element) => (
        <ReviewsCard
          key={element.id}
          data={element}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </section>
  );
}

export default ReviewsGrid;
