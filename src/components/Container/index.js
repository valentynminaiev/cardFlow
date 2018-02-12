import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { defaultMargin } from "../../theme/fonts";
import { primaryBlack, blue, white } from "../../theme/colors";

const StyledView = styled.View`
  flex: 1;
  justify-content: ${props => (props.center ? "center" : "flex-start")};
  align-items: ${props => (props.center ? "center" : "flex-start")};
  padding-horizontal: ${props => (props.withPadding ? defaultMargin : 0)};
  background-color: ${props => props.backgroundColor || white};
  flex-direction: ${props => (props.row ? "row" : "column")};
`;

export default props => <StyledView {...props}>{props.children}</StyledView>;

StyledView.propTypes = {};
