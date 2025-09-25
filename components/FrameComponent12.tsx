import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Padding,
  Color,
  Height,
  Gap,
  Width,
  Border,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const FrameComponent12 = () => {
  return (
    <View style={[styles.frameWrapper, styles.wrapperSpaceBlock]}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={styles.frameItem} />
        <View style={styles.frameParent}>
          <View
            style={[
              styles.standingVerticalJumpWrapper,
              styles.wrapperSpaceBlock,
            ]}
          >
            <Text
              style={[
                styles.standingVerticalJump,
                styles.standingVerticalJumpFlexBox,
              ]}
            >
              Standing Vertical Jump
            </Text>
          </View>
          <Text
            style={[
              styles.performanceExcellent,
              styles.standingVerticalJumpFlexBox,
            ]}
          >
            Performance : Excellent
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperSpaceBlock: {
    paddingLeft: Padding.padding_1,
    flexDirection: "row",
  },
  standingVerticalJumpFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    zIndex: 1,
  },
  frameWrapper: {
    zIndex: null,
    width: 357,
    height: 77,
    paddingBottom: Padding.padding_7,
  },
  rectangleParent: {
    height: Height.height_70,
    zIndex: 1,
    paddingHorizontal: Padding.padding_18,
    paddingTop: Padding.padding_14,
    paddingBottom: Padding.padding_11,
    gap: Gap.gap_11,
    width: Width.width_356,
    flexDirection: "row",
  },
  frameChild: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1000,
    width: Width.width_356,
  },
  frameItem: {
    width: Width.width_42,
    borderRadius: Border.br_5,
    backgroundColor: Color.colorDarkslategray,
    height: Height.height_42,
    zIndex: 1,
  },
  frameParent: {
    height: Height.height_45,
    gap: Gap.gap_6,
    width: Width.width_235,
  },
  standingVerticalJumpWrapper: {
    height: Height.height_22,
    width: Width.width_235,
  },
  standingVerticalJump: {
    width: 237,
    fontSize: FontSize.fs_24,
    fontWeight: "500",
    fontFamily: FontFamily.leagueSpartanMedium,
    height: Height.height_22,
  },
  performanceExcellent: {
    width: Width.width_165,
    height: Height.height_17,
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.inderRegular,
  },
});

export default FrameComponent12;
