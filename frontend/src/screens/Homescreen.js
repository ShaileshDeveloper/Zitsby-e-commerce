import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sorting from "../components/sorting"
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { productListAction }  from "../actions/productActions";
import {Loader} from '../components/loader'

import { useSelector, useDispatch } from "react-redux";

function Homescreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products,sortBy } = productList;
  
  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  function getSortedData(products, sortBy) {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return products.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return products.sort((a, b) => a["price"] - b["price"]);
    }
    return productList;
}
  getSortedData(products,sortBy);
 

  return (
    <div>
      <Header />
      <Container><Sorting /></Container>
      
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <Row>
            {products.map((product) => {
              return (
                <>
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <ProductCard product={product} />
                  </Col>
                </>
              );
            })}
          </Row>
        )}
      </Container>

      <Footer />
    </div>
  );
}

export default Homescreen;
