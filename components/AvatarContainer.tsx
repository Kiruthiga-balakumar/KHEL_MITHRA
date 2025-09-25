import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  Height,
  FontFamily,
  Width,
  Gap,
  Padding,
  Color,
  FontSize,
} from "../GlobalStyles";

export type AvatarContainerType = {
  prop?: string;

  /** Style props */
  lineViewBorderColor?: string;
  lineViewWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AvatarContainer = ({
  lineViewBorderColor,
  lineViewWidth,
  prop,
}: AvatarContainerType) => {
  const lineViewStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", lineViewBorderColor),
      ...getStyleValue("width", lineViewWidth),
    };
  }, [lineViewBorderColor, lineViewWidth]);

  return (
    <View style={styles.avatarContainer}>
      <Image
        style={styles.dAvatars13}
        contentFit="cover"
        source={require("../assets/3D-Avatars-13.png")}
      />
      <View style={styles.avatarContainerInner}>
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.frameWrapper}>
              <View style={styles.nameParent}>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.text}>18</Text>
              </View>
            </View>
            <Image
              style={styles.qualityRestoration2025091220Icon}
              contentFit="cover"
              source={require("../assets/quality-restoration-20250912202419884-11.png")}
            />
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.frameView}>
              <View style={styles.lineParent}>
                <View style={[styles.frameChild, styles.framePosition]} />
                <View
                  style={[
                    styles.frameItem,
                    styles.framePosition,
                    lineViewStyle,
                  ]}
                />
              </View>
              <Text style={[styles.avatarContainerText, styles.bronzeTypo]}>
                {prop}
              </Text>
              <Text style={[styles.bronze, styles.bronzeTypo]}>BRONZE</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    borderTopWidth: 5,
    borderStyle: "solid",
    height: Height.height_5,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bronzeTypo: {
    fontFamily: FontFamily.inderRegular,
    position: "absolute",
    textAlign: "left",
  },
  avatarContainer: {
    width: Width.width_334,
    gap: Gap.gap_9,
    flexDirection: "row",
    zIndex: 1,
    height: Height.height_80,
  },
  dAvatars13: {
    width: Width.width_80,
    zIndex: 1,
    height: Height.height_80,
  },
  avatarContainerInner: {
    height: Height.height_76,
    paddingTop: Padding.padding_1,
    width: Width.width_245,
  },
  frameParent: {
    height: Height.height_75,
    gap: Gap.gap_3,
    zIndex: null,
    width: Width.width_245,
  },
  frameGroup: {
    gap: Gap.gap_101,
    height: Height.height_51,
    width: Width.width_245,
    flexDirection: "row",
    zIndex: 1,
  },
  frameWrapper: {
    height: Height.height_36,
    paddingTop: Padding.padding_14,
    width: Width.width_90,
  },
  nameParent: {
    gap: Gap.gap_6,
    height: Height.height_22,
    width: Width.width_90,
    flexDirection: "row",
    zIndex: 1,
  },
  name: {
    width: Width.width_63,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_24,
    height: Height.height_22,
    zIndex: 1,
  },
  text: {
    width: Width.width_24,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_24,
    height: Height.height_22,
    zIndex: 1,
  },
  qualityRestoration2025091220Icon: {
    width: Width.width_54,
    height: Height.height_51,
    zIndex: 1,
  },
  frameContainer: {
    width: Width.width_234,
    paddingLeft: Padding.padding_3,
    height: Height.height_21,
    zIndex: null,
    flexDirection: "row",
  },
  frameView: {
    width: Width.width_231,
    height: Height.height_21,
    zIndex: 1,
  },
  lineParent: {
    width: Width.width_177,
    height: Height.height_5,
    position: "absolute",
    left: 0,
    top: 0,
  },
  frameChild: {
    borderColor: Color.colorWhite,
    width: Width.width_182,
    zIndex: 1,
  },
  frameItem: {
    borderColor: Color.colorLimegreen300,
    width: Width.width_58,
    zIndex: 2,
  },
  avatarContainerText: {
    top: 5,
    fontSize: FontSize.fs_12,
    width: Width.width_181,
    height: Height.height_16,
    zIndex: 3,
    left: 0,
    fontFamily: FontFamily.inderRegular,
    color: Color.colorWhite,
  },
  bronze: {
    left: 200,
    fontSize: FontSize.fs_8,
    width: Width.width_34,
    height: Height.height_10,
    fontFamily: FontFamily.inderRegular,
    top: 0,
    color: Color.colorBlack,
    zIndex: 1,
  },
});

export default AvatarContainer;
