import * as React from "react";
import { ScrollView, Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import Vector3 from "../assets/Vector-3.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent8 from "../components/FrameComponent8";
import {
  Height,
  Color,
  Width,
  FontSize,
  FontFamily,
  Padding,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const RecordTest = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.recordTest}
      contentContainerStyle={styles.recordTestScrollViewContent}
    >
      <View style={[styles.recordTestInner, styles.frameWrapperFlexBox]}>
        <View style={[styles.recordTestParent, styles.rectangleGroupFlexBox]}>
          <Text style={[styles.recordTest2, styles.testPosition]}>
            Record Test
          </Text>
          <View style={styles.vectorParent}>
            <Vector3 style={styles.frameChild} width={NaN} height={NaN} />
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
      <FrameComponent8 />
      <View style={[styles.recordTestChild, styles.frameParentLayout]}>
        <View style={[styles.frameParent, styles.frameParentLayout]}>
          <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
            <Pressable style={styles.rectangleParent}>
              <View style={[styles.frameItem, styles.framePosition]} />
              <Text style={[styles.analyseNow, styles.testPosition]}>
                Analyse now
              </Text>
            </Pressable>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleGroupFlexBox]}>
            <View style={[styles.frameInner, styles.framePosition]} />
            <Text style={[styles.selectYourTest, styles.testPosition]}>
              Select your test to get instruction about it. (how to do)
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recordTestScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 18,
    paddingTop: 32,
    paddingBottom: 35,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 28,
    height: 917,
  },
  frameWrapperFlexBox: {
    zIndex: null,
    flexDirection: "row",
  },
  rectangleGroupFlexBox: {
    zIndex: 1,
    flexDirection: "row",
  },
  testPosition: {
    zIndex: 1,
    textAlign: "left",
  },
  backPosition: {
    top: 28,
    position: "absolute",
    zIndex: 1,
  },
  frameParentLayout: {
    height: Height.height_448,
    zIndex: null,
  },
  framePosition: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  recordTest: {
    backgroundColor: Color.colorGold,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
  recordTestInner: {
    width: 188,
    paddingLeft: 45,
    flexDirection: "row",
    height: Height.height_28,
  },
  recordTestParent: {
    width: 143,
    height: Height.height_28,
  },
  recordTest2: {
    width: Width.width_146,
    fontSize: FontSize.fs_30,
    fontWeight: "500",
    fontFamily: FontFamily.leagueSpartanMedium,
    color: Color.colorWhite,
    textAlign: "left",
    height: Height.height_28,
  },
  vectorParent: {
    top: -31,
    right: -205,
    height: Height.height_76_5,
    width: Width.width_410,
    position: "absolute",
  },
  frameChild: {
    left: 0,
    top: 0,
    height: Height.height_76_5,
    width: Width.width_410,
    position: "absolute",
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
  recordTestChild: {
    width: Width.width_366,
    paddingLeft: Padding.padding_10,
    flexDirection: "row",
  },
  frameParent: {
    gap: 39,
    width: Width.width_356,
  },
  frameWrapper: {
    width: Width.width_342,
    height: Height.height_50_6,
    paddingLeft: Padding.padding_14,
    flexDirection: "row",
  },
  rectangleParent: {
    height: Height.height_50_56,
    paddingLeft: 84,
    paddingTop: Padding.padding_10,
    paddingRight: 65,
    paddingBottom: 9,
    width: Width.width_328,
    flexDirection: "row",
  },
  frameItem: {
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_10,
    backgroundColor: Color.colorForestgreen,
    width: Width.width_328,
  },
  analyseNow: {
    height: Height.height_31,
    width: Width.width_178,
    fontSize: FontSize.fs_34,
    fontFamily: FontFamily.leagueSpartanRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  rectangleGroup: {
    height: 358,
    paddingLeft: Padding.padding_23,
    paddingTop: Padding.padding_22,
    paddingRight: Padding.padding_5,
    paddingBottom: 286,
    width: Width.width_356,
  },
  frameInner: {
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1000,
    width: Width.width_356,
  },
  selectYourTest: {
    width: 326,
    fontSize: FontSize.fs_20,
    fontFamily: FontFamily.inderRegular,
    color: Color.colorGray900,
  },
});

export default RecordTest;
