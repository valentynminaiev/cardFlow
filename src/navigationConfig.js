import React from "react";
import { Text, View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import TransactionsScreen from "./screens/Transactions";
import MyCardsScreen from "./screens/MyCards";

const TabNav = TabNavigator({
  Transactions: { screen: TransactionsScreen },
  MyCards: { screen: MyCardsScreen }
});

export default StackNavigator({
  Home: { screen: TabNav }
});
