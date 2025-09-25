import React, { useState, useCallback } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DataContainer2 from "../assets/Data-Container2.svg";
import DataContainer from "../assets/Data-Container.svg";
import FrameComponent6 from "../components/FrameComponent6";
import Design from "./Design";
import {
  Width,
  FontFamily,
  FontSize,
  Height,
  Color,
  Padding,
  Border,
  BoxShadow,
} from "../GlobalStyles";

const HomePage = () => {
  const [menuIconVisible, setMenuIconVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openMenuIcon = useCallback(() => {
    setMenuIconVisible(true);
  }, []);

  const closeMenuIcon = useCallback(() => {
    setMenuIconVisible(false);
  }, []);

  return (
    <>
      <ScrollView
        style={[styles.homePage, styles.homePageBorder]}
        contentContainerStyle={styles.homePageScrollViewContent}
      >
        <Text style={styles.name}>Name</Text>
        <Text style={[styles.text, styles.aiTypo]}>18</Text>
        <View style={[styles.lineParent, styles.lineParentPosition]}>
          <View style={[styles.frameChild, styles.framePosition]} />
          <View style={[styles.frameItem, styles.framePosition]} />
        </View>
        <Text style={[styles.blank, styles.blankTypo]}>18/100</Text>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={styles.aiWrapper}>
            <Text style={[styles.ai, styles.aiTypo]}>AI</Text>
          </View>
          <Image
            style={styles.gymIcon}
            contentFit="cover"
            source={require("../assets/Gym.png")}
          />
          <Pressable
            style={[styles.frameInner, styles.dataBarsPosition]}
            onPress={() => navigation.navigate("AiNutrionist")}
          />
        </View>
        <View style={styles.dataContainerParent}>
          <DataContainer2
            style={[styles.dataContainerIcon, styles.lineParentPosition]}
            width={NaN}
            height={767}
          />
          <DataContainer
            style={styles.homePageDataContainerIcon}
            width={NaN}
            height={221}
          />
          <FrameComponent6 />
          <Pressable
            style={[styles.menu, styles.iconLayout]}
            onPress={openMenuIcon}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/Menu.png")}
            />
          </Pressable>
          <View
            style={[
              styles.qualityRestoration2025091220Parent,
              styles.qualityLayout,
            ]}
          >
            <Image
              style={[
                styles.qualityRestoration2025091220Icon,
                styles.qualityLayout,
              ]}
              contentFit="cover"
              source={require("../assets/quality-restoration-20250912202419884-1.png")}
            />
            <Text style={[styles.imAlwaysThe, styles.blankTypo]}>
              I’m always the best
            </Text>
          </View>
          <Pressable
            style={[styles.dataBarsParent, styles.dataParentLayout]}
            onPress={() => navigation.navigate("FrameComponent20")}
          >
            <View style={[styles.dataBars, styles.dataParentLayout]} />
            <Text style={[styles.sponsorship, styles.eventsTypo]}>
              Sponsorship
            </Text>
            <Image
              style={[styles.incomeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/income.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.rectangleParent, styles.dataParentLayout]}
            onPress={() => navigation.navigate("Events")}
          >
            <View style={[styles.dataBars, styles.dataParentLayout]} />
            <Text style={[styles.events, styles.eventsTypo]}>Events</Text>
            <Image
              style={[styles.eventIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/Event.png")}
            />
          </Pressable>
        </View>
        <Image
          style={styles.dAvatars13}
          contentFit="cover"
          source={require("../assets/3D-Avatars-13.png")}
        />
      </ScrollView>

      <Modal animationType="fade" transparent visible={menuIconVisible}>
        <View style={styles.menuIconOverlay}>
          <Pressable style={styles.menuIconBg} onPress={closeMenuIcon} />
          <Design onClose={closeMenuIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  homePageScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 917,
  },
  homePageBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  aiTypo: {
    width: Width.width_24,
    zIndex: 2,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_24,
    height: Height.height_22,
  },
  lineParentPosition: {
    top: 148,
    position: "absolute",
  },
  framePosition: {
    borderTopWidth: 5,
    left: 0,
    top: 0,
    height: Height.height_5,
    zIndex: 2,
    position: "absolute",
    borderStyle: "solid",
  },
  blankTypo: {
    fontFamily: FontFamily.inderRegular,
    fontSize: FontSize.fs_12,
    height: Height.height_16,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  dataBarsPosition: {
    top: 0,
    left: 0,
  },
  iconLayout: {
    height: Height.height_40,
    width: Width.width_40,
    zIndex: 2,
    position: "absolute",
  },
  qualityLayout: {
    height: 62,
    width: 66,
  },
  dataParentLayout: {
    height: Height.height_50_56,
    width: Width.width_328,
    position: "absolute",
  },
  eventsTypo: {
    height: Height.height_31,
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.fs_34,
    top: 9,
    zIndex: 2,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  homePage: {
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorBlack,
    flex: 1,
    padding: Padding.padding_1,
    maxWidth: "100%",
    width: "100%",
  },
  name: {
    width: Width.width_63,
    left: 124,
    zIndex: 2,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_24,
    height: Height.height_22,
    color: Color.colorWhite,
    top: 92,
    position: "absolute",
  },
  text: {
    left: 193,
    color: Color.colorYellow,
    width: Width.width_24,
    top: 92,
    position: "absolute",
  },
  lineParent: {
    width: Width.width_177,
    right: 110,
    height: Height.height_5,
    top: 148,
  },
  frameChild: {
    width: Width.width_182,
    borderColor: Color.colorWhite,
  },
  frameItem: {
    borderColor: Color.colorLimegreen200,
    width: Width.width_26,
  },
  blank: {
    width: Width.width_181,
    top: 153,
    right: 106,
    zIndex: 2,
  },
  frameParent: {
    height: Height.height_36,
    top: 16,
    right: 17,
    paddingLeft: Padding.padding_12,
    paddingTop: Padding.padding_3,
    paddingRight: Padding.padding_10,
    paddingBottom: Padding.padding_3,
    width: 73,
  },
  aiWrapper: {
    width: 21,
    paddingTop: 8,
    height: Height.height_30,
  },
  ai: {
    color: Color.colorWhite,
    width: Width.width_24,
  },
  gymIcon: {
    width: Width.width_30,
    zIndex: 3,
    height: Height.height_30,
  },
  frameInner: {
    right: 0,
    bottom: 0,
    borderRadius: Border.br_6,
    backgroundColor: Color.colorGainsboro,
    zIndex: 4,
    width: 73,
    borderColor: Color.colorWhite,
    left: 0,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
  },
  dataContainerParent: {
    height: 915,
    width: Width.width_410,
  },
  dataContainerIcon: {
    height: 767,
    width: Width.width_410,
    left: 0,
  },
  homePageDataContainerIcon: {
    height: 221,
    zIndex: 1,
    width: Width.width_410,
    left: 0,
    top: 0,
    position: "absolute",
  },
  menuIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  menuIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  menu: {
    left: 19,
    top: 11,
  },
  icon: {
    height: "100%",
    nodeWidth: 40,
    nodeHeight: 40,
    width: "100%",
  },
  qualityRestoration2025091220Parent: {
    top: 68,
    left: 229,
    flexDirection: "row",
    position: "absolute",
  },
  qualityRestoration2025091220Icon: {
    zIndex: 2,
  },
  imAlwaysThe: {
    width: Width.width_146,
    bottom: -4,
    left: -106,
    zIndex: 3,
  },
  dataBarsParent: {
    top: 724,
    left: 41,
    width: Width.width_328,
    zIndex: 1,
  },
  dataBars: {
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_10,
    backgroundColor: Color.colorForestgreen,
    left: 0,
    top: 0,
  },
  sponsorship: {
    left: 57,
    width: Width.width_174,
  },
  incomeIcon: {
    top: 5,
    left: 232,
  },
  rectangleParent: {
    top: 815,
    left: 41,
    width: Width.width_328,
    zIndex: 1,
  },
  events: {
    left: 97,
    width: 97,
  },
  eventIcon: {
    top: 4,
    left: 192,
  },
  dAvatars13: {
    width: Width.width_80,
    top: 77,
    left: 35,
    height: Height.height_80,
    zIndex: 2,
    position: "absolute",
  },
});

export default HomePage;
