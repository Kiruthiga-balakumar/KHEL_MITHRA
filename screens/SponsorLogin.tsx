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
import Container from "../components/Container";
import ActionButton from "../components/ActionButton";
import Line32 from "../assets/Line-32.svg";
import {
  Color,
  Width,
  Height,
  FontSize,
  FontFamily,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const SponsorLogin = () => {
  return (
    <SafeAreaView style={styles.scrollviewFlexBox}>
      <KeyboardAvoidingView
        style={styles.scrollviewFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.frameItemBorder]}
          contentContainerStyle={styles.sponsorLoginScrollViewContent}
        >
          <Group407 style={styles.sponsorLoginChild} width={NaN} height={NaN} />
          <Container
            whatsAppImageAt={require("../assets/WhatsApp-Image-2025-09-09-at-20-57-53-61d7975d-removebg-preview-3.png")}
            onGroupPressablePress={() => {}}
            frameViewZIndex={1}
            frameViewPaddingTop={1}
          />
          <View style={styles.welcomeWrapper}>
            <Text style={[styles.welcome, styles.logInClr]}>WELCOME!</Text>
          </View>
          <View style={styles.sponsorLoginInner}>
            <View style={styles.rectangleParent}>
              <View style={[styles.frameChild, styles.framePosition]} />
              <View style={[styles.frameWrapper, styles.frameFlexBox]}>
                <View style={styles.frameParent}>
                  <View style={styles.logInWrapper}>
                    <Text style={[styles.logIn, styles.logInClr]}>Log in</Text>
                  </View>
                  <Text style={styles.asSponsor}>as sponsor</Text>
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.rectangleGroup}>
                  <View style={[styles.frameItem, styles.framePosition]} />
                  <Image
                    style={styles.personIcon}
                    contentFit="cover"
                    source={require("../assets/Person1.png")}
                  />
                  <TextInput
                    style={styles.username}
                    placeholder="Username"
                    placeholderTextColor="rgba(0, 0, 0, 0.6)"
                  />
                </View>
                <View style={styles.rectangleGroup}>
                  <View style={[styles.frameItem, styles.framePosition]} />
                  <Image
                    style={styles.personIcon}
                    contentFit="cover"
                    source={require("../assets/Lock1.png")}
                  />
                  <TextInput
                    style={styles.username}
                    placeholder="Password"
                    placeholderTextColor="rgba(0, 0, 0, 0.6)"
                  />
                </View>
              </View>
              <View style={[styles.frameContainer, styles.frameFlexBox]}>
                <ActionButton
                  actionButtonZIndex={2}
                  onGroupPressablePress={() => {}}
                  groupPressablePaddingRight={102}
                  frameViewWidth={208}
                  frameViewPaddingRight={63}
                  line32={<Line32 width={111} height={3} />}
                  onGroupPressablePress1={() => {}}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sponsorLoginScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 101,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 19,
    height: 917,
  },
  frameItemBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  logInClr: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  framePosition: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
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
  sponsorLoginChild: {
    width: Width.width_412_17,
    right: -3,
    height: Height.height_915_21,
    top: 0,
    position: "absolute",
  },
  welcomeWrapper: {
    width: Width.width_267,
    paddingLeft: 116,
    flexDirection: "row",
    height: Height.height_44,
    zIndex: 1,
  },
  welcome: {
    width: Width.width_154,
    fontSize: FontSize.fs_35,
    fontFamily: FontFamily.jaro,
    zIndex: 1,
    textAlign: "left",
    height: Height.height_44,
  },
  sponsorLoginInner: {
    zIndex: null,
    width: Width.width_369,
    paddingLeft: Padding.padding_13,
    height: Height.height_603,
    flexDirection: "row",
  },
  rectangleParent: {
    alignItems: "flex-end",
    paddingHorizontal: Padding.padding_25,
    paddingTop: Padding.padding_36,
    paddingBottom: Padding.padding_80,
    gap: Gap.gap_71,
    width: Width.width_356,
    height: Height.height_603,
    zIndex: 1,
  },
  frameChild: {
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1600,
    width: Width.width_356,
    zIndex: 1,
  },
  frameWrapper: {
    width: 252,
    paddingRight: 42,
    height: Height.height_96,
  },
  frameParent: {
    width: 210,
    gap: Gap.gap_16,
    zIndex: 2,
    height: Height.height_96,
  },
  logInWrapper: {
    width: Width.width_147,
    paddingLeft: 51,
    height: Height.height_47,
    flexDirection: "row",
  },
  logIn: {
    width: 99,
    fontSize: FontSize.fs_36,
    fontFamily: FontFamily.joanRegular,
    zIndex: 2,
    height: Height.height_47,
    textAlign: "left",
  },
  asSponsor: {
    width: 213,
    height: Height.height_33,
    fontSize: FontSize.fs_26,
    fontFamily: FontFamily.lexendPetaRegular,
    color: Color.colorGray1500,
    zIndex: 2,
    textAlign: "left",
  },
  frameGroup: {
    height: 141,
    paddingBottom: Padding.padding_14_4,
    gap: 41,
    width: Width.width_301,
  },
  rectangleGroup: {
    height: Height.height_43,
    paddingHorizontal: Padding.padding_12,
    paddingTop: Padding.padding_11,
    paddingBottom: Padding.padding_10_5,
    gap: Gap.gap_3_5,
    width: Width.width_301,
    zIndex: 2,
    flexDirection: "row",
  },
  frameItem: {
    borderRadius: Border.br_10,
    backgroundColor: Color.colorGray1400,
    width: Width.width_301,
    zIndex: 2,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  personIcon: {
    width: Width.width_21_53,
    height: Height.height_21_53,
    zIndex: 3,
  },
  username: {
    height: Height.height_21,
    width: Width.width_212,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.fs_17,
    zIndex: 3,
  },
  frameContainer: {
    width: 305,
    height: Height.height_107_6,
    paddingRight: 4,
  },
});

export default SponsorLogin;
