import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import SettinsSection from "../../components/SettingsSection";
import CheckboxRow from "../../components/CheckboxRow";
import Text from "../../components/Text";
import StyledButton from "../../components/Button";
import Button from "../../components/Button";
import currencies from "./currenciesData";
import { defaultMargin } from "../../theme/fonts";
import { white, yellow } from "../../theme/colors";

const StyledScrollView = styled.ScrollView`
  padding-horizontal: ${defaultMargin};
  background-color: ${white};
`;

export default class CurrenciesList extends React.Component {
  static navigationOptions = {
    title: "Currencies"
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedCurrency: null
    };
  }

  handleSelect = selectedCurrency => {
    this.setState({
      selectedCurrency
    });
  };

  handleCurrencyChoose = currency => {
    const { navigate } = this.props.navigation;
    navigate("");
  };

  render() {
    const { selectedCurrency } = this.state;

    return (
      <StyledScrollView padding>
        <SettinsSection label="Popular currencies">
          {currencies.popular.map(currency => (
            <CheckboxRow
              key={currency.id}
              checked={selectedCurrency === currency.id}
              onPress={this.handleSelect}
              {...currency}
            />
          ))}
        </SettinsSection>
        <SettinsSection label="All currencies">
          {currencies.all.map(currency => (
            <CheckboxRow
              key={currency.id}
              checked={selectedCurrency === currency.id}
              onPress={this.handleSelect}
              {...currency}
            />
          ))}
        </SettinsSection>
        <Button rounded color={yellow} onPress={this.handleCurrencyChoose}>
          Choose currency
        </Button>
      </StyledScrollView>
    );
  }
}
