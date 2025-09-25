import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Group407 from "../assets/Group-407.svg";
import UserDetails from "../components/UserDetails";
import {
  Color,
  Width,
  Height,
  Padding,
  Gap,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const AtheleteSignUp = () => {
  return (
    <SafeAreaView style={styles.scrollviewFlexBox}>
      <KeyboardAvoidingView
        style={styles.scrollviewFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.scrollviewFlexBox]}
          contentContainerStyle={styles.atheleteSignUpContent}
        >
          <Group407
            style={styles.atheleteSignUpChild}
            width={NaN}
            height={NaN}
          />
          <Image
            style={styles.whatsappImage20250909At2Icon}
            contentFit="cover"
            source={require("../assets/WhatsApp-Image-2025-09-09-at-20-57-53-61d7975d-removebg-preview-3.png")}
          />
          <View style={styles.atheleteSignUpInner}>
            <View style={styles.frameParent}>
              <View style={styles.helloWrapper}>
                <Text style={styles.hello}>HELLO!</Text>
              </View>
              <UserDetails />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  atheleteSignUpContent: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 99,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 25,
    height: 917,
  },
  scrollviewFlexBox: {
    flex: 1,
    width: "100%",
  },
  scrollview: {
    backgroundColor: Color.colorDarkslateblue100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    maxWidth: "100%",
  },
  atheleteSignUpChild: {
    width: Width.width_412_17,
    position: "absolute",
    top: 0,
    right: -1,
    height: Height.height_915_21,
  },
  whatsappImage20250909At2Icon: {
    width: Width.width_109,
    height: Height.height_116,
    zIndex: 1,
  },
  atheleteSignUpInner: {
    width: Width.width_368,
    paddingLeft: Padding.padding_12,
    flexDirection: "row",
    height: 662,
  },
  frameParent: {
    width: Width.width_356,
    zIndex: null,
    gap: Gap.gap_15,
    height: 662,
  },
  helloWrapper: {
    zIndex: 1,
    width: Width.width_227,
    paddingLeft: 132,
    height: Height.height_44,
    flexDirection: "row",
  },
  hello: {
    width: 98,
    fontSize: FontSize.fs_35,
    fontFamily: FontFamily.jaro,
    color: Color.colorWhite,
    textAlign: "left",
    height: Height.height_44,
    zIndex: 1,
  },
});

export default AtheleteSignUp;
