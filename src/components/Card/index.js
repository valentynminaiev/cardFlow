import React, { PureComponent } from "react";
import {
  View,
  Image,
  TextInput,
  InteractionManager,
  StyleSheet
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import s from "./styles";
import PropTypes from "prop-types";
import Container from "../Container";
import Input from "../Input";
import Text from "../Text";
import { defaultMargin, doubleMargin } from "../../theme/fonts";
import { backgroundGray, primaryBlack } from "../../theme/colors";
import { formatCreditCardNumber, formatExpDate } from "./format";
import MapIcon from "../../assets/images/map.png";

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
    // if (!this.state.cardNumber) {
    //   InteractionManager.runAfterInteractions(() => {
    //     this.textInput.focus();
    //   });
    // }
  }

  onCardNumberInput = text => {
    this.setState({
      cardNumber: formatCreditCardNumber(text)
    });
  };

  onExpDateInput = text => this.setState({ expDate: formatExpDate(text) });

  onCVVInput = cvv => this.setState({ cvv });

  render() {
    const { start, end } = this.props.color;
    const { cardNumber, expDate, cvv } = this.state;

    return (
      <View style={s.container}>
        <View style={s.cardHolder}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[start, end]}
            style={s.linearGradient}
          />
          <Image style={s.imageBackground} source={MapIcon} />
          <View style={s.inputContainer}>
            <View style={s.cardNumberContainer}>
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
            </View>
            <View style={s.bottomRow}>
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
            </View>
          </View>
        </View>
      </View>
    );
  }
}
