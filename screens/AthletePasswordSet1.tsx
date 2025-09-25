import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Component2 from "../assets/";
import Component3 from "../assets/";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import {
  Color,
  Width,
  Height,
  Padding,
  FontSize,
  FontFamily,
  Border,
  Gap,
} from "../GlobalStyles";

const AthletePasswordSet1 = () => {
  return (
    <SafeAreaView style={styles.scrollviewFlexBox}>
      <KeyboardAvoidingView
        style={styles.scrollviewFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.frameItemBorder]}
          contentContainerStyle={styles.athletePasswordSetContent}
        >
          <Component2
            style={styles.athletePasswordSetChild}
            width={NaN}
            height={NaN}
          />
          <Image
            style={styles.whatsappImage20250909At2Icon}
            contentFit="cover"
          />
          <View style={styles.athletePasswordSetInner}>
            <View style={styles.frameParent}>
              <View style={styles.helloWrapper}>
                <Text style={[styles.hello, styles.setClr]}>HELLO!</Text>
              </View>
              <View style={styles.rectangleParent}>
                <View style={[styles.frameChild, styles.framePosition]} />
                <Text style={[styles.set, styles.setClr]}>SET</Text>
                <View style={[styles.frameWrapper, styles.frameFlexBox]}>
                  <View style={styles.setPasswordParent}>
                    <Text style={[styles.setPassword, styles.setClr]}>
                      Set Password
                    </Text>
                    <View style={styles.asSponsorWrapper}>
                      <Text style={styles.asSponsor}>as sponsor</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rectangleGroup}>
                  <View style={[styles.frameItem, styles.framePosition]} />
                  <View style={styles.lockParent}>
                    <Image style={styles.lockIcon} contentFit="cover" />
                    <TextInput
                      style={styles.newPassword}
                      placeholder="New Password"
                      placeholderTextColor="rgba(0, 0, 0, 0.6)"
                    />
                  </View>
                  <Component3
                    style={styles.visibilityOffIcon}
                    width={NaN}
                    height={22}
                  />
                </View>
                <View style={[styles.frameContainer, styles.frameFlexBox]}>
                  <FrameComponent3 />
                </View>
                <View style={[styles.frameView, styles.frameFlexBox]}>
                  <FrameComponent4 frameViewZIndex={2} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  athletePasswordSetContent: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 101,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 25,
    height: 917,
  },
  frameItemBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  setClr: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  framePosition: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  scrollviewFlexBox: {
    flex: 1,
    width: "100%",
  },
  scrollview: {
    backgroundColor: Color.colorDarkslateblue100,
    maxWidth: "100%",
    flex: 1,
    width: "100%",
  },
  athletePasswordSetChild: {
    width: Width.width_412_17,
    right: -1,
    height: Height.height_915_21,
    bottom: 0,
    position: "absolute",
  },
  whatsappImage20250909At2Icon: {
    width: Width.width_109,
    height: Height.height_116,
    zIndex: 1,
  },
  athletePasswordSetInner: {
    width: 371,
    paddingLeft: Padding.padding_15,
    flexDirection: "row",
    height: 660,
  },
  frameParent: {
    zIndex: null,
    gap: 13,
    width: Width.width_356,
    height: 660,
  },
  helloWrapper: {
    width: 224,
    paddingLeft: 129,
    height: Height.height_44,
    zIndex: 1,
    flexDirection: "row",
  },
  hello: {
    width: 98,
    fontSize: FontSize.fs_35,
    fontFamily: FontFamily.jaro,
    textAlign: "left",
    height: Height.height_44,
    zIndex: 1,
  },
  rectangleParent: {
    height: Height.height_603,
    alignItems: "flex-end",
    paddingHorizontal: Padding.padding_10,
    paddingTop: 38,
    paddingBottom: 9,
    gap: 35,
    zIndex: 1,
    width: Width.width_356,
  },
  frameChild: {
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1600,
    width: Width.width_356,
    zIndex: 1,
  },
  set: {
    width: Width.width_85,
    height: Height.height_22,
    right: 119,
    bottom: 89,
    fontSize: FontSize.fs_20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    zIndex: 3,
    textAlign: "left",
    position: "absolute",
    color: Color.colorWhite,
  },
  frameWrapper: {
    width: Width.width_268,
    height: 97,
    paddingRight: Padding.padding_63,
    paddingBottom: 6,
  },
  setPasswordParent: {
    height: 90,
    zIndex: 2,
    gap: Gap.gap_10,
    width: 205,
  },
  setPassword: {
    width: 204,
    height: Height.height_47,
    fontSize: FontSize.fs_36,
    fontFamily: FontFamily.joanRegular,
    zIndex: 2,
    textAlign: "left",
  },
  asSponsorWrapper: {
    paddingLeft: Padding.padding_6,
    height: Height.height_33,
    width: 205,
    flexDirection: "row",
  },
  asSponsor: {
    width: Width.width_202,
    fontSize: FontSize.fs_26,
    fontFamily: FontFamily.lexendPetaRegular,
    color: Color.colorGray1500,
    height: Height.height_33,
    zIndex: 2,
    textAlign: "left",
  },
  rectangleGroup: {
    height: 49,
    paddingHorizontal: 13,
    paddingTop: 12,
    paddingBottom: 13,
    gap: 125,
    width: Width.width_328,
    zIndex: 2,
    flexDirection: "row",
  },
  frameItem: {
    borderRadius: Border.br_10,
    backgroundColor: Color.colorGray1400,
    width: Width.width_328,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  lockParent: {
    width: 151,
    gap: 8,
    height: 21,
    flexDirection: "row",
  },
  lockIcon: {
    width: 21,
    height: 21,
    zIndex: 1,
  },
  newPassword: {
    height: Height.height_21,
    width: 124,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.fs_17,
    zIndex: 1,
  },
  visibilityOffIcon: {
    width: Width.width_23_02,
    height: 22,
    zIndex: 1,
  },
  frameContainer: {
    width: 329,
    height: 188,
    paddingRight: Padding.padding_1,
    paddingBottom: 114,
  },
  frameView: {
    width: Width.width_335,
    height: 116,
    paddingRight: Padding.padding_7,
  },
});

export default AthletePasswordSet1;
