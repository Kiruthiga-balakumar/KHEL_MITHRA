import * as React from "react";
import { ScrollView, Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import Vector3 from "../assets/Vector-3.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent23 from "../components/FrameComponent23";
import AnalysisLayout from "../components/AnalysisLayout";
import {
  Height,
  Width,
  Color,
  FontSize,
  FontFamily,
  Padding,
} from "../GlobalStyles";

const EgRecordTest = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.egRecordTest}
      contentContainerStyle={styles.egRecordTestContent}
    >
      <View style={[styles.egRecordTestInner, styles.recordLayout]}>
        <View style={[styles.recordTestParent, styles.recordLayout]}>
          <Text style={styles.recordTest}>Record Test</Text>
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <Vector3
              style={[styles.frameChild, styles.frameChildLayout]}
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
      <FrameComponent23 />
      <View style={styles.analysisLayoutWrapper}>
        <AnalysisLayout />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  egRecordTestContent: {
    flexDirection: "column",
    paddingHorizontal: 18,
    paddingTop: 32,
    paddingBottom: 35,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 28,
    height: 917,
  },
  recordLayout: {
    height: Height.height_28,
    flexDirection: "row",
  },
  frameChildLayout: {
    height: Height.height_76_5,
    width: Width.width_410,
    position: "absolute",
  },
  backPosition: {
    top: 28,
    position: "absolute",
    zIndex: 1,
  },
  egRecordTest: {
    backgroundColor: Color.colorGold,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
  egRecordTestInner: {
    width: 188,
    paddingLeft: 45,
    flexDirection: "row",
    zIndex: null,
  },
  recordTestParent: {
    zIndex: 1,
    width: 143,
    flexDirection: "row",
  },
  recordTest: {
    width: Width.width_146,
    fontSize: FontSize.fs_30,
    fontWeight: "500",
    fontFamily: FontFamily.leagueSpartanMedium,
    color: Color.colorWhite,
    textAlign: "left",
    zIndex: 1,
    height: Height.height_28,
  },
  vectorParent: {
    top: -31,
    right: -205,
  },
  frameChild: {
    top: 0,
    left: 0,
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
    left: 369,
    width: Width.width_20,
    height: Height.height_20,
  },
  analysisLayoutWrapper: {
    width: Width.width_366,
    height: Height.height_448,
    paddingLeft: Padding.padding_10,
    flexDirection: "row",
    zIndex: null,
  },
});

export default EgRecordTest;
