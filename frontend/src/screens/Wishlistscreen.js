import React from "react";
import { Col, Row } from "react-bootstrap";
import WishlistCard from "../components/WishlistCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sorting from "../components/sorting"
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { productListAction }  from "../actions/productActions";
import {Loader} from '../components/loader'
import { useSelector, useDispatch } from "react-redux";
import {addToWishlist} from "../actions/wishlistAction"
import { useParams } from "react-router-dom";


 

export default function Wishlistscreen(){
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.wishlist);
    const {wishlistItems} = productList;

    const productId = useParams();
    
  console.log(productId.id)

  
    
  
    useEffect(() => {
      if (productId) {
        dispatch(addToWishlist(productId.id));
      }
    }, [dispatch, productId]);
  


    return <>
     <Container>
    <Row>
            {wishlistItems.map((product) => {
              return (
                <>
                  <Col key={product._id} sm={12} md={8} lg={6} xl={4}>
                    <WishlistCard product={product} />
                  </Col>
                </>
              );
            })}
          </Row>
    </Container>
    </>
}