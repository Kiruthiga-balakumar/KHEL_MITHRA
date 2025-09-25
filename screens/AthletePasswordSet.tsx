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
import Group407 from "../assets/Group-407.svg";
import VisibilityOFF from "../assets/visibility-OFF.svg";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import {
  Color,
  Padding,
  Width,
  Height,
  FontSize,
  FontFamily,
  Border,
  Gap,
} from "../GlobalStyles";

const AthletePasswordSet = () => {
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
          <Group407
            style={styles.athletePasswordSetChild}
            width={NaN}
            height={NaN}
          />
          <Image
            style={styles.whatsappImage20250909At2Icon}
            contentFit="cover"
            source={require("../assets/WhatsApp-Image-2025-09-09-at-20-57-53-61d7975d-removebg-preview-3.png")}
          />
          <View style={styles.athletePasswordSetInner}>
            <View style={styles.frameParent}>
              <View style={styles.helloWrapper}>
                <Text style={[styles.hello, styles.setClr]}>HELLO!</Text>
              </View>
              <View style={styles.rectangleParent}>
                <View style={[styles.frameChild, styles.framePosition]} />
                <Text style={[styles.set, styles.setClr]}>SET</Text>
                <View style={styles.frameWrapper}>
                  <View style={styles.setPasswordParent}>
                    <Text style={[styles.setPassword, styles.setClr]}>
                      Set Password
                    </Text>
                    <View
                      style={[
                        styles.asAthleteWrapper,
                        styles.frameContainerSpaceBlock,
                      ]}
                    >
                      <Text style={styles.asAthlete}>as athlete</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.frameContainer,
                    styles.frameContainerSpaceBlock,
                  ]}
                >
                  <View style={styles.frameGroup}>
                    <View style={[styles.frameView, styles.frameViewLayout]}>
                      <View
                        style={[styles.rectangleGroup, styles.frameViewLayout]}
                      >
                        <View
                          style={[styles.frameItem, styles.framePosition]}
                        />
                        <View style={styles.lockParent}>
                          <Image
                            style={styles.lockIcon}
                            contentFit="cover"
                            source={require("../assets/Lock.png")}
                          />
                          <TextInput
                            style={styles.newPassword}
                            placeholder="New Password"
                            placeholderTextColor="rgba(0, 0, 0, 0.6)"
                          />
                        </View>
                        <VisibilityOFF
                          style={styles.visibilityOffIcon}
                          width={NaN}
                          height={22}
                        />
                      </View>
                    </View>
                    <FrameComponent3 />
                  </View>
                </View>
                <FrameComponent4 />
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
  frameContainerSpaceBlock: {
    paddingLeft: Padding.padding_6,
    flexDirection: "row",
  },
  frameViewLayout: {
    height: 49,
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
    gap: 13,
    zIndex: null,
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
    paddingLeft: Padding.padding_11,
    paddingTop: 38,
    paddingRight: Padding.padding_10,
    paddingBottom: 9,
    gap: 42,
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
    paddingLeft: 67,
    height: 90,
    flexDirection: "row",
  },
  setPasswordParent: {
    width: Width.width_201,
    gap: Gap.gap_10,
    zIndex: 2,
    height: 90,
  },
  setPassword: {
    width: 204,
    height: Height.height_47,
    fontSize: FontSize.fs_36,
    fontFamily: FontFamily.joanRegular,
    zIndex: 2,
    textAlign: "left",
  },
  asAthleteWrapper: {
    width: 194,
    height: Height.height_33,
  },
  asAthlete: {
    width: 191,
    fontSize: FontSize.fs_26,
    fontFamily: FontFamily.lexendPetaRegular,
    color: Color.colorGray1500,
    height: Height.height_33,
    zIndex: 2,
    textAlign: "left",
  },
  frameContainer: {
    width: Width.width_335,
    height: 266,
    paddingBottom: 108,
  },
  frameGroup: {
    height: 158,
    gap: 35,
    width: 329,
    zIndex: null,
  },
  frameView: {
    paddingLeft: Padding.padding_1,
    width: 329,
    zIndex: 2,
  },
  rectangleGroup: {
    paddingHorizontal: 13,
    paddingTop: 12,
    paddingBottom: 13,
    gap: 125,
    width: Width.width_328,
    zIndex: 2,
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
});

export default AthletePasswordSet;
