import React from "react";
import { View } from "react-native";
import s from "./styles";
import Text from "../../components/Text";
export default class TransactionsScreen extends React.Component {
  static navigationOptions = {
    title: "Transactions"
  };

  render() {
    return (
      <View style={s.container}>
        <Text primary>Transactions</Text>
      </View>
    );
  }
}
