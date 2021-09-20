import React from 'react'
import { useDispatch, useSelector } from "react-redux";



function Sorting() {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.productList);
    return (
        <div>
       <fieldset>
        <legend>Sort By</legend>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={product.sortBy && product.sortBy === "PRICE_HIGH_TO_LOW"}
          ></input>{" "}
          Price - High to Low
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={product.sortBy && product.sortBy === "PRICE_LOW_TO_HIGH"}
          ></input>{" "}
          Price - Low to High
        </label>
      </fieldset>
            
        </div>
    )
}

export default Sorting
