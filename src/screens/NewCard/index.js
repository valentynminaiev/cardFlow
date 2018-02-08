import React from "react";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Card from "../../components/Card";
import SettingsRow from "../../components/SettingsRow";
import ColorPicker from "../../components/ColorPicker";

export default class NewCard extends React.Component {
  static navigationOptions = {
    title: "New Card"
  };

  handleChooseCurrency = () => {
    const { navigate } = this.props.navigation;

    navigate("CurrenciesList");
  };

  render() {
    return (
      <Container padding>
        <Card />
        <SettingsRow
          label="Card currency:"
          title="Choose currency"
          onPress={this.handleChooseCurrency}
        />
        <ColorPicker onPress={() => console.log("press")} />
      </Container>
    );
  }
}
