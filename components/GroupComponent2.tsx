import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontFamily,
  Height,
  Padding,
  Gap,
  Width,
  BoxShadow,
  Border,
  FontSize,
} from "../GlobalStyles";

const GroupComponent2 = () => {
  return (
    <View style={styles.starParent}>
      <View style={styles.star} />
      <View style={styles.medalPlacement}>
        <Image
          style={styles.stPlaceMedal}
          contentFit="cover"
          source={require("../assets/1st-Place-Medal.png")}
        />
        <View style={styles.secondPlace}>
          <Text style={[styles.arjunReddy, styles.cmTypo]}>Arjun Reddy</Text>
        </View>
      </View>
      <View style={styles.centimeter}>
        <Text style={[styles.cm, styles.cmTypo]}>54 cm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cmTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    zIndex: 1,
  },
  starParent: {
    height: Height.height_70,
    paddingHorizontal: Padding.padding_13,
    paddingVertical: Padding.padding_5,
    gap: Gap.gap_71,
    flexDirection: "row",
    width: Width.width_368,
  },
  star: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1000,
    width: Width.width_368,
  },
  medalPlacement: {
    width: 204,
    zIndex: 1,
    height: Height.height_60,
    flexDirection: "row",
  },
  stPlaceMedal: {
    zIndex: 1,
    width: Width.width_60,
    height: Height.height_60,
  },
  secondPlace: {
    width: Width.width_144,
    height: Height.height_45,
    paddingTop: Padding.padding_19,
  },
  arjunReddy: {
    width: Width.width_147,
    height: Height.height_26,
    fontSize: FontSize.fs_28,
  },
  centimeter: {
    height: Height.height_43,
    paddingTop: Padding.padding_21,
    width: Width.width_60,
    zIndex: 1,
  },
  cm: {
    width: Width.width_63,
    height: Height.height_22,
    fontSize: FontSize.fs_24,
  },
});

export default GroupComponent2;
