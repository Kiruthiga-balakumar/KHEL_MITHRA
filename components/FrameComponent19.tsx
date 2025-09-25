import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  Width,
  Color,
  FontFamily,
  FontSize,
  Height,
  LineHeight,
  Gap,
  Padding,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const FrameComponent19 = () => {
  return (
    <View style={styles.unlockSeparatorParent}>
      <View style={[styles.unlockSeparator, styles.unstoppablePosition]} />
      <View style={styles.ironCoreBadge}>
        <View style={[styles.lockWrapper, styles.lockLayout]}>
          <Image
            style={styles.lockIcon}
            contentFit="cover"
            source={require("../assets/Lock11.png")}
          />
        </View>
        <View style={styles.ironCoreParent}>
          <Text style={[styles.ironCore, styles.ironCoreTypo]}>Iron Core</Text>
          <Text style={[styles.do500SitUps, styles.do500SitUpsTypo]}>
            do 500 sit-ups.
          </Text>
        </View>
      </View>
      <View
        style={[styles.milestoneContainer, styles.milestoneContainerLayout]}
      >
        <View style={[styles.milestoneLocks, styles.lockLayout]}>
          <Image
            style={styles.lockIcon}
            contentFit="cover"
            source={require("../assets/Lock11.png")}
          />
        </View>
        <View style={styles.ironCoreParent}>
          <Text style={[styles.beastMode, styles.ironCoreTypo]}>
            Beast Mode
          </Text>
          <Text style={[styles.do500SitUps, styles.do500SitUpsTypo]}>
            1000 push-ups milestone.
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.unlockSeparatorParentMilestoneContainer,
          styles.milestoneContainerLayout,
        ]}
      >
        <View style={[styles.lockContainer, styles.lockLayout]}>
          <Image
            style={styles.lockIcon}
            contentFit="cover"
            source={require("../assets/Lock11.png")}
          />
        </View>
        <View style={styles.ironCoreParent}>
          <Text style={[styles.speedDemon, styles.ironCoreTypo]}>
            Speed Demon
          </Text>
          <Text style={[styles.do500SitUps, styles.do500SitUpsTypo]}>
            run 5 km under 20 mins.
          </Text>
        </View>
      </View>
      <View style={styles.unstoppableBadge}>
        <View style={[styles.lockParent, styles.lockParentLayout]}>
          <Image
            style={styles.lockIcon}
            contentFit="cover"
            source={require("../assets/Lock11.png")}
          />
          <View style={styles.unstoppableParent}>
            <Text style={[styles.unstoppable, styles.ironCoreTypo]}>
              Unstoppable
            </Text>
            <View style={styles.unstoppableStreak}>
              <Text style={[styles.daysStreakWithout, styles.do500SitUpsTypo]}>
                30 days streak without missing a test.
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.legendBadge, styles.lockParentLayout]}>
          <Image
            style={styles.lockIcon}
            contentFit="cover"
            source={require("../assets/Lock11.png")}
          />
          <View style={styles.legendBadgeParent}>
            <Text
              style={[
                styles.unlockSeparatorParentLegendBadge,
                styles.ironCoreTypo,
              ]}
            >
              Legend Badge
            </Text>
            <Text style={[styles.unlockAllOther, styles.do500SitUpsTypo]}>
              unlock all other badges.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  unstoppablePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  lockLayout: {
    width: Width.width_30,
    zIndex: 1,
  },
  ironCoreTypo: {
    textAlign: "left",
    color: Color.colorGray600,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_20,
    height: Height.height_18,
    zIndex: 1,
  },
  do500SitUpsTypo: {
    zIndex: 2,
    color: Color.colorGray800,
    fontFamily: FontFamily.inderRegular,
    lineHeight: LineHeight.lh_10,
    fontSize: FontSize.fs_12,
    textAlign: "left",
  },
  milestoneContainerLayout: {
    gap: Gap.gap_9,
    width: Width.width_201,
    flexDirection: "row",
    zIndex: null,
  },
  lockParentLayout: {
    height: Height.height_30,
    zIndex: 1,
    gap: Gap.gap_10,
    flexDirection: "row",
  },
  unlockSeparatorParent: {
    height: 355,
    paddingHorizontal: Padding.padding_24,
    paddingBottom: 31,
    gap: 33,
    paddingTop: Padding.padding_18,
    zIndex: null,
    width: Width.width_356,
  },
  unlockSeparator: {
    right: 0,
    bottom: 16,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray500,
    width: Width.width_356,
  },
  ironCoreBadge: {
    width: Width.width_202,
    gap: Gap.gap_10,
    flexDirection: "row",
    height: Height.height_33,
    zIndex: null,
  },
  lockWrapper: {
    paddingTop: Padding.padding_3,
    height: Height.height_33,
    width: Width.width_30,
  },
  lockIcon: {
    zIndex: 1,
    height: Height.height_30,
    width: Width.width_30,
  },
  ironCoreParent: {
    width: Width.width_162,
    height: Height.height_28,
    zIndex: 1,
  },
  ironCore: {
    width: Width.width_81,
  },
  do500SitUps: {
    width: Width.width_165,
    height: Height.height_10,
    color: Color.colorGray800,
    fontFamily: FontFamily.inderRegular,
    lineHeight: LineHeight.lh_10,
    fontSize: FontSize.fs_12,
  },
  milestoneContainer: {
    height: Height.height_32,
  },
  milestoneLocks: {
    paddingTop: Padding.padding_2,
    height: Height.height_32,
  },
  beastMode: {
    width: Width.width_100,
  },
  unlockSeparatorParentMilestoneContainer: {
    height: Height.height_31,
  },
  lockContainer: {
    paddingTop: Padding.padding_1,
    height: Height.height_31,
  },
  speedDemon: {
    width: 118,
  },
  unstoppableBadge: {
    height: 95,
    gap: 35,
    width: Width.width_267,
    zIndex: null,
  },
  lockParent: {
    width: Width.width_263,
  },
  unstoppableParent: {
    width: Width.width_223,
    height: Height.height_28,
    flexDirection: "row",
  },
  unstoppable: {
    width: Width.width_109,
    left: 0,
    top: 0,
    position: "absolute",
  },
  unstoppableStreak: {
    width: Width.width_223,
    height: Height.height_28,
    paddingTop: Padding.padding_18,
  },
  daysStreakWithout: {
    width: Width.width_223,
  },
  legendBadge: {
    width: Width.width_267,
  },
  legendBadgeParent: {
    width: Width.width_227,
    height: Height.height_28,
  },
  unlockSeparatorParentLegendBadge: {
    width: Width.width_122,
  },
  unlockAllOther: {
    width: 230,
    height: Height.height_10,
    color: Color.colorGray800,
    fontFamily: FontFamily.inderRegular,
    lineHeight: LineHeight.lh_10,
    fontSize: FontSize.fs_12,
  },
});

export default FrameComponent19;
