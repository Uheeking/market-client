import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

function ProductPage() {
  // 도메인에서 받은 id를 파라미터로 저장
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://5d7190ed-4b8a-4d00-be90-a13732db212f.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
        console.log(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(product);
  
  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  
  return (
    <div>
      <div id="image-box">
        <img src={"/"+ product.imageUrl} />
        {/* <img src={`/${product.imageUrl}`} /> */}
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seleer}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAt">2020년 12월 8일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
