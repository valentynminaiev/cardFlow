import React from "react";
import styled from "styled-components";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import TransactionsScreen from "./screens/Transactions";
import MyCardsScreen from "./screens/MyCards";
import NewCardScreen from "./screens/NewCard";
import VerifyCardScreen from "./screens/VerifyCard";
import CurrenciesList from "./screens/CurrenciesList";
import TransactionsIcon from "./assets/images/transactions.png";
import TransactionsIconFocused from "./assets/images/transactions-focused.png";
import MyCardsIcon from "./assets/images/my-cards.png";
import MyCardsIconFocused from "./assets/images/my-cards-focused.png";
import backIcon from "./assets/images/back-icon.png";
import cardIcon from "./assets/images/card-header-icon.png";

export const BackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={backIcon} />
  </TouchableOpacity>
);

export const CardButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={cardIcon} />
  </TouchableOpacity>
);

const TabNav = TabNavigator({
  Transactions: {
    screen: TransactionsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Image source={focused ? TransactionsIconFocused : TransactionsIcon} />
      )
    }
  },
  MyCards: {
    screen: MyCardsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Image source={focused ? MyCardsIconFocused : MyCardsIcon} />
      )
    }
  }
});

export default StackNavigator(
  {
    Home: { screen: TabNav },
    NewCard: { screen: NewCardScreen },
    CurrenciesList: { screen: CurrenciesList },
    VerifyCard: { screen: VerifyCardScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        paddingHorizontal: 10
      }
    })
  }
);
