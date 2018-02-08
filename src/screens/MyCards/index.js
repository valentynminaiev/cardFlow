import React from "react";
import { Image, View } from "react-native";
import Container from "../../components/Container";
import Text from "../../components/Text";
import StyledButton from "../../components/Button";
import cardError from "../../assets/images/card-error.png";
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
      <Container center>
        <Image source={cardError} style={{ marginBottom: 24 }} />
        <Text primary>The list is empty!</Text>
        <Text secondary>
          Add your cards to send and receive money instantly
        </Text>
        <StyledButton primary onPress={this.handleAddNewCard}>
          Add Card
        </StyledButton>
      </Container>
    );
  }
}
