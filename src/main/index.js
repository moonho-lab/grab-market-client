import "./index.css";
import axios from "axios";
import React from "react";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://44ce892b-bdf2-405f-a722-540d4c684466.mock.pstmn.io/products"
      )
      .then(function (result) {
        console.log(result);
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/images/products/images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/images/products/images/banners/banner1.png" />
        </div>
        <h1> 판매되는 상품들 이다 </h1>
        <div id="product-list"></div>
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <div>
                <img className="product-img" src={product.imgUrl} />
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price} 원 </span>
                  <div className="product-seller">
                    <img
                      className="prodcut-avatar"
                      src="images\images\products\images\icons\avatar.png"
                    />
                    <span>prodcut.seller</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div id="footer"></div>
    </div>
  );
}
export default MainPage;
