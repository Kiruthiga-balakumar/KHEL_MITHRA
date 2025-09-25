import * as React from "react";
import { ScrollView, Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import Vector3 from "../assets/Vector-3.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent17 from "../components/FrameComponent17";
import FrameComponent18 from "../components/FrameComponent18";
import FrameComponent19 from "../components/FrameComponent19";
import {
  Color,
  Height,
  Width,
  FontSize,
  FontFamily,
  Padding,
  Gap,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const BadgesRewards = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.badgesRewards}
      contentContainerStyle={styles.badgesRewardsContent}
    >
      <View style={[styles.badgesRewardsInner, styles.chartButtonFlexBox]}>
        <View style={styles.badgesRewardsParent}>
          <Text
            style={[styles.badgesRewards2, styles.goToFlexBox]}
          >{`Badges & Rewards`}</Text>
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <Vector3
              style={[styles.frameChild, styles.goToPosition]}
              width={NaN}
              height={NaN}
            />
            <Pressable
              style={[styles.back, styles.backPosition]}
              onPress={() => navigation.navigate("FrameComponent6")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/Back.png")}
              />
            </Pressable>
            <Image
              style={[styles.informationIcon, styles.backPosition]}
              contentFit="cover"
              source={require("../assets/Information.png")}
            />
          </View>
        </View>
      </View>
      <FrameComponent17 />
      <View style={[styles.achievementsGridWrapper, styles.achievementsLayout]}>
        <View style={[styles.achievementsGrid, styles.achievementsLayout]}>
          <Text style={[styles.yourAchievements, styles.achievementsTypo]}>
            Your Achievements
          </Text>
          <View style={styles.kaytOl} />
        </View>
      </View>
      <FrameComponent18 />
      <View style={[styles.badgesRewardsChild, styles.achievementsLayout]}>
        <View style={[styles.achievementsGrid, styles.achievementsLayout]}>
          <Text style={[styles.lockedAchievements, styles.achievementsTypo]}>
            Locked Achievements
          </Text>
          <View style={styles.kaytOl} />
        </View>
      </View>
      <FrameComponent19 />
      <View style={[styles.chartButton, styles.chartButtonFlexBox]}>
        <Pressable
          style={styles.chartLayout}
          onPress={() => navigation.navigate("FrameComponent16")}
        >
          <View style={[styles.chartBackground, styles.chartLayout]} />
          <Pressable
            style={[styles.goToParent, styles.chartIconLayout]}
            onPress={() => navigation.navigate("FrameComponent16")}
          >
            <Text style={[styles.goTo, styles.goToPosition]}>Go to</Text>
            <Image
              style={[styles.chartIcon, styles.chartIconLayout]}
              contentFit="cover"
              source={require("../assets/Chart.png")}
            />
          </Pressable>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  badgesRewardsContent: {
    flexDirection: "column",
    paddingHorizontal: 28,
    paddingTop: 32,
    paddingBottom: 84,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 10,
    height: 1243,
  },
  chartButtonFlexBox: {
    zIndex: null,
    flexDirection: "row",
  },
  goToFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  frameChildLayout: {
    height: Height.height_76_5,
    width: Width.width_410,
  },
  goToPosition: {
    left: 0,
    position: "absolute",
  },
  backPosition: {
    top: 28,
    position: "absolute",
    zIndex: 1,
  },
  achievementsLayout: {
    height: Height.height_32,
    zIndex: null,
  },
  achievementsTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.fs_24,
    height: Height.height_22,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  chartLayout: {
    height: Height.height_50_56,
    width: Width.width_328,
  },
  chartIconLayout: {
    height: Height.height_40,
    position: "absolute",
  },
  badgesRewards: {
    backgroundColor: Color.colorGold,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    maxWidth: "100%",
    borderStyle: "solid",
    width: "100%",
  },
  badgesRewardsInner: {
    width: 270,
    height: 59,
    paddingLeft: 35,
    paddingBottom: 31,
    flexDirection: "row",
  },
  badgesRewardsParent: {
    zIndex: 1,
    width: Width.width_235,
    height: Height.height_28,
    flexDirection: "row",
  },
  badgesRewards2: {
    width: 238,
    fontSize: FontSize.fs_30,
    zIndex: 1,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    height: Height.height_28,
  },
  vectorParent: {
    top: -31,
    right: -113,
    position: "absolute",
    width: Width.width_410,
  },
  frameChild: {
    top: 0,
    height: Height.height_76_5,
    width: Width.width_410,
  },
  back: {
    left: 19,
    width: Width.width_30,
    height: Height.height_30,
  },
  icon: {
    height: "100%",
    nodeWidth: 30,
    nodeHeight: 30,
    width: "100%",
  },
  informationIcon: {
    left: 368,
    width: Width.width_20,
    height: Height.height_20,
  },
  achievementsGridWrapper: {
    width: Width.width_352,
    paddingLeft: Padding.padding_5,
    flexDirection: "row",
  },
  achievementsGrid: {
    width: Width.width_347,
    paddingBottom: Padding.padding_3,
    gap: Gap.gap_7,
  },
  yourAchievements: {
    width: 195,
  },
  kaytOl: {
    width: Width.width_350,
    boxShadow: BoxShadow.shadow_drop1,
    elevation: 8,
    borderColor: Color.colorDarkslateblue100,
    borderTopWidth: 3,
    height: Height.height_3,
    borderStyle: "solid",
  },
  badgesRewardsChild: {
    width: 351,
    paddingLeft: Padding.padding_4,
    flexDirection: "row",
  },
  lockedAchievements: {
    width: 218,
  },
  chartButton: {
    width: 341,
    height: Height.height_50_6,
    paddingLeft: Padding.padding_13,
    flexDirection: "row",
  },
  chartBackground: {
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_10,
    backgroundColor: Color.colorDarkslateblue300,
    left: 0,
    position: "absolute",
    top: 0,
  },
  goToParent: {
    left: 104,
    width: Width.width_121,
    top: 5,
    zIndex: 1,
  },
  goTo: {
    fontSize: FontSize.fs_34,
    fontFamily: FontFamily.leagueSpartanRegular,
    width: Width.width_82,
    height: Height.height_31,
    top: 5,
    textAlign: "left",
    color: Color.colorWhite,
  },
  chartIcon: {
    left: 81,
    width: Width.width_40,
    top: 0,
  },
});

export default BadgesRewards;
