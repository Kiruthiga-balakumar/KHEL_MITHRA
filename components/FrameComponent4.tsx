import React, { useState, useMemo, useCallback } from "react";
import { Pressable, StyleSheet, Text, View, Modal } from "react-native";
import AthleteDetails from "../screens/AthleteDetails";
import Rectangle108 from "../assets/Rectangle-108.svg";
import {
  Width,
  Height,
  Border,
  Padding,
  Gap,
  FontSize,
  FontFamily,
  Color,
} from "../GlobalStyles";

export type FrameComponent4Type = {
  /** Style props */
  frameViewZIndex?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent4 = ({ frameViewZIndex }: FrameComponent4Type) => {
  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("zIndex", frameViewZIndex),
    };
  }, [frameViewZIndex]);

  const [rectangleVisible, setRectangleVisible] = useState(false);

  const openRectangle = useCallback(() => {
    setRectangleVisible(true);
  }, []);

  const closeRectangle = useCallback(() => {
    setRectangleVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.vectorParent, frameView3Style]}>
        <Pressable style={styles.wrapper} onPress={openRectangle}>
          <Rectangle108 style={styles.icon} width={328} height={51} />
        </Pressable>
        <View style={styles.frameWrapper}>
          <View style={styles.alreadyHaveAnAccountLoginParent}>
            <Text style={styles.alreadyHaveAnContainer}>
              <Text style={styles.alreadyHaveAn}>{`Already have an account?
                        `}</Text>
              <Text style={styles.login}>Login</Text>
            </Text>
            <View style={styles.lineWrapper}>
              <View style={styles.frameChild} />
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={rectangleVisible}>
        <View style={styles.rectangleOverlay}>
          <Pressable style={styles.rectangleBg} onPress={closeRectangle} />
          <AthleteDetails onClose={closeRectangle} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  vectorParent: {
    height: 116,
    alignItems: "flex-end",
    gap: 24,
    width: Width.width_328,
  },
  rectangleOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangleBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  wrapper: {
    height: Height.height_50_56,
    zIndex: 2,
    width: Width.width_328,
  },
  icon: {
    borderRadius: Border.br_50,
    nodeWidth: 328,
    nodeHeight: 51,
  },
  frameWrapper: {
    width: 239,
    justifyContent: "flex-end",
    paddingRight: 83,
    flexDirection: "row",
    height: Height.height_40_5,
  },
  alreadyHaveAnAccountLoginParent: {
    zIndex: 2,
    paddingBottom: Padding.padding_0_5,
    gap: Gap.gap_2,
    width: Width.width_156,
    height: Height.height_40_5,
  },
  alreadyHaveAnContainer: {
    fontSize: FontSize.fs_15,
    fontFamily: FontFamily.joanRegular,
    textAlign: "left",
    width: Width.width_156,
    zIndex: 2,
  },
  alreadyHaveAn: {
    color: Color.colorWhite,
  },
  login: {
    color: Color.colorDeepskyblue,
  },
  lineWrapper: {
    width: Width.width_101,
    paddingLeft: Padding.padding_63,
    height: Height.height_0_5,
    flexDirection: "row",
  },
  frameChild: {
    width: Width.width_38_5,
    borderStyle: "solid",
    borderColor: Color.colorDeepskyblue,
    borderTopWidth: 0.5,
    height: Height.height_0_5,
    zIndex: 2,
  },
});

export default FrameComponent4;
