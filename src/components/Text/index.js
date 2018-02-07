import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { primaryBlack, gray } from "../../theme/colors";

const StyledView = styled.View``;

const StyledText = styled.Text`
  color: ${props => (props.secondary ? gray : primaryBlack)};
  fontWeight: ${props => (props.primary ? "bold" : "normal")};
  fontSize: 36;
`;

export default ({ children }) => (
  <StyledView>
    <StyledText>{children}</StyledText>
  </StyledView>
);

StyledText.propTypes = {
  children: PropTypes.string.isRequired
};
