import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ActionButton from "./ActionButton";
import Line32 from "../assets/Line-32.svg";
import {
  Width,
  Padding,
  Height,
  Gap,
  Border,
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const LoginForm = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loginForm}>
      <View style={styles.inputArea}>
        <View
          style={[styles.inputBackground, styles.inputBackgroundPosition]}
        />
        <View style={styles.credentialsArea}>
          <View style={styles.authenticationFields}>
            <View style={styles.loginElements}>
              <Text style={[styles.logIn, styles.logInFlexBox]}>Log in</Text>
            </View>
            <Text style={[styles.asAthlete, styles.logInFlexBox]}>
              as athlete
            </Text>
          </View>
        </View>
        <View style={styles.inputFields}>
          <View style={styles.fieldItemsParent}>
            <View style={styles.fieldItems}>
              <View
                style={[styles.fieldItemsChild, styles.inputBackgroundPosition]}
              />
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
            <View style={styles.fieldItems}>
              <View
                style={[styles.fieldItemsChild, styles.inputBackgroundPosition]}
              />
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
        </View>
        <ActionButton
          onGroupPressablePress={() => navigation.navigate("FrameComponent6")}
          line32={<Line32 width={111} height={3} />}
          onGroupPressablePress1={() => navigation.navigate("AtheleteSignUp")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBackgroundPosition: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  logInFlexBox: {
    textAlign: "left",
    zIndex: 2,
  },
  loginForm: {
    width: Width.width_369,
    paddingLeft: Padding.padding_13,
    flexDirection: "row",
    height: Height.height_603,
    zIndex: null,
  },
  inputArea: {
    zIndex: 1,
    paddingLeft: 26,
    paddingTop: Padding.padding_36,
    paddingRight: Padding.padding_25,
    paddingBottom: Padding.padding_80,
    gap: Gap.gap_71,
    width: Width.width_356,
    height: Height.height_603,
  },
  inputBackground: {
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1600,
    zIndex: 1,
    width: Width.width_356,
  },
  credentialsArea: {
    width: 252,
    paddingLeft: 52,
    height: Height.height_96,
    flexDirection: "row",
  },
  authenticationFields: {
    width: Width.width_199,
    gap: Gap.gap_16,
    zIndex: 2,
    height: Height.height_96,
  },
  loginElements: {
    width: Width.width_147,
    paddingLeft: 51,
    height: Height.height_47,
    flexDirection: "row",
  },
  logIn: {
    width: 99,
    fontSize: FontSize.fs_36,
    fontFamily: FontFamily.joanRegular,
    color: Color.colorWhite,
    zIndex: 2,
    height: Height.height_47,
  },
  asAthlete: {
    width: Width.width_202,
    height: Height.height_33,
    fontSize: FontSize.fs_26,
    fontFamily: FontFamily.lexendPetaRegular,
    color: Color.colorGray1500,
    zIndex: 2,
  },
  inputFields: {
    width: 305,
    height: 141,
    paddingLeft: 3,
    paddingBottom: Padding.padding_14_4,
    flexDirection: "row",
  },
  fieldItemsParent: {
    height: 127,
    gap: 41,
    width: Width.width_301,
    zIndex: null,
  },
  fieldItems: {
    height: Height.height_43,
    paddingHorizontal: Padding.padding_12,
    paddingTop: Padding.padding_11,
    paddingBottom: Padding.padding_10_5,
    gap: Gap.gap_3_5,
    width: Width.width_301,
    zIndex: 2,
    flexDirection: "row",
  },
  fieldItemsChild: {
    borderRadius: Border.br_10,
    backgroundColor: Color.colorGray1400,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: Width.width_301,
    zIndex: 2,
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
});

export default LoginForm;
