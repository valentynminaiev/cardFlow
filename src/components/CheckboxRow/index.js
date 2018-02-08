import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { doubleMargin } from "../../theme/fonts";
import { blue, gray } from "../../theme/colors";
import checkIcon from "../../assets/images/check-icon.png";

export default props => (
  <ContainerView>
    <StyledCheckbox checked={props.checked}>
      {props.checked && <CheckIcon source={checkIcon} />}
    </StyledCheckbox>
    <StyledText>{props.title}</StyledText>
  </ContainerView>
);

const ContainerView = styled.View`
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: ${gray};
  padding-vertical: 20;
`;

const StyledCheckbox = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.checked ? blue : "transparent")};
  border-color: ${props => (props.checked ? "transparent" : gray)};
  border-width: ${props => (props.checked ? 0 : StyleSheet.hairlineWidth)};
  width: 23;
  height: 23;
  border-radius: 50;
  margin-right: 7;
`;

const StyledText = styled.Text`
  font-size: 20;
`;

const CheckIcon = styled.Image`
  width: 11;
  height: 9;
`;
