import { useParams } from "react-router";

function ProductPage() {
  const { id } = useParams();
  console.log(id);
  <h1> 상품 page {id} </h1>;
}

export default ProductPage;
