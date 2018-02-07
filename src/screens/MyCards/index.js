import React from "react";
import { Text, View } from "react-native";
import s from "./styles";

export default class MyCardsScreen extends React.Component {
  static navigationOptions = {
    title: "My Cards"
  };

  render() {
    return (
      <View style={s.container}>
        <Text>My Cards</Text>
      </View>
    );
  }
}
