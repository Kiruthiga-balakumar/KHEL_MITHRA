import React, { useState, useMemo, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageSourcePropType,
  Modal,
} from "react-native";
import Root from "./Root";
import {
  Width,
  Gap,
  Height,
  Padding,
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

export type ContainerType = {
  whatsAppImageAt?: ImageSourcePropType;

  /** Style props */
  frameViewZIndex?: number | string;
  frameViewZIndex1?: number;
  frameViewPaddingTop?: number | string;

  /** Action props */
  onGroupPressablePress?: () => void;
  onSortDownPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Container = ({
  whatsAppImageAt,
  onGroupPressablePress,
  frameViewZIndex,
  frameViewZIndex1,
  frameViewPaddingTop,
  onSortDownPress,
}: ContainerType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("zIndex", frameViewZIndex),
    };
  }, [frameViewZIndex]);

  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("zIndex", frameViewZIndex1),
      ...getStyleValue("paddingTop", frameViewPaddingTop),
    };
  }, [frameViewZIndex1, frameViewPaddingTop]);

  const [imTextVisible, setImTextVisible] = useState(false);
  const [sortDownIconVisible, setSortDownIconVisible] = useState(false);

  const openImText = useCallback(() => {
    setImTextVisible(true);
  }, []);

  const closeImText = useCallback(() => {
    setImTextVisible(false);
  }, []);

  const openSortDownIcon = useCallback(() => {
    setSortDownIconVisible(true);
  }, []);

  const closeSortDownIcon = useCallback(() => {
    setSortDownIconVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.container, styles.containerFlexBox]}>
        <Image
          style={styles.whatsappImage20250909At2Icon}
          contentFit="cover"
          source={whatsAppImageAt}
        />
        <View style={styles.containerInner}>
          <View
            style={[
              styles.frameParent,
              styles.containerFlexBox,
              frameViewStyle,
            ]}
            onPress={onGroupPressablePress}
          >
            <View style={[styles.imWrapper, frameView1Style]}>
              <Pressable style={styles.im} onPress={openImText}>
                <Text style={styles.im2}>I’m</Text>
              </Pressable>
            </View>
            <Pressable style={styles.sortDown} onPress={onSortDownPress}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/Sort-Down.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={imTextVisible}>
        <View style={styles.imTextOverlay}>
          <Pressable style={styles.imTextBg} onPress={closeImText} />
          <Root onClose={closeImText} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={sortDownIconVisible}>
        <View style={styles.sortDownIconOverlay}>
          <Pressable
            style={styles.sortDownIconBg}
            onPress={closeSortDownIcon}
          />
          <Root onClose={closeSortDownIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    flexDirection: "row",
    zIndex: 1,
  },
  container: {
    width: Width.width_373,
    gap: Gap.gap_206,
    height: Height.height_116,
  },
  whatsappImage20250909At2Icon: {
    width: Width.width_109,
    zIndex: 1,
    height: Height.height_116,
  },
  containerInner: {
    height: Height.height_34,
    paddingTop: Padding.padding_9,
    width: Width.width_58,
  },
  frameParent: {
    gap: Gap.gap_3,
    height: Height.height_25,
    width: Width.width_58,
  },
  imWrapper: {
    width: Width.width_30,
    height: Height.height_23,
    paddingTop: Padding.padding_1,
  },
  imTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  imTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  im: {
    zIndex: 1,
  },
  im2: {
    width: Width.width_33,
    height: Height.height_22,
    fontSize: FontSize.fs_24,
    fontWeight: "500",
    fontFamily: FontFamily.leagueSpartanMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  sortDownIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  sortDownIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  sortDown: {
    width: Width.width_25,
    height: Height.height_25,
    zIndex: 1,
  },
  icon: {
    width: "100%",
    height: "100%",
    nodeWidth: 25,
    nodeHeight: 25,
  },
});

export default Container;
