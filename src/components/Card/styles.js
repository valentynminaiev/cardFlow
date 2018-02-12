import { StyleSheet } from "react-native";
import { defaultMargin, doubleMargin } from "../../theme/fonts";
import { backgroundGray, primaryBlack } from "../../theme/colors";
import { formatCreditCardNumber, formatExpDate } from "./format";

export default StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#f7f8f9",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 24,
    marginHorizontal: -defaultMargin,
    marginBottom: 30,
    alignItems: "flex-start"
  },
  cardHolder: {
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    backgroundColor: "#f5f5f5",
    height: 190,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.15,
    shadowRadius: 28,
    borderRadius: 10,
    elevation: 13,
    justifyContent: "flex-end"
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 13,
    ...StyleSheet.absoluteFillObject
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: defaultMargin,
    marginRight: 30
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.1
  },
  inputContainer: {
    paddingHorizontal: 20
  },
  cardNumberContainer: {}
});
