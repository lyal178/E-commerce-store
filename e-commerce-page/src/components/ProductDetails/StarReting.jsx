import React from "react";
import "../../styles.css";

const StarRating = ({ rating }) => {
  const clampedRating = Math.min(Math.max(rating, 0), 5);

  const fullStars = Math.floor(clampedRating);
  const hasHalfStar = clampedRating % 1 > 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="star full">
          ★
        </span>
      ))}
      {hasHalfStar && <span className="star half">★</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="star empty">
          ☆
        </span>
      ))}
    </div>
  );
};

export default StarRating;
