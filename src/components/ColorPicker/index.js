import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
import { primaryBlack, gray } from "../../theme/colors";
import infoTip from "../../assets/images/info-tip.png";
import arrowRight from "../../assets/images/arrow-right.png";
import { labelSize } from "../../theme/fonts";
import Colors from "./colors";
import checkIcon from "../../assets/images/check-icon.png";

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 13
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  color: {
    justifyContent: "center",
    alignItems: "center"
  },
  colorGradient: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 3,
    marginVertical: 7,
    justifyContent: "center",
    alignItems: "center"
  }
});

const ContainerView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const LabelText = styled.Text`
  font-size: ${labelSize};
  color: ${gray};
  margin-bottom: 7;
`;

const ColorsList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-horizontal: -7;
  justify-content: space-around;
`;

const CheckIcon = styled.Image`
  position: absolute;
  width: 11;
  height: 9;
`;

export default ({ selected, onPress }) => (
  <ContainerView>
    <LabelText>Color:</LabelText>
    <ColorsList>
      {Object.keys(Colors).map(key => (
        <TouchableOpacity
          key={key}
          style={styles.color}
          onPress={() => onPress({ key, colors: Colors[key] })}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            colors={[Colors[key].start, Colors[key].end]}
            style={styles.colorGradient}
          />
          {key === selected.key && <CheckIcon source={checkIcon} />}
        </TouchableOpacity>
      ))}
    </ColorsList>
  </ContainerView>
);
