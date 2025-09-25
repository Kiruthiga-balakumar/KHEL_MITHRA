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
import DetailsContainer from "../components/DetailsContainer";
import {
  Color,
  Width,
  Height,
  Padding,
  Gap,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const AthleteDetails = () => {
  return (
    <SafeAreaView style={styles.scrollviewFlexBox}>
      <KeyboardAvoidingView
        style={styles.scrollviewFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.scrollviewFlexBox]}
          contentContainerStyle={styles.athleteDetailsScrollViewContent}
        >
          <Group407
            style={styles.athleteDetailsChild}
            width={NaN}
            height={NaN}
          />
          <Image
            style={styles.whatsappImage20250909At2Icon}
            contentFit="cover"
            source={require("../assets/WhatsApp-Image-2025-09-09-at-20-57-53-61d7975d-removebg-preview-31.png")}
          />
          <View style={styles.athleteDetailsInner}>
            <View style={styles.frameParent}>
              <View style={styles.personalDetailsWrapper}>
                <Text style={styles.personalDetails}>PERSONAL DETAILS</Text>
              </View>
              <DetailsContainer />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  athleteDetailsScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 76,
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
  athleteDetailsChild: {
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
  athleteDetailsInner: {
    width: Width.width_369,
    paddingLeft: Padding.padding_13,
    flexDirection: "row",
    height: 685,
  },
  frameParent: {
    width: Width.width_356,
    zIndex: null,
    gap: Gap.gap_12,
    height: 685,
  },
  personalDetailsWrapper: {
    zIndex: 1,
    width: 306,
    paddingLeft: 50,
    height: Height.height_44,
    flexDirection: "row",
  },
  personalDetails: {
    width: 259,
    fontSize: FontSize.fs_35,
    fontFamily: FontFamily.jaro,
    color: Color.colorWhite,
    textAlign: "left",
    height: Height.height_44,
    zIndex: 1,
  },
});

export default AthleteDetails;
