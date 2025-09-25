import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Height, Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const KHELMITRA = () => {
  return (
    <View style={styles.khelMitra}>
      <Text style={styles.khelMitra2}>
        <Text style={styles.text}>{`    `}</Text>
        <Text style={styles.khelMitra3}>KHEL MITRA</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  khelMitra: {
    height: Height.height_56,
    width: 225,
    flexDirection: "row",
    paddingHorizontal: Padding.padding_0,
    paddingBottom: Padding.padding_9,
  },
  khelMitra2: {
    width: 266,
    textAlign: "left",
    opacity: 0.7,
  },
  text: {
    fontSize: FontSize.fs_20,
    fontFamily: FontFamily.jaro,
    color: Color.colorGray100,
  },
  khelMitra3: {
    fontSize: FontSize.fs_40,
    fontFamily: FontFamily.jejuHallasan,
    color: Color.colorGray300,
  },
});

export default KHELMITRA;
