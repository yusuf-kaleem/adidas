import React from "react";
import './reviews.css'
import { RatingStar } from "rating-star";
import StarsRating from 'stars-rating'

function Reviews({ reviews }) {

    // "productId": "HI333",
    // "locale": "en-GB,en-US;q=0.9,en;q=0.8",
    // "rating": 3,
    // "text": "very good product"

    return (
        <div className="review-container">
            {
                reviews.map((review, i) => {

                    return (
                        <div className="review-card">
                            <StarsRating
                                edit={false}
                                count={review.rating}
                                //onChange={ratingChanged}
                                size={24}
                                color1={'#fac234'}
                            //onRatingChange={onRatingChange}
                            />
                            <p>{review.text}</p>

                        </div>

                    )
                })
            }
        </div>


    );
}

export default Reviews;

