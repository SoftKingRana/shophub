import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader/Loader";
import Categories from "../components/ResponsiveCategories/Categories";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import AlignItemsList from "../components/ListItemProduct";
import LandingPage from "../components/LandingPage/LandingPage";

function HomeScreen({ history }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  let keyword = history.location.search;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      {!keyword && (
        <div style={{ top:"100px"}}>
          <Row>
            <Col md={3}>
              <AlignItemsList />
            </Col>
            <Col style={{ display: "block", overflow: "hidden" }} md={9}>
              <LandingPage />
            </Col>
          </Row>
          <Row>
            <Categories />
            {/* <ProductCarousel /> */}
          </Row>
        </div>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
