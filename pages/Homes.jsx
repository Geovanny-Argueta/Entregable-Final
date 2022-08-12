import React from "react";
import { useEffect } from "react";
import {
  filterProductsThunk,
  getProductsThunk,
  filterCategoryThunk
} from "../Components/store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import {
  Row,
  Card,
  Col,
  InputGroup,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Homes = () => {
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const products = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(getProductsThunk());

    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  console.log(categories);

  return (
    <div>
      
      <h1>HOME</h1>

      <InputGroup className="mb-3" >
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button
          variant="outline-secondary"
          onClick={() => dispatch(filterProductsThunk(search))}
        >
          Button
        </Button>
      </InputGroup>
      <Row className="homes">
        <Col lg={3}>
          <ListGroup>
            {categories.map((category) => (
              <ListGroup.Item
              key={category.id}
              onClick={()=>dispatch(filterCategoryThunk(category.id))}>
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Col>
            <Card key={product.id} onClick={()=>navegate(`/news/${product.id}`)}>
              <Card.Img variant="top" src={product.productImgs[0]} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Homes;
