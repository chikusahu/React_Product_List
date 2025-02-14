/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ProductCard from "./ProductCard";

function ProductList(props){
    const { products } = props;

    return(
        <div style={{display:"flex", flexWrap:"wrap"}}>
            {products.map((detail)=>(
               <ProductCard data={detail} key={detail.id}/>
            ))}
        </div>
    )
}
export default ProductList;