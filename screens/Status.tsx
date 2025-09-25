import * as React from "react";
import { ScrollView, Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import Vector11 from "../assets/Vector-11.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent1 from "../components/FrameComponent1";
import AsicsContainer from "../components/AsicsContainer";
import FrameComponent2 from "../components/FrameComponent2";
import {
  Height,
  Color,
  Width,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const Status = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.status}
      contentContainerStyle={styles.statusScrollViewContent}
    >
      <View style={[styles.statusInner, styles.statusFlexBox]}>
        <View style={[styles.statusParent, styles.statusFlexBox]}>
          <Text style={styles.status2}>Status</Text>
          <View style={[styles.vectorParent, styles.frameChildLayout]}>
            <Vector11
              style={[styles.frameChild, styles.frameChildLayout]}
              width={411}
              height={108}
            />
            <Pressable
              style={[styles.back, styles.backPosition]}
              onPress={() => navigation.navigate("FrameComponent20")}
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
      <FrameComponent1 />
      <View style={styles.asicsContainerParent}>
        <AsicsContainer />
        <FrameComponent2 />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  statusScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 13,
    paddingTop: 31,
    paddingBottom: 288,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 40,
    height: 917,
  },
  statusFlexBox: {
    flexDirection: "row",
    height: Height.height_28,
  },
  frameChildLayout: {
    width: 411,
    position: "absolute",
  },
  backPosition: {
    position: "absolute",
    zIndex: 1,
  },
  status: {
    backgroundColor: Color.colorGold,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
  statusInner: {
    width: 135,
    paddingLeft: 54,
    zIndex: null,
  },
  statusParent: {
    zIndex: 1,
    width: Width.width_81,
  },
  status2: {
    width: Width.width_84,
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
    right: -263,
    height: 79,
  },
  frameChild: {
    top: -29,
    left: 0,
    height: 108,
  },
  back: {
    left: 13,
    top: 29,
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
    top: 34,
    left: 369,
    width: Width.width_20,
    height: Height.height_20,
  },
  asicsContainerParent: {
    width: Width.width_367,
    height: 255,
    gap: Gap.gap_32,
    zIndex: null,
  },
});

export default Status;
