import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Group407 from "../assets/Group-407.svg";
import FrameComponent5 from "../components/FrameComponent5";
import VisibilityOFF1 from "../assets/visibility-OFF1.svg";
import {
  Padding,
  Width,
  Color,
  Border,
  Height,
  FontFamily,
  FontSize,
  Gap,
  LineHeight,
} from "../GlobalStyles";

const SAILogin = () => {
  return (
    <SafeAreaView style={styles.saiLoginFlexBox}>
      <KeyboardAvoidingView
        style={styles.saiLoginFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.sAILoginScrollViewContent}
        >
          <Group407 style={styles.saiLoginChild} width={NaN} height={NaN} />
          <FrameComponent5 />
          <View style={styles.saiLoginInner}>
            <View style={styles.inputBackgroundParent}>
              <View
                style={[styles.inputBackground, styles.inputBackgroundPosition]}
              />
              <View style={[styles.frameWrapper, styles.frameFlexBox]}>
                <View style={styles.frameParent}>
                  <View style={styles.logInWrapper}>
                    <Text style={styles.logIn}>Log in</Text>
                  </View>
                  <Text style={styles.asSaiOfficial}>as SAI official</Text>
                </View>
              </View>
              <View style={[styles.frameContainer, styles.frameFlexBox]}>
                <View style={styles.frameGroup}>
                  <View
                    style={[
                      styles.usernameBackgroundParent,
                      styles.parentSpaceBlock,
                    ]}
                  >
                    <TextInput
                      style={[
                        styles.usernameBackground,
                        styles.backgroundPosition,
                      ]}
                    />
                    <View style={styles.userIcon}>
                      <Image
                        style={[styles.personIcon, styles.lockIconLayout]}
                        contentFit="cover"
                        source={require("../assets/Person1.png")}
                      />
                      <Image
                        style={[
                          styles.saiLoginPersonIcon,
                          styles.lockIconLayout,
                        ]}
                        contentFit="cover"
                        source={require("../assets/Person1.png")}
                      />
                    </View>
                    <View style={styles.inputDetailsWrapper}>
                      <View style={styles.inputDetails}>
                        <View style={styles.usernameWrapper}>
                          <Text style={[styles.username, styles.usernameTypo]}>
                            Username
                          </Text>
                        </View>
                        <View style={styles.usernameInput}>
                          <Text
                            style={[
                              styles.saiLoginUsername,
                              styles.usernameTypo,
                            ]}
                          >
                            Username
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={[styles.passwordIconParent, styles.parentSpaceBlock]}
                  >
                    <View style={styles.passwordIcon}>
                      <Image
                        style={[styles.lockIcon, styles.lockIconLayout]}
                        contentFit="cover"
                        source={require("../assets/Lock1.png")}
                      />
                      <Image
                        style={[styles.saiLoginLockIcon, styles.lockIconLayout]}
                        contentFit="cover"
                        source={require("../assets/Lock1.png")}
                      />
                    </View>
                    <View
                      style={[
                        styles.passwordBackground,
                        styles.backgroundPosition,
                      ]}
                    />
                    <View style={styles.passwordParent}>
                      <Text style={[styles.password, styles.usernameTypo]}>
                        Password
                      </Text>
                      <View style={styles.passwordInput}>
                        <TextInput
                          style={[styles.uniqueId, styles.uniqueIdLayout]}
                          placeholder="Unique ID"
                          placeholderTextColor="rgba(0, 0, 0, 0.6)"
                        />
                      </View>
                    </View>
                    <VisibilityOFF1
                      style={[styles.visibilityOffIcon, styles.uniqueIdLayout]}
                      width={23}
                      height={NaN}
                    />
                  </View>
                </View>
              </View>
              <Pressable
                style={[styles.rectangleParent, styles.frameChildLayout]}
                onPress={() => {}}
              >
                <View style={[styles.frameChild, styles.frameChildLayout]} />
                <Text style={styles.saiLoginLogIn}>Log in</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sAILoginScrollViewContent: {
    flexDirection: "column",
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 24,
    paddingBottom: 101,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 28,
    height: 917,
  },
  inputBackgroundPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameFlexBox: {
    paddingRight: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  parentSpaceBlock: {
    paddingTop: Padding.padding_11,
    zIndex: 3,
    width: Width.width_301,
    flexDirection: "row",
  },
  backgroundPosition: {
    zIndex: 3,
    backgroundColor: Color.colorGray1400,
    borderRadius: Border.br_10,
    width: Width.width_301,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  lockIconLayout: {
    height: Height.height_21_53,
    width: Width.width_21_53,
  },
  usernameTypo: {
    color: Color.colorGray1200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_17,
    height: Height.height_21,
    textAlign: "left",
  },
  uniqueIdLayout: {
    height: Height.height_19,
    zIndex: 4,
  },
  frameChildLayout: {
    borderWidth: 2,
    borderColor: Color.colorPowderblue100,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_50,
    height: Height.height_44_48,
    width: Width.width_300_13,
    borderStyle: "solid",
  },
  saiLoginFlexBox: {
    flex: 1,
    width: "100%",
  },
  scrollview: {
    backgroundColor: Color.colorDarkslateblue100,
    maxWidth: "100%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    flex: 1,
    width: "100%",
  },
  saiLoginChild: {
    width: Width.width_412_17,
    right: -2,
    bottom: 1,
    height: Height.height_915_21,
    position: "absolute",
  },
  saiLoginInner: {
    width: 360,
    paddingRight: Padding.padding_4,
    justifyContent: "flex-end",
    height: Height.height_603,
    flexDirection: "row",
    zIndex: null,
  },
  inputBackgroundParent: {
    zIndex: 1,
    paddingLeft: Padding.padding_21,
    paddingTop: Padding.padding_25,
    paddingRight: 32,
    paddingBottom: 140,
    gap: 70,
    alignItems: "flex-end",
    width: Width.width_356,
    height: Height.height_603,
  },
  inputBackground: {
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1600,
    zIndex: 1,
    bottom: 0,
    right: 0,
    left: 0,
    width: Width.width_356,
  },
  frameWrapper: {
    width: 276,
    height: 94,
  },
  frameParent: {
    width: Width.width_275,
    gap: Gap.gap_22,
    zIndex: 2,
    height: 94,
  },
  logInWrapper: {
    width: Width.width_174,
    paddingLeft: 78,
    height: 39,
    flexDirection: "row",
  },
  logIn: {
    width: 99,
    fontSize: FontSize.fs_36,
    fontFamily: FontFamily.joanRegular,
    color: Color.colorSnow300,
    zIndex: 2,
    textAlign: "left",
    height: 39,
  },
  asSaiOfficial: {
    width: 278,
    height: Height.height_33,
    fontSize: FontSize.fs_26,
    fontFamily: FontFamily.lexendPetaRegular,
    color: Color.colorSnow400,
    zIndex: 2,
    textAlign: "left",
  },
  frameContainer: {
    width: 302,
    height: 159,
    paddingBottom: Padding.padding_16,
  },
  frameGroup: {
    height: 143,
    gap: 52,
    width: Width.width_301,
    zIndex: null,
  },
  usernameBackgroundParent: {
    height: Height.height_46,
    paddingHorizontal: Padding.padding_14,
    gap: 10,
  },
  usernameBackground: {
    height: Height.height_45,
  },
  userIcon: {
    width: Width.width_21_5,
    height: 22,
    flexDirection: "row",
  },
  personIcon: {
    right: -7,
    bottom: -14,
    zIndex: 2,
    position: "absolute",
  },
  saiLoginPersonIcon: {
    zIndex: 4,
  },
  inputDetailsWrapper: {
    height: 35,
    paddingTop: Padding.padding_1,
    width: 211,
  },
  inputDetails: {
    height: Height.height_34,
    width: 211,
    zIndex: null,
  },
  usernameWrapper: {
    zIndex: 4,
    paddingLeft: Padding.padding_2,
    height: Height.height_21,
    width: 211,
    flexDirection: "row",
  },
  username: {
    width: Width.width_212,
    color: Color.colorGray1200,
    zIndex: 4,
  },
  usernameInput: {
    width: 81,
    height: Height.height_13,
    paddingTop: Padding.padding_0,
    zIndex: 2,
    flexDirection: "row",
  },
  saiLoginUsername: {
    marginTop: -8,
    width: 84,
    zIndex: 2,
  },
  passwordIconParent: {
    paddingHorizontal: Padding.padding_12,
    paddingBottom: Padding.padding_12,
    gap: 4,
    height: Height.height_45,
    alignItems: "flex-end",
  },
  passwordIcon: {
    width: 31,
    height: 22,
  },
  lockIcon: {
    left: 9,
    zIndex: 2,
    top: 0,
    width: Width.width_21_53,
    position: "absolute",
  },
  saiLoginLockIcon: {
    zIndex: 4,
    left: 0,
    top: 0,
    position: "absolute",
  },
  passwordBackground: {
    bottom: 0,
  },
  passwordParent: {
    width: 209,
    height: Height.height_22,
    flexDirection: "row",
  },
  password: {
    width: Width.width_212,
    color: Color.colorGray1200,
    zIndex: 2,
  },
  passwordInput: {
    width: Width.width_141,
    paddingTop: Padding.padding_3,
    marginLeft: -209,
    height: Height.height_22,
  },
  uniqueId: {
    width: Width.width_144,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_17,
    height: Height.height_19,
  },
  visibilityOffIcon: {
    width: 23,
  },
  rectangleParent: {
    paddingLeft: Padding.padding_123_6,
    paddingTop: Padding.padding_11_6,
    paddingRight: 103,
    paddingBottom: Padding.padding_12_9,
    zIndex: 2,
    flexDirection: "row",
  },
  frameChild: {
    display: "none",
  },
  saiLoginLogIn: {
    height: Height.height_20,
    width: Width.width_74,
    fontSize: FontSize.fs_20,
    lineHeight: LineHeight.lh_20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
    zIndex: 1,
  },
});

export default SAILogin;
