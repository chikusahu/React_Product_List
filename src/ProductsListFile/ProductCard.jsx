/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

function ProductCard(props) {
    const { data } = props;

    

    return (
        <div>
            <p style={{ border: "1px  solid", borderRadius: "5px", backgroundColor: data.color, padding: "5px", margin: "10px",width:"250px"}}>
            <h3>{data.name}</h3>
            ₹ {data.price}<br/>
            {data.category}<br/>
            {data.description}
            </p>
        </div>
    )
}

export default ProductCard;