import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import {
  FontFamily,
  Color,
  Border,
  Height,
  Width,
  BoxShadow,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

export type FrameComponent20Type = {
  nike?: ImageSourcePropType;
  nikeIndia?: string;
  reqiurementTopInLeaderboard?: string;
  benefitsFreeShoesSportsKits?: string;

  /** Style props */
  brandOptionSetWidth?: number | string;
  brandOptionSetPaddingRight?: number | string;
  nikeIndiaWidth?: number | string;
  reqiurementTopWidth?: number | string;
  benefitsFreeWidth?: number | string;
  benefitsFreeHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent20 = ({
  nike,
  brandOptionSetWidth,
  brandOptionSetPaddingRight,
  nikeIndia,
  nikeIndiaWidth,
  reqiurementTopInLeaderboard,
  reqiurementTopWidth,
  benefitsFreeShoesSportsKits,
  benefitsFreeWidth,
  benefitsFreeHeight,
}: FrameComponent20Type) => {
  const brandOptionSetStyle = useMemo(() => {
    return {
      ...getStyleValue("width", brandOptionSetWidth),
      ...getStyleValue("paddingRight", brandOptionSetPaddingRight),
    };
  }, [brandOptionSetWidth, brandOptionSetPaddingRight]);

  const nikeIndiaStyle = useMemo(() => {
    return {
      ...getStyleValue("width", nikeIndiaWidth),
    };
  }, [nikeIndiaWidth]);

  const reqiurementTopStyle = useMemo(() => {
    return {
      ...getStyleValue("width", reqiurementTopWidth),
    };
  }, [reqiurementTopWidth]);

  const benefitsFreeStyle = useMemo(() => {
    return {
      ...getStyleValue("width", benefitsFreeWidth),
      ...getStyleValue("height", benefitsFreeHeight),
    };
  }, [benefitsFreeWidth, benefitsFreeHeight]);

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <View style={styles.nikeParent}>
        <Image style={styles.nikeIcon} contentFit="cover" source={nike} />
        <View style={[styles.brandOptionSet, brandOptionSetStyle]}>
          <Text style={[styles.nikeIndia, styles.applyTypo, nikeIndiaStyle]}>
            {nikeIndia}
          </Text>
        </View>
        <View style={styles.frameWrapper}>
          <View style={[styles.rectangleGroup, styles.frameItemLayout]}>
            <View style={[styles.frameItem, styles.frameItemLayout]} />
            <Text style={[styles.apply, styles.applyTypo]}>Apply</Text>
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.reqiurementTop,
          styles.benefitsFreeTypo,
          reqiurementTopStyle,
        ]}
      >
        {reqiurementTopInLeaderboard}
      </Text>
      <Text
        style={[
          styles.benefitsFree,
          styles.benefitsFreeTypo,
          benefitsFreeStyle,
        ]}
      >
        {benefitsFreeShoesSportsKits}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  applyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  frameItemLayout: {
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_6,
    height: Height.height_32,
    width: Width.width_85,
    elevation: 4,
    boxShadow: BoxShadow.shadow_drop,
  },
  benefitsFreeTypo: {
    fontSize: FontSize.fs_18,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    zIndex: 1,
  },
  rectangleParent: {
    height: 126,
    zIndex: 1,
    paddingHorizontal: Padding.padding_17,
    paddingBottom: Padding.padding_12,
    gap: Gap.gap_8_5,
    width: Width.width_356,
  },
  frameChild: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray400,
    elevation: 4,
    boxShadow: BoxShadow.shadow_drop,
    width: Width.width_356,
  },
  nikeParent: {
    width: Width.width_319,
    gap: Gap.gap_15,
    flexDirection: "row",
    height: Height.height_63,
  },
  nikeIcon: {
    width: Width.width_63,
    zIndex: 1,
    height: Height.height_63,
  },
  brandOptionSet: {
    width: Width.width_141,
    height: Height.height_46,
    paddingTop: Padding.padding_18,
    paddingRight: Padding.padding_15,
  },
  nikeIndia: {
    width: 129,
    height: Height.height_28,
    fontSize: FontSize.fs_30,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    zIndex: 1,
  },
  frameWrapper: {
    height: Height.height_48,
    paddingTop: Padding.padding_16,
    width: Width.width_85,
  },
  rectangleGroup: {
    paddingHorizontal: Padding.padding_13,
    paddingVertical: Padding.padding_5,
    zIndex: 1,
    flexDirection: "row",
  },
  frameItem: {
    display: "none",
  },
  apply: {
    height: Height.height_22,
    width: Width.width_62,
    fontSize: FontSize.fs_24,
    color: Color.colorWhite,
    zIndex: 2,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  reqiurementTop: {
    width: 279,
    height: Height.height_17,
  },
  benefitsFree: {
    width: 250,
  },
});

export default FrameComponent20;
