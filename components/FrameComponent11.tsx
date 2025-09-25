import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Width,
  Color,
  Padding,
  Gap,
  Height,
  FontFamily,
  FontSize,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const FrameComponent11 = () => {
  return (
    <View style={[styles.frameParent, styles.parentFlexBox]}>
      <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
        <View style={styles.testsResultsParent}>
          <Text style={[styles.testsResults, styles.sitAndReachFlexBox]}>
            Test’s Results
          </Text>
          <View style={styles.frameChild} />
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.frameWrapperFlexBox]}>
        <View style={styles.frameItem} />
        <View style={styles.rectangleWrapper}>
          <View style={styles.frameInner} />
        </View>
        <View style={styles.sitAndReachParent}>
          <Text style={[styles.sitAndReach, styles.sitAndReachFlexBox]}>
            Sit and reach
          </Text>
          <Text
            style={[styles.performanceExcellent, styles.sitAndReachFlexBox]}
          >
            Performance : Excellent
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "flex-end",
    width: Width.width_356,
  },
  frameWrapperFlexBox: {
    flexDirection: "row",
    zIndex: null,
  },
  sitAndReachFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameParent: {
    height: 119,
    paddingBottom: Padding.padding_7,
    gap: Gap.gap_10,
    zIndex: null,
  },
  frameWrapper: {
    width: 351,
    paddingRight: Padding.padding_4,
    justifyContent: "flex-end",
    height: Height.height_32,
  },
  testsResultsParent: {
    width: Width.width_347,
    gap: Gap.gap_7,
    paddingBottom: Padding.padding_3,
    height: Height.height_32,
    zIndex: null,
  },
  testsResults: {
    width: 136,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_24,
    height: Height.height_22,
    color: Color.colorBlack,
  },
  frameChild: {
    width: Width.width_350,
    boxShadow: BoxShadow.shadow_drop1,
    elevation: 8,
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue100,
    borderTopWidth: 3,
    height: Height.height_3,
  },
  rectangleParent: {
    height: Height.height_70,
    paddingHorizontal: Padding.padding_18,
    paddingTop: Padding.padding_14,
    paddingBottom: Padding.padding_11,
    gap: Gap.gap_12,
    alignItems: "flex-end",
    width: Width.width_356,
  },
  frameItem: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1000,
    width: Width.width_356,
  },
  rectangleWrapper: {
    height: Height.height_45,
    width: Width.width_42,
    zIndex: 1,
    paddingBottom: Padding.padding_3,
    justifyContent: "flex-end",
  },
  frameInner: {
    borderRadius: Border.br_5,
    backgroundColor: Color.colorDarkslategray,
    height: Height.height_42,
    zIndex: 1,
    width: Width.width_42,
  },
  sitAndReachParent: {
    height: 41,
    width: Width.width_162,
    gap: Gap.gap_2,
    zIndex: 1,
  },
  sitAndReach: {
    width: Width.width_137,
    zIndex: 1,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_24,
    height: Height.height_22,
    color: Color.colorBlack,
  },
  performanceExcellent: {
    width: Width.width_165,
    height: Height.height_17,
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.inderRegular,
    zIndex: 1,
  },
});

export default FrameComponent11;
