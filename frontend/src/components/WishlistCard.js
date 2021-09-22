import React from "react";
import { Card ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'
import {useHistory} from "react-router-dom"

function WishlistCard({ product }) {
const history = useHistory();
console.log(product ,"shailesh")
  
  return (
    <div>
      <Card className="my-3 p-2 rounded">
        <Link to={`/products/${product.product}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body>
          <a href={`/products/${product.product}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text as="div">Rs {product.price}</Card.Text>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WishlistCard;
