import React, { useEffect,useState } from 'react';
import Card from "../../components/card/card";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/banner";

import { fallback_api_data,cache_data_acknoledge ,url_get_all_product} from "../../constant/constant";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Search from "../../components/search/search";
import { get } from "../../api_services/api";
function App() {

  // Initial states
  const state = useSelector((state) => state)
  const [bannerText, setBannerText] = useState(null)
  const dispatch = useDispatch()
  const addItem = (products) => { dispatch({ type: "ADD_ITEM", payload: products }) }
  const selectItem = (product) => { dispatch({ type: "SELECT_PRODUCT", payload: product }) }
  let navigate = useNavigate();

  //FETCH PRODUCTS
  useEffect(() => {
   
    get(url_get_all_product ,(res) => {
      //success
      setBannerText(null)
      addItem(res.data)
    }, (err) => {
      //error
      //showing prestored data as cached for demo perpose
      alert(err)
      setBannerText(cache_data_acknoledge)
      addItem(fallback_api_data)
    });

  }, [])

  //Handling callback from child component
  function callback(data) {
    selectItem(data)
    navigate(`/product?id=${data.id}`)

  }

  return (
    <div className="body">

      {/* Header Component */}
      <Header childCompoent={<Search></Search>}></Header>
      <Banner message={bannerText}></Banner>
      <div className="main-container">
        {/* <p style={{color:'#333'}}> {state.items.selected_Product.price}</p> */}

        {/* Product Card Component */}
        <Card ProductList={state.items.items} callback={callback} ></Card>

      </div>
    </div>
  );
}

export default App;
