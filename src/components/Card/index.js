import React, { PureComponent } from "react";
import { Image, TextInput, InteractionManager } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import Container from "../Container";
import Input from "../Input";
import Text from "../Text";
import { defaultMargin, doubleMargin } from "../../theme/fonts";
import { backgroundGray, primaryBlack } from "../../theme/colors";
import { formatCreditCardNumber, formatExpDate } from "./format";

const ViewContainer = styled.View`
  align-self: stretch;
  background-color: ${backgroundGray};
  padding-horizontal: ${doubleMargin};
  padding-vertical: ${doubleMargin};
  margin-horizontal: ${-defaultMargin};
  margin-bottom: ${doubleMargin};
`;
const Cardholder = styled.View`
  justify-content: flex-end;
  background-color: transparent;
  align-self: stretch;
  height: 180;
  padding-horizontal: ${doubleMargin};
  shadow-opacity: 0.15;
  shadow-radius: 8;
  shadow-color: #000;
  shadow-offset: 0 0;
  border-radius: 13;
  overflow: hidden;
`;

const BottomRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20;
  margin-bottom: ${defaultMargin};
`;

const ImageBackground = styled.Image`
  width: 100%;
  height: 100%;
  z-index: 99;
`;

const ColorOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.color || "rgba(0, 0, 0, 0.1)"};
  z-index: -1;
`;

const CardText = styled.Text`
  font-size: 26;
  justify-content: center;
  align-items: center;
`;

export default class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: null,
      expDate: null,
      cvv: null,
      color: null
    };
  }

  componentDidMount() {
    if (!this.state.cardNumber) {
      InteractionManager.runAfterInteractions(() => {
        this.textInput.focus();
      });
    }
  }

  onCardNumberInput = text => {
    this.setState({
      cardNumber: formatCreditCardNumber(text)
    });
  };

  onExpDateInput = text => this.setState({ expDate: formatExpDate(text) });

  onCVVInput = cvv => this.setState({ cvv });

  render() {
    const { color } = this.props;
    const { cardNumber, expDate, cvv } = this.state;

    return (
      <ViewContainer>
        <Cardholder>
          <ColorOverlay color={color} />
          <CardText>{cardNumber}</CardText>
          <Input
            large
            placeholder="0000 0000 0000 0000"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={this.onCardNumberInput}
            value={cardNumber}
            inputRef={el => (this.textInput = el)}
            onSubmitEditing={() => this.expDateInput.focus()}
            underlineColorAndroid={"transparent"}
          />
          <BottomRow>
            <Input
              label="Exp"
              placeholder="00/00"
              maxLength={5}
              keyboardType="numeric"
              returnKeyType="done"
              onChangeText={this.onExpDateInput}
              value={expDate}
              inputRef={el => (this.expDateInput = el)}
              onSubmitEditing={() => this.cvvInput.focus()}
              underlineColorAndroid={"transparent"}
            />
            <Input
              label="CVV"
              placeholder="XXX"
              maxLength={3}
              keyboardType="numeric"
              returnKeyType="done"
              onChangeText={this.onCVVInput}
              value={cvv}
              inputRef={el => (this.cvvInput = el)}
              underlineColorAndroid={"transparent"}
            />
          </BottomRow>
        </Cardholder>
      </ViewContainer>
    );
  }
}
