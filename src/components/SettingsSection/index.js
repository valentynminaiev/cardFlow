import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  sectionMargin,
  doubleMargin,
  defaultPadding,
  labelSize
} from "../../theme/fonts";
import { blue, gray } from "../../theme/colors";
import checkIcon from "../../assets/images/check-icon.png";

const SettingsSection = ({ label, children }) => (
  <StyledView>
    <StyledLabel>{label}</StyledLabel>
    {children && children}
  </StyledView>
);

export default SettingsSection;

const StyledView = styled.View`
  width: 100%;
  margin-top: ${doubleMargin};
  margin-bottom: ${sectionMargin};
`;

const StyledLabel = styled.Text`
  font-size: ${labelSize};
  color: ${gray};
`;

SettingsSection.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.array
};
