import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Vector4 from "../assets/Vector-4.svg";
import CompanyInfo from "../components/CompanyInfo";
import { Color, Width, Height, FontSize, FontFamily } from "../GlobalStyles";

const DetailsSponsor = () => {
  return (
    <SafeAreaView style={styles.scrollviewFlexBox}>
      <KeyboardAvoidingView
        style={styles.scrollviewFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.scrollviewFlexBox]}
          contentContainerStyle={styles.detailsSponsorScrollViewContent}
        >
          <View style={styles.detailsSponsorInner}>
            <View style={styles.sponsorDetailsParent}>
              <Text style={[styles.sponsorDetails, styles.updateFlexBox]}>
                SPONSOR DETAILS
              </Text>
              <View style={styles.frameWrapper}>
                <View style={[styles.vectorParent, styles.frameChildPosition]}>
                  <Vector4
                    style={[styles.frameChild, styles.frameChildPosition]}
                  />
                  <Image
                    style={[
                      styles.whatsappImage20250909At2Icon,
                      styles.updatePosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/WhatsApp-Image-2025-09-09-at-20-57-53-61d7975d-removebg-preview-3.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <CompanyInfo />
          <Text style={[styles.update, styles.updatePosition]}>UPDATE</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailsSponsorScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 25,
    paddingTop: 156,
    paddingBottom: 69,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 15,
    height: 917,
  },
  scrollviewFlexBox: {
    flex: 1,
    width: "100%",
  },
  updateFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  frameChildPosition: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  updatePosition: {
    zIndex: 3,
    position: "absolute",
  },
  scrollview: {
    backgroundColor: Color.colorDarkslateblue100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    maxWidth: "100%",
  },
  detailsSponsorInner: {
    width: Width.width_301,
    paddingLeft: 62,
    flexDirection: "row",
    height: Height.height_44,
  },
  sponsorDetailsParent: {
    width: 239,
    zIndex: null,
    flexDirection: "row",
    height: Height.height_44,
  },
  sponsorDetails: {
    width: 242,
    fontSize: FontSize.fs_35,
    fontFamily: FontFamily.jaro,
    height: Height.height_44,
    color: Color.colorWhite,
  },
  frameWrapper: {
    height: 232,
    width: 280,
    top: -155,
    left: -86,
    position: "absolute",
    zIndex: null,
    flexDirection: "row",
  },
  vectorParent: {
    zIndex: 2,
  },
  frameChild: {
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 2,
    maxWidth: "100%",
  },
  whatsappImage20250909At2Icon: {
    top: 14,
    left: 14,
    width: Width.width_109,
    height: Height.height_116,
  },
  update: {
    width: Width.width_94,
    height: Height.height_23,
    right: 153,
    bottom: 106,
    fontSize: FontSize.fs_20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.colorWhite,
  },
});

export default DetailsSponsor;
