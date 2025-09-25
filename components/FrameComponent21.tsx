import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  Border,
  Height,
  Width,
  BoxShadow,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";

export type FrameComponent21Type = {
  reebok?: ImageSourcePropType;
  rEEBOK?: string;
  reqiurementConsistencyStreak?: string;
  benefitsFreeGymApparelFitne?: string;

  /** Style props */
  frameViewPaddingLeft?: number | string;
  frameViewPaddingRight?: number | string;
  frameViewPaddingHorizontal?: number | string;
  frameViewWidth?: number | string;
  frameViewWidth1?: number | string;
  rEEBOKWidth?: number | string;
  reqiurementConsistencyWidth?: number | string;
  reqiurementConsistencyHeight?: number | string;
  benefitsFreeWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent21 = ({
  frameViewPaddingLeft,
  frameViewPaddingRight,
  frameViewPaddingHorizontal,
  frameViewWidth,
  reebok,
  frameViewWidth1,
  rEEBOK,
  rEEBOKWidth,
  reqiurementConsistencyStreak,
  reqiurementConsistencyWidth,
  reqiurementConsistencyHeight,
  benefitsFreeGymApparelFitne,
  benefitsFreeWidth,
}: FrameComponent21Type) => {
  const frameView6Style = useMemo(() => {
    return {
      ...getStyleValue("paddingLeft", frameViewPaddingLeft),
      ...getStyleValue("paddingRight", frameViewPaddingRight),
      ...getStyleValue("paddingHorizontal", frameViewPaddingHorizontal),
    };
  }, [frameViewPaddingLeft, frameViewPaddingRight, frameViewPaddingHorizontal]);

  const frameView7Style = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth),
    };
  }, [frameViewWidth]);

  const frameView8Style = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth1),
    };
  }, [frameViewWidth1]);

  const rEEBOKStyle = useMemo(() => {
    return {
      ...getStyleValue("width", rEEBOKWidth),
    };
  }, [rEEBOKWidth]);

  const reqiurementConsistencyStyle = useMemo(() => {
    return {
      ...getStyleValue("width", reqiurementConsistencyWidth),
      ...getStyleValue("height", reqiurementConsistencyHeight),
    };
  }, [reqiurementConsistencyWidth, reqiurementConsistencyHeight]);

  const benefitsFree1Style = useMemo(() => {
    return {
      ...getStyleValue("width", benefitsFreeWidth),
    };
  }, [benefitsFreeWidth]);

  return (
    <View style={[styles.rectangleParent, frameView6Style]}>
      <View style={styles.frameChild} />
      <View style={styles.frameWrapper}>
        <View style={styles.frameParent}>
          <View style={[styles.reebokParent, frameView7Style]}>
            <Image
              style={styles.reebokIcon}
              contentFit="cover"
              source={reebok}
            />
            <View style={[styles.reebokWrapper, frameView8Style]}>
              <Text style={[styles.reebok, rEEBOKStyle]}>{rEEBOK}</Text>
            </View>
          </View>
          <View style={styles.frameContainer}>
            <View style={[styles.rectangleGroup, styles.frameItemLayout]}>
              <View style={[styles.frameItem, styles.frameItemLayout]} />
              <Text style={styles.apply}>Apply</Text>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.reqiurementConsistency,
          styles.benefitsFreeTypo,
          reqiurementConsistencyStyle,
        ]}
      >
        {reqiurementConsistencyStreak}
      </Text>
      <Text
        style={[
          styles.benefitsFree,
          styles.benefitsFreeTypo,
          benefitsFree1Style,
        ]}
      >
        {benefitsFreeGymApparelFitne}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    zIndex: 1,
  },
  rectangleParent: {
    height: Height.height_141,
    paddingLeft: Padding.padding_17,
    paddingTop: Padding.padding_3,
    paddingRight: Padding.padding_12,
    paddingBottom: Padding.padding_10,
    gap: Gap.gap_7,
    zIndex: 1,
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
  frameWrapper: {
    width: Width.width_319,
    paddingLeft: Padding.padding_3,
    flexDirection: "row",
    height: Height.height_63,
  },
  frameParent: {
    width: Width.width_316,
    zIndex: null,
    gap: 53,
    flexDirection: "row",
    height: Height.height_63,
  },
  reebokParent: {
    width: Width.width_178,
    gap: Gap.gap_12,
    flexDirection: "row",
    height: Height.height_63,
    zIndex: 1,
  },
  reebokIcon: {
    width: Width.width_63,
    zIndex: 1,
    height: Height.height_63,
  },
  reebokWrapper: {
    width: Width.width_103,
    height: Height.height_43,
    paddingTop: Padding.padding_15,
  },
  reebok: {
    width: 106,
    height: Height.height_28,
    fontSize: FontSize.fs_30,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    zIndex: 1,
  },
  frameContainer: {
    height: Height.height_45,
    paddingTop: Padding.padding_13,
    width: Width.width_85,
    zIndex: 1,
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
  reqiurementConsistency: {
    width: 330,
    height: Height.height_17,
    textAlign: "left",
  },
  benefitsFree: {
    width: 282,
    textAlign: "right",
  },
});

export default FrameComponent21;
