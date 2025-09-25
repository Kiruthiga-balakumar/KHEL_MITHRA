import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  Padding,
  Height,
  Color,
  FontFamily,
  LineHeight,
  FontSize,
  Gap,
  Width,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const FrameComponent18 = () => {
  return (
    <View style={styles.kullancAdParent}>
      <View style={[styles.kullancAd, styles.kullancAdPosition]} />
      <View style={[styles.completedSitupsBadge, styles.badgeSpaceBlock]}>
        <View style={styles.completed100SitUpsParent}>
          <Text style={[styles.completed100SitUps, styles.upsTypo]}>
            Completed 100 sit-ups.
          </Text>
          <View style={styles.medalParent}>
            <Image
              style={styles.medalIcon}
              contentFit="cover"
              source={require("../assets/Medal.png")}
            />
            <View style={styles.sitUpsMasterWrapper}>
              <Text style={[styles.sitUpsMaster, styles.jumpKingTypo]}>
                Sit-ups Master
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.medalContainer, styles.medalFlexBox]}>
        <Image
          style={styles.medalIcon}
          contentFit="cover"
          source={require("../assets/Medal.png")}
        />
        <View style={styles.challengeDetails}>
          <View
            style={[styles.challengeAchievements, styles.enduranceParentLayout]}
          >
            <Text style={[styles.proThrower, styles.jumpKingTypo]}>
              Pro Thrower
            </Text>
            <Text style={[styles.crossed200PushUps, styles.upsTypo]}>
              Crossed 200 push-ups.
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.medalContainer, styles.medalFlexBox]}>
        <Image
          style={styles.medalIcon}
          contentFit="cover"
          source={require("../assets/Medal.png")}
        />
        <View style={styles.challengeDetails}>
          <View
            style={[styles.challengeAchievements, styles.enduranceParentLayout]}
          >
            <Text style={[styles.jumpKing, styles.jumpKingTypo]}>
              Jump King
            </Text>
            <Text
              style={[styles.crossed200PushUps, styles.upsTypo]}
            >{`Jump height > 50 cm`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.consistencyStarBadge, styles.badgeSpaceBlock]}>
        <View style={[styles.medalGroup, styles.medalFlexBox]}>
          <Image
            style={styles.medalIcon}
            contentFit="cover"
            source={require("../assets/Medal.png")}
          />
          <View style={styles.consistencyStarParent}>
            <Text style={[styles.consistencyStar, styles.jumpKingTypo]}>
              Consistency Star
            </Text>
            <View style={styles.loggedTestsFor7DaysInARWrapper}>
              <Text style={[styles.loggedTestsFor, styles.upsTypo]}>
                Logged tests for 7 days in a row.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.enduranceBadge, styles.badgeSpaceBlock]}>
        <View style={[styles.frameView, styles.medalFlexBox]}>
          <Image
            style={styles.medalIcon}
            contentFit="cover"
            source={require("../assets/Medal.png")}
          />
          <View style={styles.frameWrapper}>
            <View
              style={[styles.enduranceParent, styles.enduranceParentLayout]}
            >
              <Text style={[styles.endurance, styles.jumpKingTypo]}>
                Endurance
              </Text>
              <Text style={[styles.completed2Km, styles.upsTypo]}>
                Completed 2 km run under target time.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kullancAdPosition: {
    left: 0,
    position: "absolute",
  },
  badgeSpaceBlock: {
    paddingLeft: Padding.padding_1,
    height: Height.height_40,
    flexDirection: "row",
    zIndex: null,
  },
  upsTypo: {
    zIndex: 2,
    textAlign: "left",
    color: Color.colorGray800,
    fontFamily: FontFamily.inderRegular,
    lineHeight: LineHeight.lh_10,
    fontSize: FontSize.fs_12,
  },
  jumpKingTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_20,
    height: Height.height_18,
    zIndex: 1,
    textAlign: "left",
  },
  medalFlexBox: {
    zIndex: 1,
    gap: Gap.gap_10,
    flexDirection: "row",
    height: Height.height_40,
  },
  enduranceParentLayout: {
    height: Height.height_28,
    zIndex: 1,
  },
  kullancAdParent: {
    height: 351,
    paddingHorizontal: Padding.padding_13,
    paddingTop: Padding.padding_15,
    paddingBottom: Padding.padding_24,
    gap: 25,
    zIndex: null,
    width: Width.width_356,
  },
  kullancAd: {
    top: 0,
    right: 0,
    bottom: 12,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray500,
    width: Width.width_356,
    left: 0,
  },
  completedSitupsBadge: {
    width: Width.width_174,
  },
  completed100SitUpsParent: {
    zIndex: 2,
    width: Width.width_173,
    flexDirection: "row",
    height: Height.height_40,
  },
  completed100SitUps: {
    right: -42,
    bottom: 9,
    width: Width.width_165,
    height: Height.height_10,
    textAlign: "left",
    color: Color.colorGray800,
    fontFamily: FontFamily.inderRegular,
    lineHeight: LineHeight.lh_10,
    fontSize: FontSize.fs_12,
    position: "absolute",
  },
  medalParent: {
    gap: Gap.gap_10,
    width: Width.width_173,
    flexDirection: "row",
    height: Height.height_40,
  },
  medalIcon: {
    width: Width.width_40,
    zIndex: 1,
    height: Height.height_40,
  },
  sitUpsMasterWrapper: {
    width: 123,
    height: Height.height_21,
    paddingTop: Padding.padding_3,
  },
  sitUpsMaster: {
    width: 126,
  },
  medalContainer: {
    width: Width.width_212,
  },
  challengeDetails: {
    height: Height.height_31,
    width: Width.width_162,
    paddingTop: Padding.padding_3,
  },
  challengeAchievements: {
    width: Width.width_162,
  },
  proThrower: {
    width: 104,
  },
  crossed200PushUps: {
    width: Width.width_165,
    height: Height.height_10,
    textAlign: "left",
    color: Color.colorGray800,
    fontFamily: FontFamily.inderRegular,
    lineHeight: LineHeight.lh_10,
    fontSize: FontSize.fs_12,
  },
  jumpKing: {
    width: Width.width_90,
  },
  consistencyStarBadge: {
    width: 241,
  },
  medalGroup: {
    width: 240,
  },
  consistencyStarParent: {
    width: Width.width_190,
    height: Height.height_31,
    flexDirection: "row",
  },
  consistencyStar: {
    width: 143,
    top: 3,
    left: 0,
    position: "absolute",
  },
  loggedTestsFor7DaysInARWrapper: {
    paddingTop: Padding.padding_21,
    width: Width.width_190,
    height: Height.height_31,
  },
  loggedTestsFor: {
    width: Width.width_190,
  },
  enduranceBadge: {
    width: 278,
  },
  frameView: {
    width: 277,
  },
  frameWrapper: {
    width: Width.width_227,
    height: Height.height_31,
    paddingTop: Padding.padding_3,
  },
  enduranceParent: {
    width: Width.width_227,
  },
  endurance: {
    width: 92,
  },
  completed2Km: {
    width: Width.width_227,
  },
});

export default FrameComponent18;
