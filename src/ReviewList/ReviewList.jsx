import React from "react";

const ReviewList = ({ listReview }) => {
  return (
    <ul>
      {listReview &&
        listReview.map((r) => (
          <li key={r.id}>
            {r.id} {r.text} {r.starsValue}
          </li>
        ))}
    </ul>
  );
};

export default ReviewList;
