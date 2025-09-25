import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import VisibilityOFF2 from "../assets/visibility-OFF2.svg";
import {
  Gap,
  Width,
  Padding,
  Height,
  FontSize,
  FontFamily,
  Color,
  Border,
} from "../GlobalStyles";

const FrameComponent3 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.mustUse8CharactersWrapper}>
        <Text style={styles.mustUse8}>Must use 8 characters</Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={styles.confirmPasswordField}>
          <Image
            style={styles.lockIcon}
            contentFit="cover"
            source={require("../assets/Lock.png")}
          />
          <TextInput
            style={styles.confirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
          />
        </View>
        <VisibilityOFF2
          style={styles.visibilityOffIcon}
          width={NaN}
          height={23}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParent: {
    height: 74,
    zIndex: 2,
    gap: Gap.gap_7,
    width: Width.width_328,
  },
  mustUse8CharactersWrapper: {
    width: Width.width_148,
    paddingLeft: Padding.padding_5,
    flexDirection: "row",
    height: Height.height_16,
  },
  mustUse8: {
    width: Width.width_146,
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.inderRegular,
    color: Color.colorWhite,
    textAlign: "left",
    zIndex: 2,
    height: Height.height_16,
  },
  rectangleParent: {
    height: Height.height_50_56,
    alignItems: "flex-end",
    paddingHorizontal: Padding.padding_12_5,
    paddingTop: 13,
    paddingBottom: 13,
    gap: 48,
    zIndex: 2,
    flexDirection: "row",
    width: Width.width_328,
  },
  frameChild: {
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
  confirmPasswordField: {
    height: 22,
    width: 228,
    gap: Gap.gap_8,
    flexDirection: "row",
  },
  lockIcon: {
    width: Width.width_21_53,
    height: Height.height_21_53,
    zIndex: 1,
  },
  confirmPassword: {
    height: Height.height_17,
    width: Width.width_201,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.fs_17,
    zIndex: 1,
  },
  visibilityOffIcon: {
    width: Width.width_23_02,
    height: 23,
    zIndex: 1,
  },
});

export default FrameComponent3;
