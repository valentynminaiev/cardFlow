import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { primaryBlack, blue, white, gray } from "../../theme/colors";
import { labelSize, large, defaultSize } from "../../theme/fonts";

const StyledView = styled.View``;

const StyledLabel = styled.Text`
  font-size: ${labelSize};
  color: ${gray};
`;

const StyledTextInput = styled.TextInput`
  font-size: ${props => (props.large ? large : defaultSize)};
`;

export default props => (
  <StyledView>
    {props.label && <StyledLabel>{props.label}</StyledLabel>}
    <StyledTextInput
      placeholderTextColor={primaryBlack}
      maxLength={props.maxLength || 19}
      {...props}
    />
  </StyledView>
);
