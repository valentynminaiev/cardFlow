import React from "react";
import { Text, View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import TransactionsScreen from "./screens/Transactions";
import MyCardsScreen from "./screens/MyCards";
import NewCardScreen from "./screens/NewCard";
import VerifyCardScreen from "./screens/VerifyCard";
import CurrenciesList from "./screens/CurrenciesList";

const TabNav = TabNavigator({
  Transactions: { screen: TransactionsScreen },
  MyCards: { screen: MyCardsScreen }
});

export default StackNavigator({
  Home: { screen: TabNav },
  NewCard: { screen: NewCardScreen },
  CurrenciesList: { screen: CurrenciesList },
  VerifyCard: { screen: VerifyCardScreen }
});
