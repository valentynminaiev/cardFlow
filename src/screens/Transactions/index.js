import React from "react";
import { Text, View } from "react-native";
import s from "./styles";

export default class TransactionsScreen extends React.Component {
  static navigationOptions = {
    title: "Transactions"
  };

  render() {
    return (
      <View style={s.container}>
        <Text>Transactions</Text>
      </View>
    );
  }
}
