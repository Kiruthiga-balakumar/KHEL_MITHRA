import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import IPhone from "../screens/IPhone";
import {
  FontFamily,
  Padding,
  Height,
  Width,
  FontSize,
  Border,
  Color,
  Gap,
} from "../GlobalStyles";

const UserDetails = () => {
  const [otpFieldVisible, setOtpFieldVisible] = useState(false);

  const openOtpField = useCallback(() => {
    setOtpFieldVisible(true);
  }, []);

  const closeOtpField = useCallback(() => {
    setOtpFieldVisible(false);
  }, []);

  return (
    <>
      <View style={styles.userDetails}>
        <View style={[styles.fieldSeparator, styles.fieldPosition]} />
        <View style={[styles.athleteSignup, styles.frameWrapperFlexBox]}>
          <View style={styles.frameParent}>
            <View style={styles.signUpWrapper}>
              <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
            </View>
            <Text style={styles.asAthlete}>as athlete</Text>
          </View>
        </View>
        <View style={[styles.identifierParent, styles.parentLayout]}>
          <View style={[styles.identifier, styles.fieldPosition]} />
          <Image
            style={[styles.personIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/Person2.png")}
          />
          <View style={styles.contactInfo}>
            <TextInput
              style={[styles.usename, styles.numberTypo]}
              placeholder="Usename"
              placeholderTextColor="rgba(0, 0, 0, 0.6)"
            />
          </View>
        </View>
        <View style={[styles.rectangleParent, styles.otpFieldLayout]}>
          <View style={[styles.identifier, styles.fieldPosition]} />
          <Image
            style={[styles.plannerIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/Planner.png")}
          />
          <TextInput
            style={[styles.phoneNumber, styles.numberTypo]}
            placeholder="Phone number"
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
          />
        </View>
        <View style={styles.identifierInput}>
          <View style={[styles.inputFieldParent, styles.parentLayout]}>
            <View style={[styles.identifier, styles.fieldPosition]} />
            <Image
              style={[styles.personIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/Lock2.png")}
            />
            <TextInput
              style={[styles.aadharNumber, styles.numberTypo]}
              placeholder="Aadhar number"
              placeholderTextColor="rgba(0, 0, 0, 0.6)"
            />
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.otpFieldParent}>
            <Pressable
              style={[styles.otpField, styles.otpFieldLayout]}
              onPress={openOtpField}
            />
            <Text style={styles.getOtp}>Get OTP</Text>
          </View>
          <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
            <View style={styles.alreadyHaveAnAccountLoginParent}>
              <Text style={[styles.alreadyHaveAnContainer, styles.signUpTypo]}>
                <Text style={styles.alreadyHaveAn}>{`Already have an account?
                        `}</Text>
                <Text style={styles.login}>Login</Text>
              </Text>
              <View style={styles.lineWrapper}>
                <View style={styles.frameItem} />
              </View>
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={otpFieldVisible}>
        <View style={styles.otpFieldOverlay}>
          <Pressable style={styles.otpFieldBg} onPress={closeOtpField} />
          <IPhone onClose={closeOtpField} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  fieldPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameWrapperFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  signUpTypo: {
    fontFamily: FontFamily.joanRegular,
    zIndex: 2,
    textAlign: "left",
  },
  parentLayout: {
    paddingHorizontal: Padding.padding_12_5,
    height: Height.height_50_56,
    width: Width.width_328,
    zIndex: 2,
    flexDirection: "row",
  },
  iconLayout: {
    height: Height.height_21_53,
    width: Width.width_21_53,
  },
  numberTypo: {
    fontSize: FontSize.fs_17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    zIndex: 1,
  },
  otpFieldLayout: {
    height: Height.height_50_56,
    width: Width.width_328,
    zIndex: 2,
  },
  userDetails: {
    height: Height.height_603,
    zIndex: 1,
    paddingHorizontal: Padding.padding_13,
    paddingTop: Padding.padding_34,
    paddingBottom: 65,
    gap: 28,
    alignItems: "flex-end",
    width: Width.width_356,
  },
  fieldSeparator: {
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1600,
    zIndex: 1,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    width: Width.width_356,
  },
  athleteSignup: {
    width: Width.width_263,
    height: 115,
    paddingRight: Padding.padding_64,
    paddingBottom: 19,
  },
  frameParent: {
    height: Height.height_96,
    width: Width.width_199,
    gap: Gap.gap_16,
    zIndex: 2,
  },
  signUpWrapper: {
    width: Width.width_165,
    paddingLeft: Padding.padding_34,
    height: Height.height_47,
    flexDirection: "row",
  },
  signUp: {
    width: 134,
    fontSize: FontSize.fs_36,
    zIndex: 2,
    textAlign: "left",
    color: Color.colorWhite,
    height: Height.height_47,
  },
  asAthlete: {
    width: Width.width_202,
    height: Height.height_33,
    fontSize: FontSize.fs_26,
    fontFamily: FontFamily.lexendPetaRegular,
    color: Color.colorGray1500,
    zIndex: 2,
    textAlign: "left",
  },
  identifierParent: {
    paddingTop: Padding.padding_13_2,
    paddingBottom: Padding.padding_12_5,
    gap: Gap.gap_8_2,
  },
  identifier: {
    borderRadius: Border.br_10,
    backgroundColor: Color.colorGray1400,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    width: Width.width_328,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  personIcon: {
    zIndex: 1,
  },
  contactInfo: {
    width: Width.width_142_9,
    height: Height.height_24_9,
    paddingTop: Padding.padding_1_9,
  },
  usename: {
    width: Width.width_145_9,
    height: Height.height_23,
    fontSize: FontSize.fs_17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  rectangleParent: {
    paddingHorizontal: Padding.padding_12,
    paddingVertical: 14,
    gap: Gap.gap_8_5,
    flexDirection: "row",
  },
  plannerIcon: {
    zIndex: 3,
  },
  phoneNumber: {
    width: 152,
    height: Height.height_23,
    fontSize: FontSize.fs_17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  identifierInput: {
    height: 54,
    paddingBottom: Padding.padding_3_7,
    width: Width.width_328,
    flexDirection: "row",
  },
  inputFieldParent: {
    paddingTop: Padding.padding_14_4,
    paddingBottom: 14,
    gap: Gap.gap_8,
  },
  aadharNumber: {
    height: Height.height_17,
    width: Width.width_201,
  },
  frameGroup: {
    height: 118,
    gap: 26,
    width: Width.width_328,
    alignItems: "flex-end",
  },
  otpFieldParent: {
    height: Height.height_50_6,
    width: Width.width_328,
    zIndex: 2,
  },
  otpFieldOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  otpFieldBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  otpField: {
    borderRadius: Border.br_50,
    backgroundColor: Color.colorBlack,
    borderColor: Color.colorPowderblue100,
    borderWidth: 2,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
    height: Height.height_50_56,
  },
  getOtp: {
    top: 14,
    left: 124,
    fontSize: FontSize.fs_20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 119,
    height: Height.height_22,
    zIndex: 3,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  frameWrapper: {
    zIndex: null,
    width: 240,
    paddingRight: 84,
    height: Height.height_40_5,
  },
  alreadyHaveAnAccountLoginParent: {
    paddingBottom: Padding.padding_0_5,
    gap: Gap.gap_2,
    width: Width.width_156,
    height: Height.height_40_5,
    zIndex: 2,
  },
  alreadyHaveAnContainer: {
    fontSize: FontSize.fs_15,
    width: Width.width_156,
    zIndex: 2,
    textAlign: "left",
  },
  alreadyHaveAn: {
    color: Color.colorWhite,
  },
  login: {
    color: Color.colorDeepskyblue,
  },
  lineWrapper: {
    width: Width.width_101,
    paddingLeft: Padding.padding_63,
    height: Height.height_0_5,
    flexDirection: "row",
  },
  frameItem: {
    width: Width.width_38_5,
    borderColor: Color.colorDeepskyblue,
    borderTopWidth: 0.5,
    height: Height.height_0_5,
    borderStyle: "solid",
    zIndex: 2,
  },
});

export default UserDetails;
