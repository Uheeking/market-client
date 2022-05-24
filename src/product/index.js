import React from 'react';
import {useParams} from 'react-router-dom'

function ProductPage() {
  // 도메인에서 받은 id를 파라미터로 저장
  const {id} = useParams;
  return (
    <h1>
      상세페이지화면 {id}
    </h1>
  )
}

export default ProductPage
