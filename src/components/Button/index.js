import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { primaryBlack, blue } from "../../theme/colors";

const StyledView = styled.View`
  borderWidth: ${StyleSheet.hairlineWidth};
  borderColor: ${blue};
  borderRadius: 4;
  alignSelf: stretch;
`;

const StyledText = styled.Text`
  color: ${props => (props.primary ? blue : primaryBlack)};
  fontSize: 36;
  paddingVertical: 16;
  textAlign: center;
`;

const StyledButton = (props, { onPress }) => (
  <StyledView>
    <TouchableOpacity onPress={onPress}>
      <StyledText {...props}>{props.children}</StyledText>
    </TouchableOpacity>
  </StyledView>
);


StyledButton.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default StyledButton
