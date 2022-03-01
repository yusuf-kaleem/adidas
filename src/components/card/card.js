import React from "react";
import './card.css'

function Card({ ProductList, callback }) {

  //card click handler
  function card_click(date) {
    callback(date)
  }

  return (
    <div data-testid="data-card-container">
      {
        ProductList.map((product, i) => {

          return (
            <div data-testid="data-card" key={i} className="card_container" style={{ float: 'left' }} onClick={() => { card_click(product) }}>

              <div data-testid="data-image" >
                <img height={150} width={150} src={product.imgUrl}></img>
              </div>

              <div className="card_content">
                <span>{product.name}</span>
                <span>{product.price} {product.currency}</span>
                <span>{product.description}</span>
              </div>

            </div>
          )
        })
      }
    </div>


  );
}

export default Card;

