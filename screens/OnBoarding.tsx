import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import KHELMITRA from "../components/KHELMITRA";
import { Color, Height, Padding, FontSize, FontFamily } from "../GlobalStyles";

const OnBoarding = () => {
  return (
    <ScrollView
      style={styles.onBoarding}
      contentContainerStyle={styles.onBoardingScrollViewContent}
    >
      <Image
        style={styles.boxIcon}
        contentFit="cover"
        source={require("../assets/Box.png")}
      />
      <View style={styles.khelMitraWrapper}>
        <KHELMITRA />
      </View>
      <Text style={styles.unleashingGrassrootsTalent}>
        {" "}
        UNLEASHING GRASSROOTS TALENT
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  onBoardingScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 59,
    paddingTop: 524,
    paddingBottom: 70,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: 242,
    height: 917,
  },
  onBoarding: {
    width: "100%",
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    maxWidth: "100%",
  },
  boxIcon: {
    width: 211,
    position: "absolute",
    top: 319,
    right: 90,
    height: 224,
  },
  khelMitraWrapper: {
    width: 259,
    height: Height.height_56,
    flexDirection: "row",
    paddingLeft: Padding.padding_34,
  },
  unleashingGrassrootsTalent: {
    width: 279,
    fontSize: FontSize.fs_20,
    fontFamily: FontFamily.jaro,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default OnBoarding;
