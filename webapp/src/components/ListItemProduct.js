import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";

import styled from "styled-components";

const Ul = styled.ul`
  flex: 1;
  margin-left: 10px;
`;
const Li = styled.li`
  margin: 5px;
  padding: 5px;
  font-size: 18px;
  color:black;
`;

export default function AlignItemsList() {


  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      style={{ backgroundColor: " #ffffff73" }}
      sx={{
        flexGrow: 1,

        display: { xs: "none", md: "block" },
        width: "100%",
        height: "100%",
      }}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <Ul>
        <Li>
          <a href="#">Teams</a>
        </Li>
        <Li>
          <a href="#">Locations</a>
        </Li>
        <Li>
          <a href="#">Life at Netflix</a>
        </Li>
        <Li>
          <ul>
            <Li>
              <a href="#">Netflix culture memo</a>
            </Li>
            <Li>
              <a href="#">Work Life balance</a>
            </Li>
            <Li>
              <a href="#">Inclusion & diversity</a>
            </Li>
            <Li>
              <a href="#">Blog</a>
            </Li>
          </ul>
        </Li>
      </Ul>
    </List>
  );
}
