import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  return (
    <>
      <h2 className="my-2 ">Shopping Cart</h2>

      <Row xs={12} md={12}>
        <Col xs={12} md={8}>
          {cartItems.length === 0 ? (
            <Message variant="info">
              Your cart is emty <Link to="/">Go Back Home</Link>
            </Message>
          ) : (
            <Row>
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col xs={2} md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col xs={4}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>

                      <Col xs={2}>${item.price}</Col>
                      <Col xs={2} md={3}>
                        <Form.Select
                          className="cartSelect btn-sm px-2"
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
                        </Form.Select>
                      </Col>
                      <Col xs={1}>
                        <Button
                          type="button"
                          variant="light"
                          className="btn-sm px-2 "
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Row>
          )}
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item>
              <Row>
                <Button
                  type="button"
                  className="btn-block btn-dark"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </Row>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
