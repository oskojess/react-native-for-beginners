import React from "react";
import { Text, View } from "react-native";

import styled from "styled-components/native";

const StyledCard = styled.View`
  display: flex;
  flex: 1;
  margin-top: 100px;
  padding: 50px;
`;
const Wrapper = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: row;
`;

const StyledBlocBlue = styled.View`
  width: 50;
  height: 50;
  background-color: #7ec0ee;
`;

const StyledBlocRed = styled.View`
  width: 50;
  height: 50;
  background-color: #ff0000;
`;

const StyledBlocYellow = styled.View`
  width: 50;
  height: 50;
  background-color: #ffff00;
`;

export default class Flexbox extends React.Component {
  static navigationOptions = {
    title: "Flex Direction"
  };

  render() {
    return (
      <StyledCard>
        <Wrapper>
          <StyledBlocBlue />
          <StyledBlocRed />
          <StyledBlocYellow />
        </Wrapper>
      </StyledCard>
    );
  }
}
