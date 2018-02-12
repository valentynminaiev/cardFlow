import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import Text from "../../components/Text";
import StyledButton from "../../components/Button";
import cardError from "../../assets/images/card-error.png";
import { doubleMargin } from "../../theme/fonts";

const Image = styled.Image`
  margin-bottom: ${doubleMargin};
  width: 93;
  height: 64;
  resize-mode: contain;
`;

export default class MyCardsScreen extends React.Component {
  static navigationOptions = {
    title: "My Cards"
  };

  handleAddNewCard = () => {
    const { navigate } = this.props.navigation;

    navigate("NewCard");
  };

  render() {
    return (
      <Container center withPadding>
        <Image source={cardError} />
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
