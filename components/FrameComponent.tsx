import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  Border,
  Width,
  Height,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const FrameComponent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <Pressable
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={() => navigation.navigate("AthletePasswordSet")}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={styles.verify}>Verify</Text>
      </Pressable>
      <View style={styles.resendButton}>
        <View style={styles.resendActions}>
          <Text
            style={[styles.didntReceivedOtpContainer, styles.dividerPosition]}
          >
            <Text
              style={styles.didntReceivedOtp}
            >{`Didn’t received OTP? `}</Text>
            <Text style={styles.resend}>Resend</Text>
          </Text>
          <View style={[styles.divider, styles.dividerPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    borderWidth: 2,
    borderColor: Color.colorPowderblue100,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_50,
    height: 53,
    borderStyle: "solid",
    width: Width.width_342,
  },
  dividerPosition: {
    position: "absolute",
    zIndex: 1,
  },
  frameParent: {
    height: Height.height_102,
    gap: 27,
    zIndex: 1,
    width: Width.width_342,
  },
  rectangleParent: {
    paddingHorizontal: 140,
    paddingTop: Padding.padding_12,
    paddingBottom: 17,
    zIndex: 1,
    flexDirection: "row",
  },
  frameChild: {
    display: "none",
  },
  verify: {
    height: Height.height_23,
    width: Width.width_65,
    fontSize: FontSize.fs_20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
    zIndex: 1,
  },
  resendButton: {
    width: 269,
    paddingLeft: 73,
    height: Height.height_22,
    flexDirection: "row",
  },
  resendActions: {
    width: 196,
    height: Height.height_22,
    zIndex: 1,
  },
  didntReceivedOtpContainer: {
    top: 0,
    left: 0,
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.joanRegular,
    width: Width.width_199,
    height: Height.height_21,
    textAlign: "left",
  },
  didntReceivedOtp: {
    color: Color.colorBlack,
  },
  resend: {
    color: Color.colorCornflowerblue,
  },
  divider: {
    top: 21,
    left: 149,
    borderColor: Color.colorCornflowerblue,
    borderTopWidth: 1,
    width: 47,
    height: Height.height_1,
    borderStyle: "solid",
    position: "absolute",
  },
});

export default FrameComponent;
