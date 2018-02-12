import React from "react";
import { Alert, ScrollView, TouchableOpacity, Image } from "react-native";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Card from "../../components/Card";
import SettingsRow from "../../components/SettingsRow";
import ColorPicker from "../../components/ColorPicker";
import Button from "../../components/Button";
import { BackButton, CardButton } from "../../navigationConfig";
import { yellow } from "../../theme/colors";

export default class NewCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: {
        key: null,
        colors: {
          start: "#F5F5F5",
          end: "#FBFBFB"
        }
      },
      selectedCurrency: null
    };
  }

  onCurrencyUpdate = selectedCurrency => {
    this.setState({
      selectedCurrency
    });
  };

  handleChooseCurrency = () => {
    const { selectedCurrency } = this.state;
    const { navigate } = this.props.navigation;

    navigate("CurrenciesList", {
      selectedCurrency,
      onCurrencyUpdate: this.onCurrencyUpdate
    });
  };

  handleAddToCard = () => {
    const { selectedCurrency } = this.state;
    const { navigate } = this.props.navigation;
    selectedCurrency
      ? navigate("VerifyCard")
      : Alert.alert("Error", "Please fill the required field");
  };

  handleColorSelect = selectedColor => {
    this.setState({
      selectedColor
    });
  };

  handleInfoPress = () => {
    Alert.alert(
      "Card currency",
      "Some message to show regarding card currency"
    );
  };

  render() {
    const { params } = this.props.navigation.state;
    const { selectedColor, selectedCurrency } = this.state;
    const currencyTitle = selectedCurrency
      ? selectedCurrency.title
      : "Choose currency";
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Container withPadding>
          <Card color={selectedColor.colors} />
          <SettingsRow
            label="Card currency:"
            title={currencyTitle}
            onTooltipPress={this.handleInfoPress}
            onPress={this.handleChooseCurrency}
          />
          <ColorPicker
            selected={selectedColor}
            onPress={this.handleColorSelect}
          />
          <Button
            absolute
            rounded
            color={yellow}
            onPress={this.handleAddToCard}
          >
            Continue
          </Button>
        </Container>
      </ScrollView>
    );
  }
}

NewCard.navigationOptions = ({ navigation }) => ({
  title: "New Card",
  headerLeft: <BackButton onPress={() => navigation.goBack()} />,
  headerRight: <CardButton onPress={() => navigation.goBack()} />
});
