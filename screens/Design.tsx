import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Line42 from "../assets/Line-42.svg";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  Gap,
  Height,
  Width,
} from "../GlobalStyles";

const Design = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={styles.viewBg}>
      <View style={[styles.view, styles.viewBg]}>
        <Pressable onPress={() => navigation.navigate("AthleteDetails")}>
          <Text
            style={[styles.designUpdateDetails, styles.designTypo]}
          >{`Update Details
`}</Text>
        </Pressable>
        <Line42 style={styles.child} width={NaN} height={1} />
        <View style={styles.logOutWrapper}>
          <Pressable onPress={() => navigation.navigate("ActionButton")}>
            <Text style={[styles.designLogOut, styles.designTypo]}>
              Log Out
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  design: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewBg: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  designTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.fs_15,
  },
  view: {
    width: "100%",
    height: 81,
    borderTopLeftRadius: Border.br_18,
    borderTopRightRadius: Border.br_18,
    overflow: "hidden",
    paddingLeft: Padding.padding_14,
    paddingTop: Padding.padding_14,
    paddingRight: Padding.padding_13,
    paddingBottom: Padding.padding_13,
    gap: Gap.gap_9,
  },
  designUpdateDetails: {
    width: 112,
    height: Height.height_18,
    color: Color.colorGray200,
  },
  child: {
    width: Width.width_108,
    height: 1,
  },
  logOutWrapper: {
    zIndex: null,
    width: Width.width_84,
    flexDirection: "row",
    paddingLeft: Padding.padding_26,
    height: Height.height_17,
  },
  designLogOut: {
    width: Width.width_61,
    color: Color.colorBlack,
    height: Height.height_17,
  },
});

export default Design;
