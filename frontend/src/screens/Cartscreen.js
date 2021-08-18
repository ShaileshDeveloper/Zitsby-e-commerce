import React, { useEffect } from "react";
import { Link , NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../actions/cartAction";

function CartScreen({ match, location, history }) {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(qty);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  console.log(cartItems);

  function removeFromCartHandler(id) {
    dispatch(removeFromCart(id));
  }

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>shopping cart</h1>
            </ListGroup.Item>
          </ListGroup>
          {cartItems.length === 0 ? (
            <h1>cart empty</h1>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/products/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>{item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className=" fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>

        <Col md={4} className="subtotal_cart">
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <h2>
                  SubTotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  )
                </h2>
              </ListGroup.Item>
              <ListGroup.Item>
                TotalPrice: (
                {cartItems.reduce(
                  (acc, item) => acc + item.qty * item.price,
                  0
                )}
                )
              </ListGroup.Item>
              {userInfo ? <Button>PROCEED TO CHECKOUT</Button> : <NavLink to='/login'><Button className='btn-block'>PROCEED TO CHECKOUT</Button></NavLink>}
              
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CartScreen;
