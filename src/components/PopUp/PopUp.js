import React, { useState } from "react";

import "../PopUp/PopUp.css";

function PopUp({
  id,
  handleDelete,
  setIsPopUpOpen,
  typeOfPopup,
  setIsSuccessPost,
  handleUpdate,
}) {
  const [inputValues, setInputValues] = useState({
    newUserName: "",
    newTitle: "",
    newContent: "",
  });

  const handleInputChange = ({ target }) => {
    console.log(target.value);
    const { id, value } = target;
    setInputValues({ ...inputValues, [id]: value });
    // setIsLoading(false);
  };

  const handleNewUpdate = () => {
    return handleUpdate(
      id,
      inputValues.newUserName,
      inputValues.newTitle,
      inputValues.newContent
    );
  };

  return (
    <>
      <div className="popup-continer">
        {typeOfPopup === "delete" ? (
          <div className="popup-card-delete">
            <h4> You really want to delete that review?</h4>
            <button
              onClick={() => {
                handleDelete(id);
                setIsPopUpOpen(false);
              }}
            >
              Yes
            </button>
            <button onClick={() => setIsPopUpOpen(false)}>No</button>
          </div>
        ) : typeOfPopup === "success" ? (
          <div className="popup-card-delete">
            <h4> Your New Review Is Publish Successful</h4>

            <button onClick={() => setIsSuccessPost(false)}>Ok</button>
          </div>
        ) : (
          <div className="popup-card-update">
            <h4> Confirm or cancel update</h4>

            <input
              id="newUserName"
              onChange={handleInputChange}
              value={inputValues.newUserName}
              placeholder="Update User Name"
            />
            <input
              id="newTitle"
              onChange={handleInputChange}
              value={inputValues.newTitle}
              placeholder="Update Title"
            />
            <textarea
              rows="4"
              cols="50"
              id="newContent"
              onChange={handleInputChange}
              value={inputValues.newContent}
              placeholder="Update Content"
            />
            <div className="buttons-update">
              <button
                onClick={() => {
                  handleNewUpdate();
                  setIsPopUpOpen(false);
                }}
              >
                Confirm
              </button>
              <button onClick={() => setIsPopUpOpen(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
  // }
}
export default PopUp;
