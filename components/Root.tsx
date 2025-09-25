import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Line42 from "../assets/Line-42.svg";
import {
  FontFamily,
  FontSize,
  Border,
  Color,
  Padding,
  Gap,
  Height,
  Width,
} from "../GlobalStyles";

const Root = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.root}>
      <View style={[styles.saiOfficialWrapper, styles.wrapperFlexBox]}>
        <Pressable onPress={() => navigation.navigate("FrameComponent5")}>
          <Text style={[styles.saiOfficial2, styles.sponsor2Typo]}>
            SAI Official
          </Text>
        </Pressable>
      </View>
      <Line42 style={styles.rootChild} width={NaN} height={1} />
      <View style={[styles.sponsorWrapper, styles.wrapperFlexBox]}>
        <Pressable onPress={() => navigation.navigate("SponsorLogin")}>
          <Text style={[styles.sponsor2, styles.sponsor2Typo]}>Sponsor</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    flexDirection: "row",
    zIndex: null,
  },
  sponsor2Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.fs_15,
  },
  root: {
    width: 136,
    height: 81,
    borderTopLeftRadius: Border.br_18,
    borderTopRightRadius: Border.br_18,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    paddingHorizontal: Padding.padding_14,
    paddingTop: Padding.padding_14,
    paddingBottom: Padding.padding_13,
    gap: Gap.gap_9,
  },
  saiOfficialWrapper: {
    width: 95,
    paddingLeft: Padding.padding_13,
    height: Height.height_18,
  },
  saiOfficial2: {
    color: Color.colorGray200,
    width: Width.width_85,
    height: Height.height_18,
  },
  rootChild: {
    width: Width.width_108,
    height: 1,
  },
  sponsorWrapper: {
    paddingLeft: Padding.padding_23,
    height: Height.height_17,
    width: Width.width_85,
  },
  sponsor2: {
    width: Width.width_65,
    color: Color.colorBlack,
    height: Height.height_17,
  },
});

export default Root;
