import "../ReviewsCard/ReviewsCard.css";
import { useState } from "react";
import PopUp from "../PopUp/PopUp";
function ReviewsCard({ data, handleDelete, handleUpdate }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [typeOfPopup, setTypeOfPopup] = useState("");

  const togglePopup = () => {
    setIsPopUpOpen((prev) => ({ isPopUpOpen: !prev.isPopUpOpen }));
  };
  const handleConfirmDelete = () => {
    setTypeOfPopup("delete");
    togglePopup();
  };
  const handleUpdateClick = () => {
    setTypeOfPopup("update");
    togglePopup();
  };

  return (
    <>
      <div
        className={
          !isPopUpOpen
            ? "review-card review-scale "
            : " review-card review-noscale"
        }
      >
        <div className="review-card-front">
          <h1>{data.title}</h1>
          <h3>{data.content}</h3>
        </div>
        <div className="review-card-user">
          <h3>{data.username}</h3>
          {data.id > 25 && (
            <>
              <button onClick={handleConfirmDelete}>Delete</button>
              <button onClick={handleUpdateClick}>Update</button>
            </>
          )}
          <h3>{data.date}</h3>
        </div>
        {isPopUpOpen && (
          <PopUp
            setIsPopUpOpen={setIsPopUpOpen}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            id={data.id}
            typeOfPopup={typeOfPopup}
          />
        )}
      </div>
    </>
  );
}

export default ReviewsCard;
