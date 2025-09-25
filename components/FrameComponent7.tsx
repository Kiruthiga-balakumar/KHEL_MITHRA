import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Color,
  Border,
  Height,
  Width,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const FrameComponent7 = () => {
  return (
    <View style={[styles.instructionParent, styles.frameChildLayout]}>
      <Text style={styles.instruction}>Instruction:</Text>
      <View style={styles.recordYourFitnessTestAsOuWrapper}>
        <Text style={styles.recordYourFitness}>
          Record your fitness test as our guidelines.
        </Text>
      </View>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    borderWidth: 1,
    borderColor: Color.colorGray1200,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_6,
    height: Height.height_93,
    width: Width.width_376,
  },
  instructionParent: {
    paddingHorizontal: Padding.padding_13,
    paddingTop: Padding.padding_10,
    paddingBottom: Padding.padding_12,
    zIndex: 1,
  },
  instruction: {
    width: Width.width_112_8,
    height: Height.height_22,
    fontSize: FontSize.fs_24,
    fontWeight: "500",
    fontFamily: FontFamily.leagueSpartanMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  recordYourFitnessTestAsOuWrapper: {
    width: Width.width_299,
    height: Height.height_50,
    flexDirection: "row",
    paddingLeft: Padding.padding_53,
    marginTop: -1,
  },
  recordYourFitness: {
    width: Width.width_246,
    fontSize: FontSize.fs_20,
    fontFamily: FontFamily.inderRegular,
    color: Color.colorGray1600,
    textAlign: "left",
  },
  frameChild: {
    display: "none",
    zIndex: 3,
  },
});

export default FrameComponent7;
