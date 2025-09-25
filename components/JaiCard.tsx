import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Height,
  Color,
  FontFamily,
  Width,
  Padding,
  BoxShadow,
  Border,
  Gap,
  FontSize,
} from "../GlobalStyles";

const JaiCard = () => {
  return (
    <View style={[styles.jaiCard, styles.jaiCardFlexBox]}>
      <View style={[styles.rectangleParent, styles.jaiCardFlexBox]}>
        <View style={styles.frameChild} />
        <View style={styles.jaiInfo}>
          <Text style={[styles.dataDisplay, styles.cmTypo]}>8.</Text>
          <View style={styles.jaiWrapper}>
            <Text style={[styles.jai, styles.cmTypo]}>Jai</Text>
          </View>
        </View>
        <View style={styles.jaiMetric}>
          <Text style={[styles.cm, styles.cmTypo]}>43 cm</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jaiCardFlexBox: {
    flexDirection: "row",
    height: Height.height_70,
  },
  cmTypo: {
    zIndex: 1,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  jaiCard: {
    zIndex: null,
    width: Width.width_369,
    paddingLeft: Padding.padding_1,
  },
  rectangleParent: {
    paddingLeft: Padding.padding_37,
    paddingTop: Padding.padding_20,
    paddingRight: Padding.padding_26,
    paddingBottom: Padding.padding_22,
    gap: 182,
    width: Width.width_368,
  },
  frameChild: {
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
  jaiInfo: {
    gap: Gap.gap_2,
    zIndex: 1,
    width: Width.width_63,
    height: Height.height_28,
    flexDirection: "row",
  },
  dataDisplay: {
    width: Width.width_28,
    fontSize: FontSize.fs_28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    height: Height.height_26,
  },
  jaiWrapper: {
    width: Width.width_33,
    paddingTop: Padding.padding_2,
    height: Height.height_28,
  },
  jai: {
    width: Width.width_36,
    fontSize: FontSize.fs_28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    height: Height.height_26,
  },
  jaiMetric: {
    width: Width.width_60,
    paddingTop: Padding.padding_4,
    height: Height.height_26,
    zIndex: 1,
  },
  cm: {
    height: Height.height_22,
    fontSize: FontSize.fs_24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    width: Width.width_63,
  },
});

export default JaiCard;
