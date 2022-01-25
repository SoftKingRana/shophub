import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {  Search } from "@material-ui/icons";
import { mobile } from "../../responsive";
import styled from "styled-components";

const SearchContainer = styled.form`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 5px;
  color: black;
  background-color: white;
`;

const Input = styled.input`
  border-radius: 5px;

  background-color: white;
  align-content: center;
  align-items: center;
  width: "600px";

  ${mobile({ width: "140px" })};
`;

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }

    return (
      <SearchContainer onSubmit={submitHandler} inline>
        <Input
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
        ></Input>

        <Search type="submit"></Search>
      </SearchContainer>
    );
}

export default SearchBox
