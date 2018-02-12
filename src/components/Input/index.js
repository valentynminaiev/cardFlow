import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { primaryBlack, blue, white, gray } from "../../theme/colors";
import { labelSize, large, defaultSize } from "../../theme/fonts";

const StyledView = styled.View``;

const StyledLabel = styled.Text`
  font-size: ${labelSize};
  color: ${gray};
  font-family: "Courier";
`;

const StyledTextInput = styled.TextInput`
  font-size: ${props => (props.large ? large : defaultSize)};
  color: #22292e;
  font-family: "Courier";
  border-bottom-width: 1;
  border-bottom-color: #007aff;
`;

export default class Input extends PureComponent {
  render() {
    const { inputRef, label, maxLength } = this.props;

    return (
      <StyledView>
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledTextInput
          placeholderTextColor={primaryBlack}
          maxLength={maxLength || 19}
          {...this.props}
          innerRef={inputRef}
        />
      </StyledView>
    );
  }
}
