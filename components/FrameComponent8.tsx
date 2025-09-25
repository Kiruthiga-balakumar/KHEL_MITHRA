import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import FrameComponent7 from "./FrameComponent7";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Height,
  Padding,
  Width,
  Border,
  Color,
  Gap,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const FrameComponent8 = () => {
  const [component2Open, setComponent2Open] = useState(false);
  const [component2Value, setComponent2Value] = useState();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <FrameComponent7 />
      <View style={styles.component2}>
        <DropDownPicker
          style={[styles.dropdownpicker, styles.component2dropDownContainer]}
          open={component2Open}
          setOpen={setComponent2Open}
          value={component2Value}
          setValue={setComponent2Value}
          placeholder="Select Test "
          items={[]}
          labelStyle={styles.component2Value}
          placeholderStyle={styles.component2Value}
          dropdownContainerStyle={styles.component2dropDownContent}
          zIndex={3000}
          zIndexInverse={0}
          dropDownDirection={"BOTTOM"}
        />
      </View>
      <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
        <View style={[styles.rectangleParent, styles.frameWrapperLayout]}>
          <View style={styles.frameChild} />
          <Pressable
            style={styles.uploadYourVideoHereParent}
            onPress={() => navigation.navigate("AnalysisLayout")}
          >
            <Text style={styles.uploadYourVideo}>Upload your video here</Text>
            <View style={styles.uploadToFtpWrapper}>
              <Image
                style={styles.uploadToFtp}
                contentFit="cover"
                source={require("../assets/Upload-To-FTP.png")}
              />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component2Value: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 17,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
  component2dropDownContainer: {
    paddingHorizontal: 25,
    paddingTop: 12,
    paddingBottom: 11,
    minHeight: 44,
    height: 44,
    borderWidth: 0,
    borderColor: "",
  },
  component2dropDownContent: {
    borderColor: "",
    borderWidth: 0,
  },
  frameWrapperLayout: {
    height: Height.height_102,
    flexDirection: "row",
  },
  frameParent: {
    height: 318,
    zIndex: 1,
    paddingBottom: Padding.padding_16,
    gap: 31,
    width: Width.width_376,
  },
  component2: {
    zIndex: 3,
    height: Height.height_44,
    flexDirection: "row",
    width: Width.width_376,
  },
  dropdownpicker: {
    paddingHorizontal: Padding.padding_25,
    paddingTop: Padding.padding_12,
    paddingBottom: Padding.padding_11,
    minHeight: 44,
    height: 44,
    borderWidth: 0,
    borderColor: "",
  },
  frameWrapper: {
    width: Width.width_352,
    paddingLeft: Padding.padding_24,
  },
  rectangleParent: {
    paddingHorizontal: Padding.padding_64,
    paddingVertical: Padding.padding_14,
    width: Width.width_328,
  },
  frameChild: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_10,
    backgroundColor: Color.colorGray1400,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: Width.width_328,
  },
  uploadYourVideoHereParent: {
    height: 74,
    width: Width.width_200,
    gap: Gap.gap_6,
    zIndex: 1,
  },
  uploadYourVideo: {
    width: 203,
    height: Height.height_23,
    fontSize: FontSize.fs_17,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray1200,
    textAlign: "left",
  },
  uploadToFtpWrapper: {
    zIndex: null,
    width: 123,
    paddingLeft: 78,
    height: Height.height_45,
    flexDirection: "row",
  },
  uploadToFtp: {
    width: Width.width_45,
    height: Height.height_45,
  },
});

export default FrameComponent8;
