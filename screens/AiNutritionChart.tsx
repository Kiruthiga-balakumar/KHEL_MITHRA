import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Vector2 from "../assets/Vector-2.svg";
import Vector1 from "../assets/Vector-1.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  Padding,
  Height,
  Width,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const AiNutritionChart = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.aiNutritionChart}
      contentContainerStyle={styles.aiNutritionChartContent}
    >
      <View style={styles.nutricoreAiWrapper}>
        <Text style={[styles.nutricoreAi, styles.iCreateAFlexBox]}>
          <Text style={styles.nutricore}>{`NutriCore `}</Text>
          <Text style={styles.ai}>AI</Text>
        </Text>
      </View>
      <Text style={[styles.iCreateA, styles.iCreateAFlexBox]}>
        I create a personalized, affordable nutrition plan to boost your
        performance and recovery.
      </Text>
      <View style={styles.vectorParent}>
        <Vector2
          style={[styles.frameChild, styles.framePosition]}
          width={409}
          height={932}
        />
        <Vector1
          style={[styles.frameItem, styles.framePosition]}
          width={408}
          height={239}
        />
        <Pressable
          style={styles.graphicElement}
          onPress={() => navigation.navigate("AiNutrionist")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/Graphic-Element.png")}
          />
        </Pressable>
        <Image
          style={[styles.tempimages9npzq1Icon, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/tempImages9npzQ-1.png")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  aiNutritionChartContent: {
    flexDirection: "column",
    paddingHorizontal: 75,
    paddingTop: 51,
    paddingBottom: 953,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 12,
    height: 1069,
  },
  iCreateAFlexBox: {
    textAlign: "left",
    zIndex: 2,
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  aiNutritionChart: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
  nutricoreAiWrapper: {
    width: 140,
    flexDirection: "row",
    paddingLeft: Padding.padding_2,
    height: Height.height_22,
  },
  nutricoreAi: {
    width: Width.width_141,
    fontSize: FontSize.fs_24,
    fontWeight: "500",
    fontFamily: FontFamily.leagueSpartanMedium,
    zIndex: 2,
    height: Height.height_22,
  },
  nutricore: {
    color: Color.colorWhite,
  },
  ai: {
    color: Color.colorGold,
  },
  iCreateA: {
    width: 250,
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.inderRegular,
    color: Color.colorGray800,
    zIndex: 2,
  },
  vectorParent: {
    right: 0,
    bottom: 0,
    height: 1068,
    width: 409,
    position: "absolute",
  },
  frameChild: {
    top: 136,
    height: 932,
    width: 409,
  },
  frameItem: {
    top: 0,
    width: 408,
    height: 239,
    zIndex: 1,
  },
  graphicElement: {
    left: 6,
    top: 14,
    width: 18,
    height: Height.height_21,
    position: "absolute",
    zIndex: 2,
  },
  icon: {
    height: "100%",
    nodeWidth: 18,
    nodeHeight: 21,
    width: "100%",
  },
  tempimages9npzq1Icon: {
    top: 148,
    width: 411,
    height: 920,
    zIndex: 2,
  },
});

export default AiNutritionChart;
