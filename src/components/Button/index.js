import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";
import { defaultSize, defaultMargin, defaultPadding } from "../../theme/fonts";
import { white, blue } from "../../theme/colors";

const StyledView = styled.TouchableOpacity`
  background-color: ${props => props.color || "transparent"};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  border-width: 1;
  border-color: ${props => props.color || blue};
  border-radius: ${props => (props.rounded ? 55 : 10)};
  margin-vertical: ${defaultMargin};
  align-self: stretch;
  left: 0;
  right: 0;
  bottom: ${defaultPadding / 2};
  position: ${props => (props.absolute ? "absolute" : "relative")};
  margin-horizontal: ${props => (props.absolute ? "15" : 0)};
`;

const StyledText = styled.Text`
  color: ${props => (props.color ? white : blue)};
  font-size: ${defaultSize};
  padding-vertical: 15;
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
