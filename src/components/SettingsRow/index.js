import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { doubleMargin } from "../../theme/fonts";
import { primaryBlack, gray } from "../../theme/colors";
import infoTip from "../../assets/images/info-tip.png";
import arrowRight from "../../assets/images/arrow-right.png";

export default props => (
  <ContainerView>
    <LabelView>
      <LabelText>{props.label}</LabelText>
      <PressView>
        <StyledImage source={infoTip} />
      </PressView>
    </LabelView>
    <TextView>
      <StyledText>{props.title}</StyledText>
      <ArrowImage source={arrowRight} />
    </TextView>
  </ContainerView>
);

const ContainerView = styled.View`
  align-self: stretch;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: ${gray};
  margin-bottom: ${doubleMargin};
`;

const PressView = styled.TouchableOpacity``;

const LabelView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextView = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 7;
`;

const LabelText = styled.Text`
  font-size: 13;
  color: ${gray};
`;

const StyledText = styled.Text`
  font-size: 18;
  color: ${primaryBlack};
`;

const StyledImage = styled.Image`
  width: 14;
  height: 14;
  margin-left: 5;
`;

const ArrowImage = styled.Image`
  width: 11;
  height: 18;
`;
