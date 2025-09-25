import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  Color,
  FontFamily,
  LineHeight,
  FontSize,
  Height,
  Width,
  Border,
  Padding,
  BoxShadow,
  Gap,
} from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <View style={styles.eventNameDateLocationCategParent}>
        <Text
          style={[styles.eventNameDateLocation, styles.stateLevelMarathonTypo]}
        >{`Event Name Date
Location
Category
Age Group
Status`}</Text>
        <Text
          style={[styles.stateLevelMarathon, styles.stateLevelMarathonTypo]}
        >{`State-Level Marathon – 10km Run 12 Nov 2025 Bengaluru, Karnataka Running Event
Under 19 Upcoming ✅`}</Text>
      </View>
      <View style={[styles.frameWrapper, styles.frameLayout]}>
        <View style={[styles.frameParent, styles.frameLayout]}>
          <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={[styles.frameItem, styles.rectangleLayout]} />
            <Text style={[styles.viewDetails, styles.registerTypo]}>
              view details
            </Text>
          </Pressable>
          <Pressable
            style={[styles.rectangleContainer, styles.rectangleLayout]}
          >
            <View style={[styles.frameItem, styles.rectangleLayout]} />
            <Text style={[styles.register, styles.registerTypo]}>register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stateLevelMarathonTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    lineHeight: LineHeight.lh_22,
    fontSize: FontSize.fs_15,
    zIndex: 1,
  },
  frameLayout: {
    height: Height.height_22_2,
    flexDirection: "row",
  },
  rectangleLayout: {
    backgroundColor: Color.colorBlack,
    width: Width.width_79,
    height: Height.height_21_81,
    borderRadius: Border.br_18,
  },
  registerTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.fs_12,
    zIndex: 1,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  rectangleParent: {
    width: Width.width_379,
    height: Height.height_182,
    paddingLeft: Padding.padding_15,
    paddingTop: Padding.padding_9,
    paddingBottom: Padding.padding_10_2,
    gap: 8,
  },
  frameChild: {
    width: Width.width_376,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    backgroundColor: Color.colorGray1000,
    borderRadius: Border.br_18,
  },
  eventNameDateLocationCategParent: {
    width: Width.width_364,
    height: Height.height_132,
    gap: Gap.gap_7,
    flexDirection: "row",
    zIndex: 1,
  },
  eventNameDateLocation: {
    width: Width.width_82,
    zIndex: 1,
  },
  stateLevelMarathon: {
    width: Width.width_275,
    zIndex: 1,
  },
  frameWrapper: {
    zIndex: null,
    width: Width.width_347,
    paddingLeft: Padding.padding_3,
  },
  frameParent: {
    width: Width.width_344,
    gap: Gap.gap_186,
    zIndex: 1,
  },
  rectangleGroup: {
    paddingLeft: Padding.padding_10,
    paddingTop: Padding.padding_4_8,
    paddingRight: Padding.padding_5,
    paddingBottom: Padding.padding_3_7,
    zIndex: 1,
    flexDirection: "row",
  },
  frameItem: {
    display: "none",
  },
  viewDetails: {
    height: Height.height_13_3,
    width: Width.width_63,
  },
  rectangleContainer: {
    paddingLeft: Padding.padding_21,
    paddingTop: Padding.padding_4_4,
    paddingRight: Padding.padding_16,
    paddingBottom: Padding.padding_3_4,
    zIndex: 1,
    flexDirection: "row",
  },
  register: {
    height: Height.height_14,
    width: Width.width_45,
  },
});

export default GroupComponent;
