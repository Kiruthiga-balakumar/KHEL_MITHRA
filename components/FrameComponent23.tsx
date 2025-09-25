import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import FrameComponent7 from "./FrameComponent7";
import Component1 from "./Component1";
import {
  Color,
  FontFamily,
  FontSize,
  Height,
  Padding,
  Width,
  Border,
} from "../GlobalStyles";

const FrameComponent23 = () => {
  return (
    <View style={styles.frameParent}>
      <FrameComponent7 />
      <View style={styles.component2Parent}>
        <Component1 property1="Default" />
        <View style={styles.sitUpsWrapper}>
          <Text style={[styles.sitUps, styles.sitTypo]}> Sit-Ups</Text>
        </View>
      </View>
      <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
        <View
          style={[styles.sitUpsBackgroundParent, styles.frameWrapperLayout]}
        >
          <View style={styles.sitUpsBackground} />
          <Text style={[styles.sitUpsmp4, styles.sitTypo]}>Sit-ups.mp4</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sitTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_17,
  },
  frameWrapperLayout: {
    height: Height.height_102,
    flexDirection: "row",
  },
  frameParent: {
    height: 318,
    zIndex: 1,
    paddingBottom: Padding.padding_16,
    gap: 31,
    width: Width.width_376,
  },
  component2Parent: {
    height: Height.height_44,
    flexDirection: "row",
    width: Width.width_376,
  },
  sitUpsWrapper: {
    height: 34,
    paddingTop: Padding.padding_12_5,
    marginLeft: -344,
    width: 233,
  },
  sitUps: {
    zIndex: 2,
    width: 233,
  },
  frameWrapper: {
    width: Width.width_352,
    paddingLeft: Padding.padding_24,
  },
  sitUpsBackgroundParent: {
    justifyContent: "flex-end",
    paddingHorizontal: Padding.padding_53,
    paddingTop: 38,
    paddingBottom: 43,
    width: Width.width_328,
  },
  sitUpsBackground: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_10,
    backgroundColor: Color.colorGray1400,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: Width.width_328,
  },
  sitUpsmp4: {
    height: Height.height_21,
    width: Width.width_165,
    zIndex: 1,
  },
});

export default FrameComponent23;
