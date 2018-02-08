import React from "react";
import Container from "../../components/Container";
import Text from "../../components/Text";

const TransactionsScreen = () => (
  <Container center>
    <Text primary>Transactions</Text>
  </Container>
);

TransactionsScreen.navigationOptions = {
  title: "Transactions"
};

export default TransactionsScreen;
