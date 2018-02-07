import React from "react";
import { View } from "react-native";
import Text from "../../components/Text";

export default class NewCard extends React.Component {
  static navigationOptions = {
    title: "New Card"
  };

  render() {
    return (
      <View>
        <Text primary>Add New Card</Text>
      </View>
    );
  }
}
