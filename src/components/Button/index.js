import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { defaultSize, defaultMargin } from "../../theme/fonts";
import { white, blue } from "../../theme/colors";

const StyledView = styled.TouchableOpacity`
  background-color: ${props => props.color || "transparent"};
  border-width: 1;
  border-color: ${props => props.color || blue};
  border-radius: ${props => (props.rounded ? 55 : 10)};
  margin-vertical: ${defaultMargin};
  align-self: stretch;
`;

const StyledText = styled.Text`
  color: ${props => (props.color ? white : blue)};
  font-size: ${defaultSize};
  padding-vertical: ${defaultMargin};
  text-align: center;
`;

const StyledButton = (props, { onPress }) => (
  <StyledView onPress={onPress} {...props}>
    <StyledText {...props}>{props.children}</StyledText>
  </StyledView>
);

StyledButton.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default StyledButton;
