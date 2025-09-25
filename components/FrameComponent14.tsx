import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  Padding,
  Color,
  FontFamily,
  LineHeight,
  FontSize,
  Height,
  Width,
  Border,
  BoxShadow,
  Gap,
} from "../GlobalStyles";

const FrameComponent14 = () => {
  return (
    <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={styles.eventNameDateLocationCategParent}>
          <Text
            style={[
              styles.eventNameDateLocation,
              styles.juniorAthleticsMeetTypo,
            ]}
          >{`Event Name Date
Location
Category
Age Group
Status`}</Text>
          <View style={styles.juniorAthleticsMeet100mSWrapper}>
            <Text
              style={[
                styles.juniorAthleticsMeet,
                styles.juniorAthleticsMeetTypo,
              ]}
            >{`Junior Athletics Meet – 100m Sprint 5 Dec 2025 New Delhi Athletics (Track & Field) Under 16 Upcoming ✅`}</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameLayout]}>
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
              <Text style={[styles.register, styles.registerTypo]}>
                register
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameSpaceBlock: {
    paddingLeft: Padding.padding_3,
    zIndex: null,
  },
  juniorAthleticsMeetTypo: {
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
  frameWrapper: {
    width: Width.width_382,
    flexDirection: "row",
    height: Height.height_182,
  },
  rectangleParent: {
    width: Width.width_379,
    paddingLeft: Padding.padding_15,
    paddingTop: Padding.padding_9,
    paddingBottom: Padding.padding_10_2,
    gap: 8,
    height: Height.height_182,
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
    gap: Gap.gap_7,
    zIndex: 1,
    height: Height.height_132,
    flexDirection: "row",
  },
  eventNameDateLocation: {
    width: Width.width_82,
    zIndex: 1,
  },
  juniorAthleticsMeet100mSWrapper: {
    paddingTop: Padding.padding_1,
    width: Width.width_275,
    height: Height.height_132,
  },
  juniorAthleticsMeet: {
    width: Width.width_275,
    zIndex: 1,
  },
  frameContainer: {
    width: Width.width_347,
    paddingLeft: Padding.padding_3,
    zIndex: null,
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
    paddingRight: Padding.padding_19,
    paddingBottom: Padding.padding_3_4,
    zIndex: 1,
    flexDirection: "row",
  },
  register: {
    height: Height.height_14,
    width: Width.width_42,
  },
});

export default FrameComponent14;
