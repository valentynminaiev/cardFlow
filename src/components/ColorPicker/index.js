import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { primaryBlack, gray } from "../../theme/colors";
import infoTip from "../../assets/images/info-tip.png";
import arrowRight from "../../assets/images/arrow-right.png";

const ContainerView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ContainerScrollView = styled.ScrollView`
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: ${gray};
`;

const LabelText = styled.Text`
  font-size: 13;
  color: ${gray};
`;

const ColorsList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-horizontal: -7;
`;

const ColorView = styled.View`
  width: 50;
  height: 50;
  border-radius: 50;
  margin-horizontal: 7;
  margin-vertical: 7;
  background-color: ${props => props.color || primaryBlack};
`;

export default props => (
  <ContainerView>
    <LabelText>Color:</LabelText>
    <ContainerView>
      <ColorView />
      <ColorView />
      <ColorView />
      <ColorView />
      <ColorView />
      <ColorView />
      <ColorView />
      <ColorView />
    </ContainerView>
  </ContainerView>
);
