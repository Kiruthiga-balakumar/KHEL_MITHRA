import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Vector96 from "../assets/Vector-96.svg";
import {
  Color,
  Width,
  Height,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

export type Component1Type = {
  /** Variant props */
  property1?: string;
};

const Component1 = ({ property1 = "Default" }: Component1Type) => {
  return (
    <View style={[styles.component2, styles.component2Layout]}>
      <View style={[styles.component2Child, styles.component2Layout]} />
      <Text style={styles.selectTest}>{`Select Test `}</Text>
      <Vector96 style={styles.component2Item} width={NaN} height={NaN} />
    </View>
  );
};

const styles = StyleSheet.create({
  component2Layout: {
    backgroundColor: Color.colorWhite,
    width: Width.width_376,
    height: Height.height_44,
  },
  component2: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 29,
    paddingTop: Padding.padding_16,
    paddingBottom: Padding.padding_15,
    zIndex: 1,
  },
  component2Child: {
    display: "none",
  },
  selectTest: {
    width: Width.width_94,
    fontSize: FontSize.fs_17,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray1200,
    textAlign: "left",
    display: "none",
  },
  component2Item: {
    width: Width.width_6_5,
    height: Height.height_13,
  },
});

export default Component1;
