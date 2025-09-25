import React, { useState, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  View,
  Text,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import Vector3 from "../assets/Vector-3.svg";
import HomePage from "./HomePage";
import FrameComponent13 from "../components/FrameComponent13";
import GroupComponent from "../components/GroupComponent";
import FrameComponent14 from "../components/FrameComponent14";
import {
  Width,
  Height,
  Color,
  Gap,
  Padding,
  FontSize,
  FontFamily,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const Events = () => {
  const [backIconVisible, setBackIconVisible] = useState(false);
  const [groupButtonVisible, setGroupButtonVisible] = useState(false);

  const openBackIcon = useCallback(() => {
    setBackIconVisible(true);
  }, []);

  const closeBackIcon = useCallback(() => {
    setBackIconVisible(false);
  }, []);

  const openGroupButton = useCallback(() => {
    setGroupButtonVisible(true);
  }, []);

  const closeGroupButton = useCallback(() => {
    setGroupButtonVisible(false);
  }, []);

  return (
    <>
      <ScrollView
        style={styles.events}
        contentContainerStyle={styles.eventsScrollViewContent}
      >
        <View style={[styles.frameParent, styles.frameLayout]}>
          <View style={styles.frameWrapper}>
            <View style={styles.frameGroup}>
              <View style={[styles.vectorParent, styles.frameChildLayout]}>
                <Vector3
                  style={[styles.frameChild, styles.framePosition]}
                  width={NaN}
                  height={NaN}
                />
                <Pressable
                  style={[styles.back, styles.backLayout]}
                  onPress={openBackIcon}
                >
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/Back1.png")}
                  />
                </Pressable>
              </View>
              <Text style={[styles.events2, styles.backToFlexBox]}>Events</Text>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <FrameComponent13 />
            <GroupComponent />
          </View>
          <FrameComponent14 />
        </View>
        <View style={styles.eventsInner}>
          <Pressable style={styles.rectangleParent} onPress={openGroupButton}>
            <View style={[styles.frameItem, styles.framePosition]} />
            <View style={styles.backToWrapper}>
              <Text
                style={[styles.backTo, styles.backToFlexBox]}
              >{`Back to `}</Text>
            </View>
            <Image
              style={styles.backLayout}
              contentFit="cover"
              source={require("../assets/Home.png")}
            />
          </Pressable>
        </View>
      </ScrollView>

      <Modal animationType="fade" transparent visible={backIconVisible}>
        <View style={styles.backIconOverlay}>
          <Pressable style={styles.backIconBg} onPress={closeBackIcon} />
          <HomePage onClose={closeBackIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupButtonVisible}>
        <View style={styles.groupButtonOverlay}>
          <Pressable style={styles.groupButtonBg} onPress={closeGroupButton} />
          <HomePage onClose={closeGroupButton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  eventsScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingTop: 24,
    paddingBottom: 35,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 130,
    height: 917,
  },
  frameLayout: {
    width: Width.width_382,
    zIndex: null,
  },
  frameChildLayout: {
    height: Height.height_76_5,
    width: Width.width_410,
  },
  framePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  backLayout: {
    zIndex: 1,
    height: Height.height_30,
    width: Width.width_30,
  },
  backToFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    zIndex: 1,
  },
  events: {
    backgroundColor: Color.colorGold,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
  frameParent: {
    height: 677,
    gap: Gap.gap_32,
    zIndex: null,
  },
  frameWrapper: {
    width: 128,
    height: 41,
    paddingLeft: 44,
    paddingBottom: Padding.padding_13,
    flexDirection: "row",
    zIndex: null,
  },
  frameGroup: {
    zIndex: 1,
    width: Width.width_84,
    height: Height.height_28,
    flexDirection: "row",
  },
  vectorParent: {
    right: -268,
    bottom: -24,
    position: "absolute",
  },
  frameChild: {
    height: Height.height_76_5,
    width: Width.width_410,
  },
  backIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  backIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  back: {
    left: 13,
    top: 23,
    position: "absolute",
  },
  icon: {
    height: "100%",
    nodeWidth: 30,
    nodeHeight: 30,
    width: "100%",
  },
  events2: {
    width: Width.width_87,
    fontSize: FontSize.fs_30,
    fontWeight: "500",
    fontFamily: FontFamily.leagueSpartanMedium,
    height: Height.height_28,
  },
  frameContainer: {
    height: 390,
    gap: Gap.gap_26,
    zIndex: null,
  },
  eventsInner: {
    width: Width.width_355,
    height: Height.height_50_6,
    paddingLeft: Padding.padding_27,
    flexDirection: "row",
    zIndex: null,
  },
  groupButtonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupButtonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectangleParent: {
    height: Height.height_50_56,
    paddingLeft: 95,
    paddingTop: Padding.padding_9,
    paddingRight: 94,
    paddingBottom: 8,
    gap: Gap.gap_7,
    width: Width.width_328,
    flexDirection: "row",
  },
  frameItem: {
    right: 0,
    bottom: 0,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_10,
    backgroundColor: Color.colorDarkslateblue300,
    width: Width.width_328,
  },
  backToWrapper: {
    width: Width.width_102,
    height: Height.height_33,
    paddingTop: Padding.padding_2,
  },
  backTo: {
    width: 105,
    height: Height.height_31,
    fontSize: FontSize.fs_34,
    fontFamily: FontFamily.leagueSpartanRegular,
  },
});

export default Events;
