import { useState } from "react";
import "../ReviewsPost/ReviewsPost.css";
import { MOKEAPI } from "../Api/Api";
import { newDate } from "../Tools/Date";
// import axios from "axios";
import PopUp from "../PopUp/PopUp";

function ReviewsPost({ setReviewsData, reviewsData }) {
  const [inputValues, setInputValues] = useState({
    newUserName: "",
    newTitle: "",
    newContent: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [IsSuccessPost, setIsSuccessPost] = useState(false);
  const handleInputChange = ({ target }) => {
    console.log(target.value);
    const { id, value } = target;
    setInputValues({ ...inputValues, [id]: value });
    // setIsLoading(false);
  };
  const handleCreate = async (e) => {
    setIsLoading(true);
    const newReview = {
      username: inputValues.newUserName,
      title: inputValues.newTitle,
      content: inputValues.newContent,
      date: newDate(),
    };
    console.log(newReview);
    try {
      const postedData = await MOKEAPI.post("/breaking-bad", newReview);

      // const postedData = await axios.post(
      //   "https://628e6124368687f3e71608eb.mockapi.io//breaking-bad",
      //   newReview
      // );

      setReviewsData((prev) => {
        return [...prev, postedData.data];
        // return [postedData.data, ...prev];
      });
      setInputValues({
        newUserName: "",
        newTitle: "",
        newContent: "",
      });
      setIsLoading(false);
      setIsSuccessPost(true);
    } catch (e) {
      console.log(e.message);
    }
  };

  return isLoading ? (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : IsSuccessPost ? (
    <PopUp setIsSuccessPost={setIsSuccessPost} typeOfPopup="success" />
  ) : (
    <form>
      <div className="main-form">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your Review!</div>
        <div className="form-handle">
          <input
            id="newUserName"
            onChange={handleInputChange}
            value={inputValues.newUserName}
            placeholder="Your User"
          />
          <input
            id="newTitle"
            onChange={handleInputChange}
            value={inputValues.newTitle}
            placeholder="Your Title"
          />
          <textarea
            rows="4"
            cols="50"
            id="newContent"
            onChange={handleInputChange}
            value={inputValues.newContent}
            placeholder="Your Content"
          />
          <button type="button" className="submit-btn" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewsPost;
