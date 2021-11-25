import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://44ce892b-bdf2-405f-a722-540d4c684466.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        console.log(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (product === null) {
    return <h1> 상품 정보를 받고 있습니다 ...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imgUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icon/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createAT">2020년 12월8일</div>
        <div id="description">{product.descrpiton}</div>
      </div>
    </div>
  );
}

export default ProductPage;
