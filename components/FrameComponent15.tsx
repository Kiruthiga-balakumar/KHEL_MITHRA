import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  Height,
  Width,
  Color,
  FontFamily,
  FontSize,
  Gap,
} from "../GlobalStyles";

const FrameComponent15 = () => {
  return (
    <View style={styles.lineParent}>
      <View style={[styles.frameChild, styles.childPosition]} />
      <View style={styles.incomeDetails}>
        <View style={[styles.incomeDetailsChild, styles.childPosition]} />
        <Text style={[styles.incomeRange, styles.stateTypo]}>Income range</Text>
        <Image
          style={[styles.coinInHand, styles.coinInHandLayout]}
          contentFit="cover"
        />
      </View>
      <View style={[styles.addressParent, styles.coinInHandPosition]}>
        <Image style={styles.coinInHandLayout} contentFit="cover" />
        <Text style={[styles.state, styles.stateTypo]}>State</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    height: Height.height_1,
    width: Width.width_324,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    zIndex: 2,
    left: 0,
    position: "absolute",
  },
  stateTypo: {
    textAlign: "left",
    color: Color.colorGray1200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_17,
    height: Height.height_23,
  },
  coinInHandLayout: {
    height: Height.height_20,
    width: Width.width_20,
    zIndex: 2,
  },
  coinInHandPosition: {
    left: 17,
    position: "absolute",
  },
  lineParent: {
    height: 84,
    width: Width.width_323,
  },
  frameChild: {
    top: 83,
    zIndex: 2,
  },
  incomeDetails: {
    height: Height.height_24,
    top: 0,
    left: 0,
    position: "absolute",
    width: Width.width_323,
  },
  incomeDetailsChild: {
    top: 23,
    zIndex: 2,
  },
  incomeRange: {
    left: 44,
    width: 120,
    zIndex: 3,
    height: Height.height_23,
    top: 0,
    position: "absolute",
    color: Color.colorGray1200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_17,
  },
  coinInHand: {
    left: 17,
    position: "absolute",
    top: 0,
  },
  addressParent: {
    top: 59,
    width: 105,
    flexDirection: "row",
    gap: Gap.gap_7,
    height: Height.height_23,
  },
  state: {
    width: Width.width_81,
    height: Height.height_23,
    zIndex: 2,
  },
});

export default FrameComponent15;
