import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { primaryBlack, blue, white } from "../../theme/colors";

const StyledView = styled.View``;

const StyledText = styled.Text``;

const StyledTextInput = styled.TextInput`
  height: 40;
  font-size: ${props => (props.large ? 26 : 16)};
`;

export default props => (
  <StyledView>
    {props.label && <StyledText>{props.label}</StyledText>}
    <StyledTextInput
      placeholderTextColor={primaryBlack}
      maxLength={props.maxLength || 19}
      {...props}
    />
  </StyledView>
);
