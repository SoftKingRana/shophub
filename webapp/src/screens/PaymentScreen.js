import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod, saveCashOnDelivery } from "../actions/cartActions";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");



  if (!shippingAddress.address) {
    history.push("/shipping");
  }
     const submitHandler = (e) => {
       e.preventDefault();
       dispatch(savePaymentMethod(paymentMethod));
       
       history.push("/placeorder");
     };


  



  return (
    <FormContainer>
      <h1>Select Payment Gatewey</h1>
      <CheckoutSteps step1 step2 step3 />
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Payment Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Cash On Delivery"
              id="cashOnDelivery"
              value="cash"
              name="paymentMethod"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>

          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="paypal"
              value='paypal'
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="danger">
          Next
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
