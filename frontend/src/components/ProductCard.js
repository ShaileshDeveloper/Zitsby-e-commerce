import React from "react";
import { Card ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'
import {useHistory} from "react-router-dom"

function ProductCard({ product }) {
const history = useHistory();

  function addToWishlistHandler(){
     history.push(`/wishlist/${product._id}`)
  }
  return (
    <div>
      <Card className="my-3 p-2 rounded">
        <Link to={`/products/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body>
          <a href={`/products/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text as="div">Rs {product.price}</Card.Text>
          </a>
         
          <Button variant="light" onClick={addToWishlistHandler}>
          ADD TO WISHLIST</Button>
         
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
