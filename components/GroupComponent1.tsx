import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontFamily,
  Height,
  Padding,
  Width,
  BoxShadow,
  Border,
  FontSize,
} from "../GlobalStyles";

export type GroupComponent1Type = {
  priyaSharma?: string;
  ndPlaceMedal?: ImageSourcePropType;
  cm?: string;

  /** Style props */
  groupViewPaddingLeft?: number | string;
  frameViewWidth?: number | string;
  priyaSharmaWidth?: number | string;
  frameViewWidth1?: number | string;
  cmWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent1 = ({
  groupViewPaddingLeft,
  frameViewWidth,
  priyaSharma,
  priyaSharmaWidth,
  ndPlaceMedal,
  frameViewWidth1,
  cm,
  cmWidth,
}: GroupComponent1Type) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingLeft", groupViewPaddingLeft),
    };
  }, [groupViewPaddingLeft]);

  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth),
    };
  }, [frameViewWidth]);

  const priyaSharmaStyle = useMemo(() => {
    return {
      ...getStyleValue("width", priyaSharmaWidth),
    };
  }, [priyaSharmaWidth]);

  const frameView5Style = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth1),
    };
  }, [frameViewWidth1]);

  const cmStyle = useMemo(() => {
    return {
      ...getStyleValue("width", cmWidth),
    };
  }, [cmWidth]);

  return (
    <View style={[styles.rectangleParent, groupViewStyle]}>
      <View style={styles.frameChild} />
      <View style={[styles.priyaSharmaParent, frameView4Style]}>
        <Text style={[styles.priyaSharma, styles.cmTypo, priyaSharmaStyle]}>
          {priyaSharma}
        </Text>
        <Image
          style={styles.ndPlaceMedal}
          contentFit="cover"
          source={ndPlaceMedal}
        />
      </View>
      <View style={[styles.cmWrapper, frameView5Style]}>
        <Text style={[styles.cm, styles.cmTypo, cmStyle]}>{cm}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cmTypo: {
    zIndex: 1,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  rectangleParent: {
    height: Height.height_70,
    paddingLeft: 68,
    paddingTop: Padding.padding_22,
    paddingRight: Padding.padding_24,
    paddingBottom: Padding.padding_22,
    gap: 53,
    flexDirection: "row",
    width: Width.width_368,
  },
  frameChild: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1000,
    position: "absolute",
    width: Width.width_368,
  },
  priyaSharmaParent: {
    width: 159,
    height: Height.height_26,
    zIndex: 1,
    flexDirection: "row",
  },
  priyaSharma: {
    width: Width.width_162,
    fontSize: FontSize.fs_28,
    height: Height.height_26,
  },
  ndPlaceMedal: {
    width: Width.width_60,
    marginTop: -30,
    top: "50%",
    left: -55,
    height: Height.height_60,
    zIndex: 2,
    position: "absolute",
  },
  cmWrapper: {
    width: Width.width_61,
    height: Height.height_24,
    paddingTop: Padding.padding_2,
    zIndex: 1,
  },
  cm: {
    width: Width.width_64,
    height: Height.height_22,
    fontSize: FontSize.fs_24,
  },
});

export default GroupComponent1;
