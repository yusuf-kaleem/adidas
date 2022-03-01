import React, { useState } from "react";
import './productDetails.css'
import Modal from 'simple-react-modal'
import StarsRating from 'stars-rating'
import { post } from "../../api_services/api";
import { url_get_product_reviews } from "../../constant/constant";
import { useDispatch } from "react-redux";

function Product({ product }) {

    const dispatch = useDispatch()
    const addReview = (reviews) => { dispatch({ type: "ADD_REVIEWS", payload: reviews }) }
    const [rating, setRating] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const [reviewInput, setReviewInput] = useState("")

    const ratingChanged = (rating) => {
        setRating(rating)
    }

    const getNavigatorLanguage = () => {
        if (navigator.languages && navigator.languages.length) {
            return navigator.languages[0];
        } else {
            return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
        }
    }

    const onSubmit = () => {
        let post_url = url_get_product_reviews(product.id)
        let locale = getNavigatorLanguage()
        let review = {
            "productId": product.id,
            "locale": locale,
            "rating": rating,
            "text": reviewInput
        }

        post(post_url, review, (res) => {
        let posted_data = res.data
        addReview(posted_data)
        setShowModal(false)
        }, (err) => {
            //error
            alert("something went wrong please try after sometime");
            console.log("error at post review", err)
        });
    }

    return (
        <div style={{ fontSize: 16, display: 'inline-block' }}>

            <Modal show={showModal} onClose={() => { setShowModal(false) }}>
                <br></br>
                <input onChange={(e) => { setReviewInput(e.target.value) }} type="text" className="input" placeholder="write your review"></input>
                <br></br>
                <StarsRating
                    count={5}
                    value={rating}
                    onChange={ratingChanged}
                    size={34}
                    color2={'#fac234'}
                    color1={'#333'}
                    half={false}
                />
                <br></br>

                <button className="button" onClick={onSubmit}>Submit</button>
                <button className="cancel" onClick={() => { setShowModal(false) }}>Cancel</button>

            </Modal>

            <div data-testid="date-card" style={{ display: "flex", color: "#000" }} onClick={() => { }}>
                <div data-testid="date" >

                    <img className="img" src={product.imgUrl}></img>

                </div>

                <div className="details">
                    <span>{product.name}</span>
                    <span>{product.currency} {product.price}</span>
                    <span>{product.description}</span>
                </div>

            </div>

            <div style={{ display: "flex" }}>
                <button className="button" onClick={() => { setShowModal(true) }}>Add Review</button>
            </div>

        </div>

    );
}

export default Product;

