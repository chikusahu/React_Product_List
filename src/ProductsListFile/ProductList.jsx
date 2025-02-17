/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList(props) {
    const { products } = props;
    const [search, setSearch] = useState("");
    const filteredItem = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <input type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />

            <div style={{ display: "flex", flexWrap: "wrap" }}>

                {filteredItem.map((detail) => (
                    <ProductCard data={detail} key={detail.id} />

                ))}
            </div>

        </div>
    )
}
export default ProductList;