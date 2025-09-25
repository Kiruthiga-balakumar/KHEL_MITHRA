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
  Width,
  Height,
} from "../GlobalStyles";

const Website = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.website}>
      <View style={[styles.athleteWrapper, styles.marketingFlexBox]}>
        <Pressable onPress={() => navigation.navigate("ActionButton")}>
          <Text style={[styles.websiteAthlete, styles.websiteTypo]}>
            Athlete
          </Text>
        </Pressable>
      </View>
      <Line42 style={styles.websiteChild} width={NaN} height={1} />
      <View style={[styles.marketing, styles.marketingFlexBox]}>
        <Pressable onPress={() => navigation.navigate("SponsorLogin")}>
          <Text style={[styles.websiteSponsor, styles.websiteTypo]}>
            Sponsor
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marketingFlexBox: {
    flexDirection: "row",
    zIndex: null,
  },
  websiteTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.fs_15,
  },
  website: {
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
  athleteWrapper: {
    width: Width.width_82,
    paddingLeft: Padding.padding_27,
    height: Height.height_18,
  },
  websiteAthlete: {
    width: Width.width_58,
    color: Color.colorGray200,
    height: Height.height_18,
  },
  websiteChild: {
    width: Width.width_108,
    height: 1,
  },
  marketing: {
    width: Width.width_85,
    paddingLeft: Padding.padding_24,
    height: Height.height_17,
  },
  websiteSponsor: {
    width: Width.width_64,
    color: Color.colorBlack,
    height: Height.height_17,
  },
});

export default Website;
