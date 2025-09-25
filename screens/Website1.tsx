import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Color,
  Border,
  Padding,
  Gap,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const Website1 = () => {
  return (
    <SafeAreaView style={styles.viewBg}>
      <View style={[styles.view, styles.viewBg]}>
        <View style={styles.analysisWrapper}>
          <Text style={styles.analysis}> ANALYSIS</Text>
        </View>
        <Image
          style={styles.tempimagea9ydjn1Icon}
          contentFit="cover"
          source={require("../assets/tempImagea9YDJn-1.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  website: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewBg: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  view: {
    width: "100%",
    height: 482,
    borderTopLeftRadius: Border.br_40,
    borderTopRightRadius: Border.br_40,
    overflow: "hidden",
    paddingLeft: Padding.padding_9,
    paddingTop: 33,
    paddingBottom: 44,
    gap: Gap.gap_24,
  },
  analysisWrapper: {
    zIndex: null,
    width: 261,
    flexDirection: "row",
    paddingLeft: 132,
    height: 29,
  },
  analysis: {
    width: 132,
    fontSize: FontSize.fs_24,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorBlack,
    textAlign: "left",
    height: 29,
  },
  tempimagea9ydjn1Icon: {
    width: 403,
    height: 352,
  },
});

export default Website1;
