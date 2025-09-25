import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent9 from "../components/FrameComponent9";
import Vector3 from "../assets/Vector-3.svg";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent12 from "../components/FrameComponent12";
import {
  Color,
  Border,
  Width,
  Gap,
  Height,
  FontFamily,
  FontSize,
  Padding,
  BoxShadow,
} from "../GlobalStyles";

const PerformanceResult = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={[styles.performanceResult, styles.frameChild3Border]}
      contentContainerStyle={styles.performanceResultScrollViewContent}
    >
      <FrameComponent9
        performanceResults="Performance Results"
        vector3={<Vector3 width={NaN} height={NaN} />}
        onBackPress={() => navigation.navigate("FrameComponent6")}
        showBack
      />
      <View style={[styles.performanceResultInner, styles.performanceFlexBox]}>
        <View style={styles.frameParent}>
          <FrameComponent10 />
          <FrameComponent11 />
          <View style={styles.rectangleParent}>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
            <View style={styles.frameItem} />
            <View style={[styles.sitUpsParent, styles.parentLayout]}>
              <Text style={[styles.sitUps, styles.shareFlexBox]}>Sit-ups</Text>
              <Text style={[styles.performanceGood, styles.performanceTypo]}>
                Performance : Good
              </Text>
            </View>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
            <View style={[styles.frameInner, styles.frameChildLayout]} />
            <View style={styles.frameItem} />
            <View style={[styles.x10MtsShuttleRunParent, styles.parentLayout]}>
              <Text style={[styles.x10Mts, styles.shareFlexBox]}>
                4 x 10 Mts Shuttle Run
              </Text>
              <Text style={[styles.performanceVery, styles.performanceTypo]}>
                Performance : Very Good
              </Text>
            </View>
          </View>
          <FrameComponent12 />
          <View style={[styles.rectangleContainer, styles.rectangleSpaceBlock]}>
            <View
              style={[
                styles.performanceResultFrameChild,
                styles.frameChildPosition,
              ]}
            />
            <View style={styles.frameItem} />
            <View style={styles.medicineBallThrowParent}>
              <Text style={[styles.medicineBallThrow, styles.shareFlexBox]}>
                Medicine Ball Throw
              </Text>
              <Text style={[styles.performanceGood, styles.performanceTypo]}>
                Performance : Average
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.performanceResultChild, styles.performanceFlexBox]}>
        <Pressable style={styles.groupPressable}>
          <View style={[styles.frameChild3, styles.frameChildPosition]} />
          <Image
            style={styles.shareRoundedIcon}
            contentFit="cover"
            source={require("../assets/Share-Rounded.png")}
          />
          <Text style={[styles.share, styles.shareFlexBox]}>share</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  performanceResultScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 1,
    paddingTop: 1,
    paddingBottom: 29,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 24,
    height: 917,
  },
  frameChild3Border: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  performanceFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
    zIndex: null,
  },
  frameChildLayout: {
    backgroundColor: Color.colorGray1000,
    borderRadius: Border.br_18,
    width: Width.width_356,
  },
  parentLayout: {
    gap: Gap.gap_6,
    height: Height.height_45,
  },
  shareFlexBox: {
    textAlign: "left",
    zIndex: 1,
  },
  performanceTypo: {
    fontFamily: FontFamily.inderRegular,
    fontSize: FontSize.fs_14,
    height: Height.height_17,
    textAlign: "left",
    color: Color.colorBlack,
    zIndex: 1,
  },
  rectangleSpaceBlock: {
    paddingBottom: Padding.padding_11,
    paddingTop: Padding.padding_14,
    gap: Gap.gap_12,
    paddingHorizontal: Padding.padding_18,
    zIndex: 1,
    width: Width.width_356,
    flexDirection: "row",
  },
  frameChildPosition: {
    bottom: 0,
    elevation: 4,
    boxShadow: BoxShadow.shadow_drop,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  performanceResult: {
    width: "100%",
    backgroundColor: Color.colorGold,
    flex: 1,
    maxWidth: "100%",
  },
  performanceResultInner: {
    width: 383,
    height: 713,
    paddingRight: Padding.padding_26,
    paddingBottom: 28,
  },
  frameParent: {
    height: 684,
    width: 357,
    gap: 17,
    zIndex: null,
  },
  rectangleParent: {
    paddingTop: Padding.padding_16,
    paddingBottom: Padding.padding_9,
    gap: Gap.gap_12,
    paddingHorizontal: Padding.padding_18,
    zIndex: 1,
    width: Width.width_356,
    height: 77,
    flexDirection: "row",
  },
  frameChild: {
    elevation: 4,
    boxShadow: BoxShadow.shadow_drop,
    backgroundColor: Color.colorGray1000,
    borderRadius: Border.br_18,
    left: 0,
    bottom: 7,
    right: 0,
    top: 0,
    position: "absolute",
  },
  frameItem: {
    width: Width.width_42,
    borderRadius: Border.br_5,
    backgroundColor: Color.colorDarkslategray,
    height: Height.height_42,
    zIndex: 1,
  },
  sitUpsParent: {
    width: Width.width_162,
  },
  sitUps: {
    width: 75,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_24,
    textAlign: "left",
    height: Height.height_22,
  },
  performanceGood: {
    width: Width.width_165,
  },
  rectangleGroup: {
    height: 77,
    paddingBottom: Padding.padding_11,
    paddingTop: Padding.padding_14,
  },
  frameInner: {
    left: 0,
    bottom: 7,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorGray1000,
    borderRadius: Border.br_18,
  },
  x10MtsShuttleRunParent: {
    width: Width.width_223,
  },
  x10Mts: {
    width: 226,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_24,
    textAlign: "left",
    height: Height.height_22,
  },
  performanceVery: {
    width: Width.width_174,
  },
  rectangleContainer: {
    height: Height.height_70,
  },
  performanceResultFrameChild: {
    backgroundColor: Color.colorGray1000,
    borderRadius: Border.br_18,
    width: Width.width_356,
  },
  medicineBallThrowParent: {
    width: Width.width_200,
    gap: Gap.gap_5,
    height: Height.height_45,
  },
  medicineBallThrow: {
    width: 203,
    height: Height.height_23,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_24,
    textAlign: "left",
  },
  performanceResultChild: {
    width: Width.width_369,
    height: Height.height_50_6,
    paddingRight: 41,
  },
  groupPressable: {
    height: Height.height_50_56,
    paddingHorizontal: 110,
    paddingTop: Padding.padding_11,
    paddingBottom: 8,
    width: Width.width_328,
    flexDirection: "row",
  },
  frameChild3: {
    borderRadius: Border.br_10,
    backgroundColor: Color.colorDarkslateblue300,
    width: Width.width_328,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  shareRoundedIcon: {
    width: Width.width_30,
    height: Height.height_30,
    zIndex: 2,
  },
  share: {
    height: Height.height_31,
    width: Width.width_81,
    fontSize: FontSize.fs_34,
    fontFamily: FontFamily.leagueSpartanRegular,
    color: Color.colorWhite,
  },
});

export default PerformanceResult;
