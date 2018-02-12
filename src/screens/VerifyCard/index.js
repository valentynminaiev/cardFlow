import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import Text from "../../components/Text";
import StyledButton from "../../components/Button";
import cardError from "../../assets/images/card-error.png";
import { doubleMargin } from "../../theme/fonts";
import { yellow } from "../../theme/colors";
import { BackButton } from "../../navigationConfig";

const Image = styled.Image`
  margin-bottom: ${doubleMargin};
`;

export default class VerifyCard extends React.Component {
  handleCardVerification = () => {
    const { navigate } = this.props.navigation;

    navigate("MyCards");
  };

  render() {
    return (
      <Container center withPadding>
        <Image source={cardError} />
        <Text primary>Card Verification</Text>
        <Text secondary>
          Your card provider requires secure verification. We will charge this
          card with a small amount which is immediately refunded.
        </Text>
        <Text secondary>Please follow instructions on the next screen.</Text>
        <StyledButton
          absolute
          color={yellow}
          onPress={this.handleCardVerification}
        >
          Verify
        </StyledButton>
      </Container>
    );
  }
}

VerifyCard.navigationOptions = ({ navigation }) => ({
  title: "Card Verification",
  headerLeft: <BackButton onPress={() => navigation.goBack()} />
});
