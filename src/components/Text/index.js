import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { defaultSize, defaultMargin } from "../../theme/fonts";
import { primaryBlack, gray } from "../../theme/colors";

const StyledText = styled.Text`
  color: ${props => (props.secondary ? gray : primaryBlack)};
  font-weight: ${props => (props.primary ? "bold" : "normal")};
  font-size: ${defaultSize};
  margin-bottom: ${defaultMargin};
  text-align: center;
`;

export default props => <StyledText {...props}>{props.children}</StyledText>;

StyledText.propTypes = {
  children: PropTypes.string.isRequired
};
