import React, { PureComponent } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import Container from "../Container";
import Input from "../Input";
import { defaultMargin, doubleMargin } from "../../theme/fonts";
import { backgroundGray, primaryBlack } from "../../theme/colors";
import card from "../../assets/images/card.png";

const ViewContainer = styled.View`
  align-self: stretch;
  background-color: ${backgroundGray};
  padding-horizontal: ${doubleMargin};
  padding-vertical: ${doubleMargin};
  margin-horizontal: ${-defaultMargin};
  margin-bottom: ${doubleMargin};
`;
const Cardholder = styled.View`
  justify-content: flex-end;
  background-color: transparent;
  align-self: stretch;
  height: 180;
  shadow-opacity: 0.15;
  shadow-radius: 8;
  shadow-color: #000;
  shadow-offset: 0 0;
  border-radius: 13;
  overflow: hidden;
`;

const BottomRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10;
`;

const ImageBackground = styled.Image`
  width: 100%;
  height: 100%;
  z-index: 99;
`;

const ColorOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.color};
  z-index: -1;
`;

export default class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <ViewContainer>
        <Cardholder>
          <ImageBackground source={card} />
          <ColorOverlay color="rgba(0, 0, 0, 0.1)" />
          {/* <ImageBackground source={card}> */}
          <Input large placeholder="0000 0000 0000 0000" />
          <BottomRow>
            <Input label="Exp" placeholder="00/00" maxLength={5} />
            <Input label="CVV" placeholder="XXX" maxLength={3} />
          </BottomRow>
          {/* </ImageBackground> */}
        </Cardholder>
      </ViewContainer>
    );
  }
}
