import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Modal, Pressable } from "react-native";
import Website from "./Website";
import Container from "./Container";
import {
  Width,
  Gap,
  Height,
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

const FrameComponent5 = () => {
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.frameParent}>
        <Container
          whatsAppImageAt={require("../assets/WhatsApp-Image-2025-09-09-at-20-57-53-61d7975d-removebg-preview-3.png")}
          onGroupPressablePress={openGroupContainer}
          frameViewZIndex={1}
          frameViewPaddingTop="unset"
        />
        <View style={styles.welcomeWrapper}>
          <Text style={styles.welcome}>WELCOME!</Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <Website onClose={closeGroupContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent: {
    width: Width.width_373,
    height: 170,
    zIndex: null,
    gap: Gap.gap_10,
  },
  welcomeWrapper: {
    zIndex: 1,
    width: 262,
    flexDirection: "row",
    paddingLeft: 111,
    height: Height.height_44,
  },
  welcome: {
    width: Width.width_154,
    fontSize: FontSize.fs_35,
    fontFamily: FontFamily.jaro,
    color: Color.colorSnow100,
    textAlign: "left",
    zIndex: 1,
    height: Height.height_44,
  },
});

export default FrameComponent5;
