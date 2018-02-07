import React from "react";
import { View } from "react-native";
import Text from "../../components/Text";
import StyledButton from "../../components/Button";
import s from "./styles";

export default class MyCardsScreen extends React.Component {
  static navigationOptions = {
    title: "My Cards"
  };

  handleAddNewCard = () => {
    const { navigate } = this.props.navigation;

    navigate("newCard");
  };

  render() {
    return (
      <View style={s.container}>
        <Text primary>The list is empty!</Text>
        <Text secondary>
          Add your cards to send and receive money instantly
        </Text>
        <StyledButton primary onPress={this.handleAddNewCard}>
          Add Card
        </StyledButton>
      </View>
    );
  }
}
