import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import AvatarContainer from "./AvatarContainer";
import {
  Height,
  Width,
  Padding,
  Color,
  FontFamily,
  FontSize,
  Gap,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const FrameComponent10 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <AvatarContainer prop="37/100" />
      <View style={[styles.frameWrapper, styles.frameFlexBox]}>
        <View style={styles.frameParent}>
          <View
            style={[
              styles.qualityRestoration2025091220Parent,
              styles.parentFlexBox,
            ]}
          >
            <Image
              style={styles.qualityRestoration2025091220Icon}
              contentFit="cover"
              source={require("../assets/quality-restoration-20250912202419884-2.png")}
            />
            <View style={styles.frameContainer}>
              <View style={styles.qualityParentLayout}>
                <Image
                  style={[
                    styles.rectangleParentQualityRestoration2025091220Icon,
                    styles.rectangleParentPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/quality-restoration-20250912202419884-4.png")}
                />
                <Image
                  style={styles.doubleIconLayout}
                  contentFit="cover"
                  source={require("../assets/Double-Up.png")}
                />
              </View>
            </View>
            <View style={styles.qualityRestoration2025091220Container}>
              <Image
                style={styles.qualityRestoration2025091220Icon}
                contentFit="cover"
                source={require("../assets/quality-restoration-20250912202419884-5.png")}
              />
              <Image
                style={[
                  styles.rectangleParentDoubleUpIcon,
                  styles.doubleIconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/Double-Up.png")}
              />
            </View>
          </View>
          <View style={[styles.frameView, styles.frameViewSpaceBlock]}>
            <View style={[styles.valueGradeParent, styles.parentFlexBox]}>
              <View style={styles.valueGrade}>
                <Text style={[styles.silver, styles.goldTypo]}>SILVER</Text>
              </View>
              <View
                style={[
                  styles.rectangleParentValueGrade,
                  styles.frameViewSpaceBlock,
                ]}
              >
                <Text style={[styles.gold, styles.goldTypo]}>GOLD</Text>
              </View>
              <Text style={[styles.platinum, styles.goldTypo]}>PLATINUM</Text>
              <Text style={[styles.platinum, styles.goldTypo]}>DIAMOND</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.rectangleParentQualityRestoration2025091220Parent,
          styles.qualityParentLayout,
        ]}
      >
        <Image
          style={[
            styles.qualityRestoration2025091220Icon3,
            styles.rectangleParentPosition,
          ]}
          contentFit="cover"
          source={require("../assets/quality-restoration-20250912202419884-3.png")}
        />
        <Image
          style={styles.doubleIconLayout}
          contentFit="cover"
          source={require("../assets/Double-Up.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    zIndex: null,
  },
  parentFlexBox: {
    zIndex: 1,
    flexDirection: "row",
  },
  rectangleParentPosition: {
    top: "50%",
    position: "absolute",
  },
  doubleIconLayout: {
    zIndex: 2,
    height: Height.height_30,
    width: Width.width_30,
  },
  frameViewSpaceBlock: {
    paddingRight: Padding.padding_5,
    height: Height.height_10,
  },
  goldTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inderRegular,
    fontSize: FontSize.fs_8,
    height: Height.height_10,
    zIndex: 1,
  },
  qualityParentLayout: {
    height: Height.height_30,
    width: Width.width_30,
    zIndex: 1,
    flexDirection: "row",
  },
  rectangleParent: {
    height: 179,
    paddingHorizontal: Padding.padding_11,
    paddingTop: Padding.padding_10,
    paddingBottom: Padding.padding_6,
    gap: Gap.gap_18,
    zIndex: null,
    width: Width.width_356,
  },
  frameChild: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1000,
    position: "absolute",
    width: Width.width_356,
  },
  frameWrapper: {
    width: Width.width_301,
    paddingLeft: Padding.padding_13,
    height: Height.height_65,
    flexDirection: "row",
  },
  frameParent: {
    alignItems: "flex-end",
    gap: Gap.gap_1,
    width: Width.width_288,
    height: Height.height_65,
    zIndex: null,
  },
  qualityRestoration2025091220Parent: {
    gap: 75,
    height: Height.height_54,
    zIndex: 1,
    width: Width.width_288,
  },
  qualityRestoration2025091220Icon: {
    zIndex: 1,
    width: Width.width_54,
    height: Height.height_54,
  },
  frameContainer: {
    height: Height.height_42,
    paddingTop: Padding.padding_12,
    width: Width.width_30,
  },
  rectangleParentQualityRestoration2025091220Icon: {
    right: -51,
    marginTop: -27,
    top: "50%",
    zIndex: 1,
    width: Width.width_54,
    height: Height.height_54,
  },
  qualityRestoration2025091220Container: {
    width: Width.width_54,
    height: Height.height_54,
    flexDirection: "row",
  },
  rectangleParentDoubleUpIcon: {
    marginTop: -15,
    left: -26,
    top: "50%",
    position: "absolute",
  },
  frameView: {
    width: 273,
    justifyContent: "flex-end",
    flexDirection: "row",
    zIndex: null,
  },
  valueGradeParent: {
    width: Width.width_268,
    gap: Gap.gap_40,
    height: Height.height_10,
  },
  valueGrade: {
    width: 37,
    paddingRight: Padding.padding_12,
    height: Height.height_10,
  },
  silver: {
    width: Width.width_28,
  },
  rectangleParentValueGrade: {
    width: Width.width_26,
  },
  gold: {
    width: Width.width_24,
  },
  platinum: {
    width: Width.width_41,
  },
  rectangleParentQualityRestoration2025091220Parent: {
    top: 120,
    left: 76,
    position: "absolute",
  },
  qualityRestoration2025091220Icon3: {
    right: -50,
    marginTop: -27,
    top: "50%",
    zIndex: 1,
    width: Width.width_54,
    height: Height.height_54,
  },
});

export default FrameComponent10;
