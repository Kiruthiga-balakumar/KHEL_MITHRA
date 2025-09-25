import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FrameComponent from "../components/FrameComponent";
import {
  Color,
  Border,
  Padding,
  Width,
  Gap,
  Height,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const IPhone = () => {
  return (
    <SafeAreaView style={styles.iphone}>
      <KeyboardAvoidingView
        style={styles.keyboardavoidingview}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.view}>
          <View style={[styles.rectangleParent, styles.frameChildLayout]}>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
            <View style={[styles.frameWrapper, styles.frameFlexBox]}>
              <View style={styles.otpVerificationParent}>
                <Text style={[styles.otpVerification, styles.otpFlexBox]}>
                  OTP Verification
                </Text>
                <View style={styles.enterYourOtpCodeNumberWrapper}>
                  <Text style={[styles.enterYourOtp, styles.otpFlexBox]}>
                    Enter your OTP code number
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={styles.frameParent}>
                <View style={styles.placeholderParent}>
                  <View style={styles.placeholder} />
                  <TextInput style={styles.placeholder} />
                  <TextInput style={styles.placeholder} />
                  <TextInput style={styles.placeholder} />
                </View>
                <View style={styles.codeHintWrapper}>
                  <Text style={[styles.codeHint, styles.otpFlexBox]}>
                    00:08
                  </Text>
                </View>
              </View>
            </View>
            <FrameComponent />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iphone: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  frameChildLayout: {
    backgroundColor: Color.colorSnow200,
    width: 412,
    borderTopRightRadius: Border.br_40,
    borderTopLeftRadius: Border.br_40,
    height: 482,
  },
  frameFlexBox: {
    paddingRight: 42,
    justifyContent: "flex-end",
    zIndex: null,
    flexDirection: "row",
  },
  otpFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    zIndex: 1,
  },
  keyboardavoidingview: {
    flex: 1,
  },
  view: {
    width: "100%",
    overflow: "hidden",
    flexDirection: "row",
    borderTopRightRadius: Border.br_40,
    borderTopLeftRadius: Border.br_40,
    height: 482,
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  rectangleParent: {
    alignItems: "flex-end",
    paddingHorizontal: 35,
    paddingTop: Padding.padding_53,
    paddingBottom: 52,
    gap: 45,
  },
  frameChild: {
    display: "none",
  },
  frameWrapper: {
    width: Width.width_299,
    height: 91,
  },
  otpVerificationParent: {
    width: 257,
    gap: Gap.gap_18,
    zIndex: 1,
    height: 91,
  },
  otpVerification: {
    width: 260,
    height: Height.height_47,
    fontSize: FontSize.fs_36,
    zIndex: 1,
    fontFamily: FontFamily.joanRegular,
    color: Color.colorBlack,
  },
  enterYourOtpCodeNumberWrapper: {
    width: 250,
    paddingLeft: Padding.padding_6,
    height: Height.height_26,
    flexDirection: "row",
  },
  enterYourOtp: {
    width: 247,
    fontSize: FontSize.fs_20,
    height: Height.height_26,
    zIndex: 1,
    fontFamily: FontFamily.joanRegular,
    color: Color.colorBlack,
  },
  frameContainer: {
    width: 300,
    height: 94,
    paddingBottom: Padding.padding_24,
  },
  frameParent: {
    height: Height.height_70,
    gap: Gap.gap_12,
    width: Width.width_258,
    zIndex: null,
  },
  placeholderParent: {
    gap: Gap.gap_26,
    height: Height.height_45,
    width: Width.width_258,
    zIndex: 1,
    flexDirection: "row",
  },
  placeholder: {
    width: Width.width_45,
    borderRadius: Border.br_5,
    backgroundColor: Color.colorPowderblue200,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: Height.height_45,
    zIndex: 1,
  },
  codeHintWrapper: {
    width: 35,
    paddingLeft: Padding.padding_5,
    height: Height.height_13,
    zIndex: 1,
    flexDirection: "row",
  },
  codeHint: {
    width: Width.width_33,
    fontSize: 10,
    fontFamily: FontFamily.inderRegular,
    height: Height.height_13,
    zIndex: 1,
  },
});

export default IPhone;
