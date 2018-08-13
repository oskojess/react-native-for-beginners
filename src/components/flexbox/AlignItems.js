import React from "react";
import { Text, View } from "react-native";

import styled from "styled-components/native";

const StyledCard = styled.View`
  display: flex;
  flex: 1;
  margin-top: 100px;
  padding: 50px;
`;

const WrapperCenter = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  flex-direction: row;
`;

const WrapperStart = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: flex-start;
  flex-direction: row;
`;

const WrapperEnd = styled.View`
  justify-content: flex-end;
  flex-direction: row;
`;

const StyledAlignItemsCenter = styled.View`
  width: 50;
  height: 50;
  background-color: #7ec0ee;
  align-items: center;
`;

const StyledAlignItemsStart = styled.View`
  width: 50;
  height: 50;
  background-color: #ff0000;
  align-items: flex-start;
`;

const StyledAlignItemsEnd = styled.View`
  width: 50;
  height: 50;
  background-color: #ffff00;
  align-items: flex-end;
`;

export default class AlignItems extends React.Component {
  static navigationOptions = {
    title: "Align Items"
  };

  render() {
    return (
      <StyledCard>
        <WrapperCenter>
          <StyledAlignItemsCenter />
        </WrapperCenter>
        <WrapperStart>
          <StyledAlignItemsStart />
        </WrapperStart>
        <WrapperEnd>
          <StyledAlignItemsEnd />
        </WrapperEnd>
      </StyledCard>
    );
  }
}
