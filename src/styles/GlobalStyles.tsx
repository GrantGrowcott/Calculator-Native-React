import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
  // Button
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.black,
  },
  // Keyboard

  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },

  viewEntry: {
    height: 120,
    width: "90%",
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  screenFirstNumber: {
    fontSize: 96,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
});
