import React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import SettinsSection from "../../components/SettingsSection";
import CheckboxRow from "../../components/CheckboxRow";
import Text from "../../components/Text";
import StyledButton from "../../components/Button";
import Button from "../../components/Button";
import currencies from "./currenciesData";
import { BackButton, CardButton } from "../../navigationConfig";
import { doubleMargin, defaultMargin } from "../../theme/fonts";
import { white, yellow } from "../../theme/colors";

const StyledScrollView = styled.ScrollView`
  align-self: stretch;
  padding-horizontal: ${defaultMargin};
  background-color: ${white};
  margin-bottom: ${doubleMargin};
`;

const ButtonContainer = styled.View`
  align-self: stretch;
  margin-horizontal: ${defaultMargin};
`;

export default class CurrenciesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCurrency: {}
    };
  }

  handleSelect = selectedCurrency => {
    this.setState({
      selectedCurrency
    });
  };

  handleChoose = () => {
    const { selectedCurrency } = this.state;
    const { state, pop } = this.props.navigation;
    const { onCurrencyUpdate } = state.params;
    onCurrencyUpdate(selectedCurrency);
    pop();
  };

  render() {
    const { selectedCurrency } = this.state;

    return (
      <Container>
        <StyledScrollView>
          <SettinsSection label="Popular currencies">
            {currencies.popular.map(currency => (
              <CheckboxRow
                key={currency.id}
                checked={selectedCurrency.id === currency.id}
                onPress={this.handleSelect}
                {...currency}
              />
            ))}
          </SettinsSection>
          <SettinsSection label="All currencies">
            {currencies.all.map(currency => (
              <CheckboxRow
                key={currency.id}
                checked={selectedCurrency.id === currency.id}
                onPress={this.handleSelect}
                {...currency}
              />
            ))}
          </SettinsSection>
        </StyledScrollView>
        <ButtonContainer>
          <Button absolute rounded color={yellow} onPress={this.handleChoose}>
            Choose currency
          </Button>
        </ButtonContainer>
      </Container>
    );
  }
}

CurrenciesList.navigationOptions = ({ navigation }) => ({
  title: "Currencies",
  headerLeft: <BackButton onPress={() => navigation.goBack()} />,
  headerRight: <CardButton onPress={() => navigation.goBack()} />
});
