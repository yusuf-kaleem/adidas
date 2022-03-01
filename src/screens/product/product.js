import React, { useEffect,useState } from 'react';
import Header from "../../components/header/Header";
import { cache_data_acknoledge } from "../../constant/constant";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/productDetails/productDetails";
import { get_product_by_id,get_product_id_from_url ,get} from "../../api_services/api";
import Banner from "../../components/banner/banner";
import Reviews from "../../components/reviews/reviews";
import { useNavigate } from "react-router-dom";

import { url_get_product_reviews ,url_get_product_by_id} from "../../constant/constant";

function App() {

  // Initial states
  const navigate = useNavigate();
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const loadReviews = (reviews) => { dispatch({ type: "LOAD_REVIEWS", payload: reviews }) }
  const selectItem = (product) => { dispatch({ type: "SELECT_PRODUCT", payload: product }) }
  const [bannerText, setBannerText] = useState(null)

  //FETCH PRODUCT
  useEffect(() => {
    const product_id = get_product_id_from_url(window.location.search)
    get(url_get_product_by_id(product_id),(res) => {
      //success
      setBannerText(null)
      selectItem(res.data)
    }, (err) => {
      //error
      //showing redux prestored data as cached for demo perpose
      setBannerText(cache_data_acknoledge)
    });

    get(url_get_product_reviews(product_id),(res) => {
      //success
      loadReviews(res.data)
    }, (err) => {
      //error
      
    });

  }, [])
  

  return (
    <div className="body">
      
      {/* Header Component */}
      <Header childCompoent={<button className='back-button'  onClick={()=>{navigate('/')}}> back </button>}></Header>
      <Banner message={bannerText}></Banner>
      <div className="main-container">

      {/* Product Component */}
      <Product product={state.items.selected_Product}></Product>

      <Reviews reviews={state.items.reviews}></Reviews>
     
      </div>
    </div>
  );
}

export default App;
