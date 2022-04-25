import React, { useState } from "react";
import "./ReviewForm.css";

const ReviewFrom = () => {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [listReview, setListReview] = useState([{ id: 1, text: "Cool" }]);
  const [stars, setStars] = useState("");

  let starsArr = [
    { value: 5, star: "*****" },
    { value: 4, star: "****" },
    { value: 3, star: "***" },
    { value: 2, star: "**" },
    { value: 1, star: "*" },
  ];

  function addReview(e) {
    e.preventDefault();
    let newReview = {
      id: new Date().getSeconds().toString(),
      title: reviewTitle,
      text: reviewText,
      starsValue: stars,
    };
    setListReview([...listReview, newReview]);
    setReviewTitle("");
    setReviewText("");
  }
  return (
    <div className="review-wrapper">
      <form className="review-form">
        <label>
          <input
            className="review-input"
            onChange={(e) => setReviewTitle(e.target.value)}
            placeholder="Review title"
            value={reviewTitle}
          />
        </label>
        <textarea
          className="review-text"
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Review text"
          value={reviewText}
        ></textarea>
        <select
          className="review-stars"
          onChange={(e) => setStars(e.target.value)}
        >
          {starsArr.map((s) => (
            <option
              className="review-stars-option"
              key={s.value}
              value={s.star}
            >
              {s.star}
            </option>
          ))}
        </select>
      </form>
      <button onClick={addReview} className="btn btn--thin">
        Add review
      </button>
    </div>
  );
};

export default ReviewFrom;
