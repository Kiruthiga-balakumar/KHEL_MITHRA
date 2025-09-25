import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageSourcePropType,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import Vector3 from "../assets/Vector-3.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Height, Width, FontSize, FontFamily, Color } from "../GlobalStyles";

export type FrameComponent9Type = {
  performanceResults?: string;
  vector3?: React.ReactNode;
  showBack?: boolean;

  /** Style props */
  performanceResultsWidth?: number | string;

  /** Action props */
  onBackPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent9 = ({
  performanceResults,
  performanceResultsWidth,
  vector3,
  onBackPress,
  showBack,
}: FrameComponent9Type) => {
  const performanceResultsStyle = useMemo(() => {
    return {
      ...getStyleValue("width", performanceResultsWidth),
    };
  }, [performanceResultsWidth]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.performanceResultsParent, styles.parentLayout]}>
      <Text style={[styles.performanceResults, performanceResultsStyle]}>
        {performanceResults}
      </Text>
      <View style={[styles.vectorParent, styles.backParentPosition]}>
        <Vector3
          style={[styles.vectorParent, styles.backParentPosition]}
          width={NaN}
          height={NaN}
        />
        <View style={[styles.backParent, styles.backParentLayout]}>
          {!!showBack && (
            <Pressable
              style={[styles.back, styles.backParentLayout]}
              onPress={onBackPress}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/Back.png")}
              />
            </Pressable>
          )}
          <Pressable
            style={[
              styles.performanceResultsParentBack,
              styles.backParentLayout,
            ]}
            onPress={() => navigation.navigate("FrameComponent6")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/Back.png")}
            />
          </Pressable>
        </View>
        <Image
          style={styles.informationIcon}
          contentFit="cover"
          source={require("../assets/Information.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: Height.height_76_5,
    width: Width.width_410,
  },
  backParentPosition: {
    left: 0,
    top: 0,
  },
  backParentLayout: {
    height: Height.height_30,
    width: Width.width_30,
    position: "absolute",
  },
  performanceResultsParent: {
    zIndex: 1,
  },
  performanceResults: {
    top: 31,
    left: 62,
    fontSize: FontSize.fs_30,
    fontWeight: "500",
    fontFamily: FontFamily.leagueSpartanMedium,
    color: Color.colorWhite,
    textAlign: "left",
    width: Width.width_258,
    height: Height.height_28,
    zIndex: 1,
    position: "absolute",
  },
  vectorParent: {
    position: "absolute",
    height: Height.height_76_5,
    width: Width.width_410,
  },
  backParent: {
    left: 19,
    top: 28,
  },
  back: {
    left: 0,
    top: 0,
    zIndex: 1,
  },
  icon: {
    width: "100%",
    height: "100%",
    nodeWidth: 30,
    nodeHeight: 30,
  },
  performanceResultsParentBack: {
    zIndex: 2,
    left: 0,
    top: 0,
  },
  informationIcon: {
    left: 368,
    width: Width.width_20,
    height: Height.height_20,
    top: 28,
    zIndex: 1,
    position: "absolute",
  },
});

export default FrameComponent9;
