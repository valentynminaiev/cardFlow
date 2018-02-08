import React from "react";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Card from "../../components/Card";
import SettingsRow from "../../components/SettingsRow";
import ColorPicker from "../../components/ColorPicker";
import Button from "../../components/Button";
import { yellow } from "../../theme/colors";

export default class NewCard extends React.Component {
  handleChooseCurrency = () => {
    const { navigate } = this.props.navigation;

    navigate("CurrenciesList");
  };

  handleAddToCard = () => {
    const { navigate } = this.props.navigation;

    navigate("VerifyCard");
  };

  render() {
    const { params } = this.props.navigation.state;
    const selectedCurrency = params ? params.currency : "Choose currency";

    return (
      <Container padding>
        <Card />
        <SettingsRow
          label="Card currency:"
          title={selectedCurrency}
          onPress={this.handleChooseCurrency}
        />
        <ColorPicker onPress={() => console.log("press")} />
        <Button absolute rounded color={yellow} onPress={this.handleAddToCard}>
          Continue
        </Button>
      </Container>
    );
  }
}

NewCard.navigationOptions = ({ navigation }) => ({
  title: "New Card"
});
