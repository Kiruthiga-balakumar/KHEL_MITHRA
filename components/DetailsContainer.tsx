import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import Component from "./Component";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HomePage from "../screens/HomePage";
import Rectangle109 from "../assets/Rectangle-109.svg";
import {
  Width,
  Padding,
  Color,
  Border,
  Height,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const DetailsContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [rectangle6Visible, setRectangle6Visible] = useState(false);

  const openRectangle6 = useCallback(() => {
    setRectangle6Visible(true);
  }, []);

  const closeRectangle6 = useCallback(() => {
    setRectangle6Visible(false);
  }, []);

  return (
    <>
      <View style={styles.detailsContainer}>
        <View
          style={[styles.detailsContainerChild, styles.frameChildPosition]}
        />
        <View style={[styles.personContainer, styles.frameContainerLayout]}>
          <View style={[styles.rectangleParent, styles.rectangleSpaceBlock]}>
            <View style={[styles.frameChild, styles.frameChildBorder]} />
            <Image
              style={[styles.personIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/Person.png")}
            />
            <View style={styles.nameWrapper}>
              <TextInput
                style={[styles.name, styles.yourTypo]}
                placeholder="Name"
                placeholderTextColor="rgba(0, 0, 0, 0.6)"
              />
            </View>
          </View>
        </View>
        <View
          style={[styles.detailsContainerInner, styles.frameContainerLayout]}
        >
          <View style={styles.frameParent}>
            <View style={[styles.rectangleGroup, styles.frameLayout]}>
              <View style={[styles.frameItem, styles.frameChildBorder]} />
              <Image
                style={[styles.plannerIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/Planner.png")}
              />
              <View style={styles.ageWrapper}>
                <TextInput
                  style={[styles.age, styles.yourTypo]}
                  placeholder="Age"
                  placeholderTextColor="rgba(0, 0, 0, 0.6)"
                />
              </View>
            </View>
            <Component property1="Default" />
          </View>
        </View>
        <Pressable
          style={[styles.update, styles.uploadPosition]}
          onPress={() => navigation.navigate("FrameComponent6")}
        >
          <Text style={styles.detailsContainerUpdate}>UPDATE</Text>
        </Pressable>
        <View style={[styles.frameView, styles.frameLayout]}>
          <View
            style={[styles.rectangleContainer, styles.rectangleContainerLayout]}
          >
            <View style={[styles.frameItem, styles.frameChildBorder]} />
            <View style={styles.ringerVolumeWrapper}>
              <Image
                style={styles.ringerVolumeIcon}
                contentFit="cover"
                source={require("../assets/Ringer-Volume.png")}
              />
            </View>
            <TextInput
              style={[styles.age, styles.yourTypo]}
              placeholder="Mobile number"
              placeholderTextColor="rgba(0, 0, 0, 0.6)"
            />
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.frameWrapper, styles.frameLayout]}>
            <View
              style={[
                styles.detailsContainerRectangleParent,
                styles.rectangleContainerLayout,
              ]}
            >
              <View style={[styles.frameItem, styles.frameChildBorder]} />
              <View style={styles.searchClientWrapper}>
                <Image
                  style={[styles.plannerIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/Search-Client.png")}
                />
              </View>
              <TextInput
                style={[styles.addYourSport, styles.yourTypo]}
                placeholder="Add Your Sport Achievements "
                placeholderTextColor="rgba(0, 0, 0, 0.6)"
              />
            </View>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.detailsContainerFrameWrapper}>
              <View style={styles.uploadYourGameplayVideoHerParent}>
                <Text style={[styles.uploadYourGameplay, styles.yourTypo]}>
                  {" "}
                  Upload your gameplay video here
                </Text>
                <View style={styles.rectangleParent2Position}>
                  <View
                    style={[
                      styles.detailsContainerFrameChild,
                      styles.rectangleParent2Position,
                    ]}
                  />
                  <Image
                    style={[styles.uploadToFtp, styles.uploadPosition]}
                    contentFit="cover"
                    source={require("../assets/Upload-To-FTP1.png")}
                  />
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.wrapper, styles.wrapperLayout]}
              onPress={openRectangle6}
            >
              <Rectangle109 style={styles.icon} width={328} height={51} />
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={rectangle6Visible}>
        <View style={styles.rectangle6Overlay}>
          <Pressable style={styles.rectangle6Bg} onPress={closeRectangle6} />
          <HomePage onClose={closeRectangle6} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameChildPosition: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  frameContainerLayout: {
    width: Width.width_331,
    paddingLeft: Padding.padding_3,
  },
  rectangleSpaceBlock: {
    paddingBottom: Padding.padding_12_5,
    width: Width.width_328,
  },
  frameChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGray1400,
    borderRadius: Border.br_10,
  },
  iconLayout: {
    height: Height.height_21_53,
    width: Width.width_21_53,
  },
  yourTypo: {
    fontSize: FontSize.fs_17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frameLayout: {
    height: Height.height_50_6,
    flexDirection: "row",
  },
  uploadPosition: {
    position: "absolute",
    zIndex: 3,
  },
  rectangleContainerLayout: {
    paddingHorizontal: Padding.padding_11,
    zIndex: 2,
    height: Height.height_50_6,
    width: Width.width_328,
    flexDirection: "row",
  },
  rectangleParent2Position: {
    width: 325,
    height: Height.height_72,
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: Height.height_50_56,
    zIndex: 2,
  },
  detailsContainer: {
    height: 629,
    zIndex: 1,
    paddingLeft: Padding.padding_11,
    paddingTop: 62,
    paddingRight: Padding.padding_0,
    paddingBottom: 42,
    gap: 26,
    width: Width.width_356,
  },
  detailsContainerChild: {
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1600,
    zIndex: 1,
    width: Width.width_356,
  },
  personContainer: {
    height: 60,
    paddingBottom: Padding.padding_9,
    paddingLeft: Padding.padding_3,
    flexDirection: "row",
  },
  rectangleParent: {
    paddingHorizontal: Padding.padding_12_5,
    paddingTop: Padding.padding_13_2,
    gap: Gap.gap_8_2,
    zIndex: 2,
    height: Height.height_50_56,
    flexDirection: "row",
  },
  frameChild: {
    width: Width.width_328,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  personIcon: {
    zIndex: 1,
  },
  nameWrapper: {
    height: Height.height_24_9,
    paddingTop: Padding.padding_1_9,
    width: Width.width_142_9,
  },
  name: {
    height: Height.height_23,
    width: Width.width_145_9,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    zIndex: 1,
  },
  detailsContainerInner: {
    height: 127,
    paddingBottom: 5,
    paddingLeft: Padding.padding_3,
    flexDirection: "row",
  },
  frameParent: {
    height: 121,
    width: Width.width_328,
    gap: 26,
  },
  rectangleGroup: {
    paddingHorizontal: Padding.padding_14,
    paddingTop: Padding.padding_14,
    gap: 6,
    zIndex: 2,
    paddingBottom: Padding.padding_12_5,
    width: Width.width_328,
  },
  frameItem: {
    zIndex: 2,
    width: Width.width_328,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  plannerIcon: {
    zIndex: 3,
  },
  ageWrapper: {
    height: 24,
    paddingTop: 1,
    width: Width.width_142_9,
  },
  age: {
    zIndex: 3,
    height: Height.height_23,
    width: Width.width_145_9,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  update: {
    left: 130,
    bottom: 58,
    zIndex: 3,
  },
  detailsContainerUpdate: {
    width: Width.width_94,
    fontSize: FontSize.fs_20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
    height: Height.height_23,
  },
  frameView: {
    paddingLeft: Padding.padding_3,
    width: Width.width_331,
  },
  rectangleContainer: {
    paddingTop: Padding.padding_13,
    paddingBottom: 14,
    gap: Gap.gap_12,
  },
  ringerVolumeWrapper: {
    paddingTop: Padding.padding_1,
    width: Width.width_22,
    height: Height.height_23,
  },
  ringerVolumeIcon: {
    height: Height.height_22,
    width: Width.width_22,
    zIndex: 3,
  },
  frameGroup: {
    height: 209,
    gap: 20,
    width: Width.width_361,
  },
  frameWrapper: {
    zIndex: null,
    paddingLeft: Padding.padding_3,
    width: Width.width_331,
  },
  detailsContainerRectangleParent: {
    paddingTop: Padding.padding_16,
    paddingBottom: Padding.padding_11_6,
    gap: 12,
  },
  searchClientWrapper: {
    width: Width.width_21_5,
    height: 23,
    paddingTop: Padding.padding_1,
  },
  addYourSport: {
    width: Width.width_263,
    zIndex: 3,
    height: Height.height_23,
  },
  frameContainer: {
    height: 138,
    gap: Gap.gap_15,
    width: Width.width_361,
    zIndex: 2,
  },
  detailsContainerFrameWrapper: {
    height: Height.height_72,
    width: Width.width_361,
    paddingLeft: Padding.padding_3,
    flexDirection: "row",
  },
  uploadYourGameplayVideoHerParent: {
    width: 358,
    zIndex: 3,
    height: Height.height_72,
  },
  uploadYourGameplay: {
    top: 8,
    left: 14,
    color: Color.colorGray1200,
    textAlign: "left",
    zIndex: 3,
    position: "absolute",
  },
  detailsContainerFrameChild: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGray1400,
    borderRadius: Border.br_10,
    zIndex: 2,
  },
  uploadToFtp: {
    top: 36,
    left: 114,
    width: 77,
    height: 26,
    zIndex: 3,
  },
  rectangle6Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle6Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  wrapper: {
    zIndex: 2,
    width: Width.width_328,
  },
  icon: {
    borderRadius: Border.br_50,
    nodeWidth: 328,
    nodeHeight: 51,
  },
});

export default DetailsContainer;
