import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import GenderIcon from "../assets/Gender-Icon.svg";
import {
  Color,
  Height,
  Width,
  Padding,
  Gap,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export type ComponentType = {
  /** Variant props */
  property1?: string;
};

const Component = ({ property1 = "Default" }: ComponentType) => {
  return (
    <Pressable style={[styles.component1, styles.component1Layout]}>
      <View style={[styles.component1Child, styles.component1Layout]} />
      <Text style={styles.gender}>Gender</Text>
      <View style={styles.genderIconWrapper}>
        <GenderIcon style={styles.genderIcon} width={NaN} height={NaN} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  component1Layout: {
    backgroundColor: Color.colorWhite,
    height: Height.height_44,
    width: Width.width_137,
  },
  component1: {
    flexDirection: "row",
    paddingHorizontal: Padding.padding_9,
    paddingTop: Padding.padding_11,
    paddingBottom: Padding.padding_12,
    gap: Gap.gap_30,
  },
  component1Child: {
    display: "none",
  },
  gender: {
    height: Height.height_21,
    width: Width.width_64,
    fontSize: FontSize.fs_17,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray1300,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  genderIconWrapper: {
    height: Height.height_17,
    paddingTop: Padding.padding_4,
    width: Width.width_6_5,
  },
  genderIcon: {
    height: Height.height_13,
    width: Width.width_6_5,
  },
});

export default Component;
