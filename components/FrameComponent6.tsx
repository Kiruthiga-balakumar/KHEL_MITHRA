import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Height,
  Width,
  Color,
  FontFamily,
  FontSize,
  Border,
  BoxShadow,
} from "../GlobalStyles";

const FrameComponent6 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.visualContainerParent}>
      <View style={styles.visualPosition}>
        <View style={[styles.visualBars, styles.visualPosition]} />
        <View style={[styles.visualBars, styles.visualPosition]} />
      </View>
      <Pressable
        style={[styles.metricBarsParent, styles.rectangleParentPosition]}
        onPress={() => navigation.navigate("FrameComponent7")}
      >
        <View style={styles.metricBars} />
        <Text style={[styles.recordTest, styles.recordTestPosition]}>
          Record Test
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleParentPosition]}
        onPress={() => navigation.navigate("AvatarContainer")}
      >
        <View style={styles.metricBars} />
        <Text style={[styles.performanceResults, styles.badgesRewardsPosition]}>
          Performance Results
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleParentPosition]}
        onPress={() => navigation.navigate("FrameComponent16")}
      >
        <View style={styles.metricBars} />
        <Text style={[styles.leaderboards, styles.recordTestPosition]}>
          Leaderboards
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleParentPosition]}
        onPress={() => navigation.navigate("BadgesRewards")}
      >
        <View style={styles.metricBars} />
        <Text
          style={[styles.badgesRewards, styles.badgesRewardsPosition]}
        >{`Badges & Rewards`}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  visualPosition: {
    left: 0,
    top: 0,
    height: Height.height_410,
    width: Width.width_356,
    position: "absolute",
  },
  rectangleParentPosition: {
    zIndex: 3,
    left: 14,
    height: Height.height_50_56,
    width: Width.width_328,
    position: "absolute",
  },
  recordTestPosition: {
    zIndex: 1,
    height: Height.height_31,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.fs_34,
    top: 10,
    position: "absolute",
  },
  badgesRewardsPosition: {
    left: "50%",
    zIndex: 1,
    height: Height.height_31,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.fs_34,
    top: 10,
    position: "absolute",
  },
  visualContainerParent: {
    top: 263,
    left: 32,
    height: Height.height_410,
    width: Width.width_356,
    position: "absolute",
  },
  visualBars: {
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1100,
  },
  metricBarsParent: {
    top: 44,
  },
  metricBars: {
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_10,
    backgroundColor: Color.colorDarkslateblue300,
    height: Height.height_50_56,
    width: Width.width_328,
    left: 0,
    top: 0,
    position: "absolute",
  },
  recordTest: {
    left: 84,
    width: 163,
  },
  rectangleParent: {
    top: 135,
  },
  performanceResults: {
    marginLeft: -141,
    width: 286,
  },
  rectangleGroup: {
    top: 225,
  },
  leaderboards: {
    left: 68,
    width: 195,
  },
  rectangleContainer: {
    top: 316,
  },
  badgesRewards: {
    marginLeft: -136,
    width: 264,
  },
});

export default FrameComponent6;
