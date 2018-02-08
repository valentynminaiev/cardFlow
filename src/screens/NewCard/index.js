import React from "react";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Card from "../../components/Card";
import SettingsRow from "../../components/SettingsRow";
import ColorPicker from "../../components/ColorPicker";

export default class NewCard extends React.Component {
  handleChooseCurrency = () => {
    const { navigate } = this.props.navigation;

    navigate("CurrenciesList");
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
      </Container>
    );
  }
}

NewCard.navigationOptions = ({ navigation }) => ({
  title: "New Card"
});
