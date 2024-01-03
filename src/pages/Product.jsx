import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
   const{all_product} =useContext(shopContext)
   const {productId} = useParams();
   const Product = all_product.find((e)=>e,id===Number(productId))
  return (
    <div >
      
    </div>
  )
}
export default Product
