import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "react-navigation";

import FlexDirection from "./src/components/flexbox/FlexDirection";
import JustifyContent from "./src/components/flexbox/JustifyContent";
import AlignItems from "./src/components/flexbox/AlignItems";

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FlexDirection />
      </View>
    );
  }
}

const DrawerNavigator = createDrawerNavigator({
  FlexDirection: {
    screen: FlexDirection
  },
  JustifyContent: {
    screen: JustifyContent
  },
  AlignItems: {
    screen: AlignItems
  }
});

export default DrawerNavigator;
