import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Carousel, Image } from 'react-bootstrap'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import { LinearProgress } from "@material-ui/core";
function ProductCarousel() {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { error, loading, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return loading ? (
      <LinearProgress />
    ) : error ? (
      <Message variant="danger">{error}</Message>
    ) : (
      <Card>
        <Carousel
          xs={12}
          md={12}
          lg={12}
          pause="hover"
          className="bg-light cover"
        >
          {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/product/${product._id}`}>
                <Image
                  xs={12}
                  md={12}
                  lg={12}
                  src={product.image}
                  alt={product.name}
                  img-fluid
                  img-thumbnail
                />
                <Carousel.Caption className="carousel.caption">
                  <h2>
                    {product.name} (${product.price})
                  </h2>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </Card>
    );
}

export default ProductCarousel
