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

const FrameComponent17 = () => {
  return (
    <View style={styles.credentialsParent}>
      <View style={styles.credentials} />
      <AvatarContainer
        lineViewBorderColor="#00f11c"
        lineViewWidth={128}
        prop="64/100"
      />
      <View
        style={[styles.restorationBadgeWrapper, styles.tiersOverviewFlexBox]}
      >
        <View style={styles.restorationBadge}>
          <View
            style={[
              styles.qualityRestorationAchievemen,
              styles.tierBadgesFlexBox,
            ]}
          >
            <Image
              style={styles.qualityRestoration2025091220Icon}
              contentFit="cover"
              source={require("../assets/quality-restoration-20250912202419884-2.png")}
            />
            <View style={styles.qualityRestorationDetails}>
              <Image
                style={styles.qualityRestoration2025091220Icon}
                contentFit="cover"
                source={require("../assets/quality-restoration-20250912202419884-3.png")}
              />
              <Image
                style={[styles.doubleUpIcon, styles.doubleIconPosition]}
                contentFit="cover"
                source={require("../assets/Double-Up.png")}
              />
              <Image
                style={[
                  styles.credentialsParentDoubleUpIcon,
                  styles.doubleIconPosition,
                ]}
                contentFit="cover"
                source={require("../assets/Double-Up.png")}
              />
            </View>
            <Image
              style={styles.qualityRestoration2025091220Icon}
              contentFit="cover"
              source={require("../assets/quality-restoration-20250912202419884-4.png")}
            />
            <View style={styles.qualityRestorationDetails}>
              <Image
                style={styles.qualityRestoration2025091220Icon}
                contentFit="cover"
                source={require("../assets/quality-restoration-20250912202419884-5.png")}
              />
              <Image
                style={[
                  styles.credentialsParentDoubleUpIcon,
                  styles.doubleIconPosition,
                ]}
                contentFit="cover"
                source={require("../assets/Double-Up.png")}
              />
            </View>
          </View>
          <View style={[styles.tiersOverview, styles.tiersOverviewSpaceBlock]}>
            <View style={[styles.tierBadges, styles.tierBadgesFlexBox]}>
              <View style={styles.platinumDiamondBadges}>
                <Text style={[styles.silver, styles.goldTypo]}>SILVER</Text>
              </View>
              <View
                style={[
                  styles.credentialsParentPlatinumDiamondBadges,
                  styles.tiersOverviewSpaceBlock,
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
    </View>
  );
};

const styles = StyleSheet.create({
  tiersOverviewFlexBox: {
    flexDirection: "row",
    zIndex: null,
  },
  tierBadgesFlexBox: {
    zIndex: 1,
    flexDirection: "row",
  },
  doubleIconPosition: {
    zIndex: 2,
    height: Height.height_30,
    top: "50%",
    marginTop: -15,
    width: Width.width_30,
    position: "absolute",
  },
  tiersOverviewSpaceBlock: {
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
  credentialsParent: {
    height: 186,
    paddingHorizontal: Padding.padding_11,
    paddingTop: Padding.padding_10,
    paddingBottom: Padding.padding_1,
    gap: Gap.gap_18,
    zIndex: null,
    width: Width.width_356,
  },
  credentials: {
    top: 0,
    right: 0,
    bottom: 7,
    left: 0,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1000,
    position: "absolute",
    width: Width.width_356,
  },
  restorationBadgeWrapper: {
    width: Width.width_301,
    paddingLeft: Padding.padding_13,
    height: Height.height_65,
    flexDirection: "row",
  },
  restorationBadge: {
    alignItems: "flex-end",
    gap: Gap.gap_1,
    width: Width.width_288,
    height: Height.height_65,
    zIndex: null,
  },
  qualityRestorationAchievemen: {
    gap: Gap.gap_24,
    height: Height.height_54,
    zIndex: 1,
    width: Width.width_288,
  },
  qualityRestoration2025091220Icon: {
    zIndex: 1,
    width: Width.width_54,
    height: Height.height_54,
  },
  qualityRestorationDetails: {
    width: Width.width_54,
    height: Height.height_54,
    flexDirection: "row",
  },
  doubleUpIcon: {
    right: -27,
  },
  credentialsParentDoubleUpIcon: {
    left: -26,
  },
  tiersOverview: {
    width: 273,
    justifyContent: "flex-end",
    flexDirection: "row",
    zIndex: null,
  },
  tierBadges: {
    width: Width.width_268,
    gap: Gap.gap_40,
    height: Height.height_10,
  },
  platinumDiamondBadges: {
    width: 37,
    paddingRight: Padding.padding_12,
    height: Height.height_10,
  },
  silver: {
    width: Width.width_28,
  },
  credentialsParentPlatinumDiamondBadges: {
    width: Width.width_26,
  },
  gold: {
    width: Width.width_24,
  },
  platinum: {
    width: Width.width_41,
  },
});

export default FrameComponent17;
