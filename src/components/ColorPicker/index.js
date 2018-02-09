import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { primaryBlack, gray } from "../../theme/colors";
import infoTip from "../../assets/images/info-tip.png";
import arrowRight from "../../assets/images/arrow-right.png";
import { labelSize } from "../../theme/fonts";
import Colors from "./colors";
import checkIcon from "../../assets/images/check-icon.png";

const ContainerView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const ContainerScrollView = styled.ScrollView`
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: ${gray};
`;

const LabelText = styled.Text`
  font-size: ${labelSize};
  color: ${gray};
`;

const ColorsList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-horizontal: -7;
  justify-content: space-around;
`;

const ColorView = styled.TouchableOpacity`
  width: 50;
  height: 50;
  border-radius: 50;
  margin-horizontal: 7;
  margin-vertical: 7;
  background-color: ${props => props.color || primaryBlack};
  justify-content: center;
  align-items: center;
`;

const CheckIcon = styled.Image`
  width: 11;
  height: 9;
`;

export default ({ selected, onPress }) => (
  <ContainerView>
    <LabelText>Color:</LabelText>
    <ColorsList>
      {Colors.map(color => (
        <ColorView
          key={color.code}
          color={color.code}
          onPress={() => onPress(color.code)}
        >
          {color.code === selected && <CheckIcon source={checkIcon} />}
        </ColorView>
      ))}
    </ColorsList>
  </ContainerView>
);
