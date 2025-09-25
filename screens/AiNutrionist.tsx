import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Component5 from "../assets/";
import Component6 from "../assets/";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent15 from "../components/FrameComponent15";
import {
  Height,
  Width,
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  Gap,
  BoxShadow,
  LineHeight,
} from "../GlobalStyles";

const AiNutrionist = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={styles.aiNutrionistFlexBox}>
      <KeyboardAvoidingView
        style={styles.aiNutrionistFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.aiNutrionistScrollViewContent}
        >
          <View style={styles.aiNutrionistInner}>
            <View style={styles.nutricoreAiParent}>
              <Text style={styles.nutricoreAi}>
                <Text style={styles.nutricore}>{`NutriCore `}</Text>
                <Text style={styles.ai}>AI</Text>
              </Text>
              <Text style={styles.iCreateA}>
                I create a personalized, affordable nutrition plan to boost your
                performance and recovery.
              </Text>
            </View>
          </View>
          <View style={styles.vectorParent}>
            <Component5
              style={[styles.frameChild, styles.frameItemPosition]}
              width={NaN}
              height={767}
            />
            <Component6
              style={[styles.frameItem, styles.frameItemPosition]}
              width={NaN}
              height={221}
            />
            <Pressable
              style={styles.home}
              onPress={() => navigation.navigate("FrameComponent6")}
            >
              <Image style={styles.icon} contentFit="cover" />
            </Pressable>
            <Image style={styles.botIcon} contentFit="cover" />
          </View>
          <View style={styles.frameParent}>
            <View style={styles.rectangleParent}>
              <View style={[styles.frameInner, styles.frameItemPosition]} />
              <View style={[styles.inputField, styles.inputLayout1]}>
                <View style={styles.inputLabel}>
                  <View style={styles.userParent}>
                    <Image style={styles.userIcon} contentFit="cover" />
                    <Text style={[styles.name, styles.vegClr]}>Name</Text>
                  </View>
                </View>
                <View style={styles.inputLayout} />
              </View>
              <View style={styles.aiNutrionistInputField}>
                <View style={[styles.inputFieldChild, styles.inputLayout]} />
                <TextInput
                  style={[styles.age, styles.vegTypo]}
                  placeholder="Age"
                  placeholderTextColor="rgba(0, 0, 0, 0.6)"
                />
                <Image
                  style={[styles.plannerIcon, styles.iconPosition]}
                  contentFit="cover"
                />
              </View>
              <View style={styles.inputField2}>
                <View style={[styles.inputFieldItem, styles.inputLayout]} />
                <TextInput
                  style={[styles.gender, styles.vegTypo]}
                  placeholder="Gender"
                  placeholderTextColor="rgba(0, 0, 0, 0.6)"
                />
                <Image
                  style={[styles.saveTheChildren, styles.iconPosition]}
                  contentFit="cover"
                />
              </View>
              <View style={styles.inputLayout1}>
                <View style={[styles.inputFieldInner, styles.inputLayout]} />
                <TextInput
                  style={[styles.gender, styles.vegTypo]}
                  placeholder="Height"
                  placeholderTextColor="rgba(0, 0, 0, 0.6)"
                />
                <Image
                  style={[styles.plannerIcon, styles.iconPosition]}
                  contentFit="cover"
                />
              </View>
              <View style={styles.inputLayout1}>
                <View style={[styles.inputFieldInner, styles.inputLayout]} />
                <TextInput
                  style={[styles.gender, styles.vegTypo]}
                  placeholder="Weight"
                  placeholderTextColor="rgba(0, 0, 0, 0.6)"
                />
                <Image
                  style={[styles.weighingIcon, styles.iconPosition]}
                  contentFit="cover"
                />
              </View>
              <View style={styles.inputLayout1}>
                <View style={[styles.inputFieldInner, styles.inputLayout]} />
                <Text style={[styles.sportsType, styles.vegTypo]}>
                  Sports type
                </Text>
                <Image
                  style={[styles.weighingIcon, styles.iconPosition]}
                  contentFit="cover"
                />
              </View>
              <View style={styles.inputLayout1}>
                <View style={[styles.inputFieldInner, styles.inputLayout]} />
                <Text style={[styles.vegNonVeg, styles.vegTypo]}>
                  Veg / Non-veg
                </Text>
                <Image
                  style={[styles.weighingIcon, styles.iconPosition]}
                  contentFit="cover"
                />
              </View>
              <FrameComponent15 />
            </View>
            <View style={styles.frameWrapper}>
              <Pressable
                style={[styles.rectangleGroup, styles.rectangleLayout]}
                onPress={() => navigation.navigate("AiNutritionChart")}
              >
                <View style={[styles.rectangleView, styles.rectangleLayout]} />
                <Pressable
                  style={styles.generatePlan}
                  onPress={() => navigation.navigate("AiNutritionChart")}
                >
                  <Text style={styles.aiNutrionistGeneratePlan}>
                    Generate Plan
                  </Text>
                </Pressable>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  aiNutrionistScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 23,
    paddingTop: 92,
    paddingBottom: 23,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 116,
    height: 917,
  },
  frameItemPosition: {
    left: 0,
    position: "absolute",
  },
  inputLayout1: {
    height: Height.height_24,
    width: Width.width_323,
  },
  vegClr: {
    color: Color.colorGray1200,
    textAlign: "left",
  },
  inputLayout: {
    height: Height.height_1,
    borderTopWidth: 1,
    width: Width.width_324,
    zIndex: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  vegTypo: {
    left: 44,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.fs_17,
    position: "absolute",
    fontWeight: "500",
  },
  iconPosition: {
    left: 17,
    height: Height.height_20,
    width: Width.width_20,
    position: "absolute",
    zIndex: 2,
  },
  rectangleLayout: {
    borderWidth: 2,
    borderColor: Color.colorDarkslateblue200,
    backgroundColor: Color.colorDarkslateblue200,
    borderRadius: Border.br_50,
    width: Width.width_300_13,
    height: Height.height_44_48,
    borderStyle: "solid",
  },
  aiNutrionistFlexBox: {
    flex: 1,
    width: "100%",
  },
  scrollview: {
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    maxWidth: "100%",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    flex: 1,
    width: "100%",
  },
  aiNutrionistInner: {
    width: 265,
    justifyContent: "flex-end",
    paddingRight: Padding.padding_4,
    flexDirection: "row",
    height: Height.height_56,
    zIndex: null,
  },
  nutricoreAiParent: {
    gap: Gap.gap_3,
    zIndex: 2,
    width: 261,
    height: Height.height_56,
  },
  nutricoreAi: {
    width: 130,
    height: Height.height_22,
    fontSize: FontSize.fs_24,
    fontFamily: FontFamily.leagueSpartanMedium,
    zIndex: 2,
    textAlign: "left",
    fontWeight: "500",
  },
  nutricore: {
    color: Color.colorWhite,
  },
  ai: {
    color: Color.colorGold,
  },
  iCreateA: {
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.inderRegular,
    color: Color.colorGray800,
    zIndex: 2,
    textAlign: "left",
    width: 261,
  },
  vectorParent: {
    marginTop: -457.5,
    marginLeft: -205,
    top: "50%",
    left: "50%",
    height: 915,
    width: Width.width_410,
    zIndex: 1,
    position: "absolute",
  },
  frameChild: {
    top: 148,
    height: 767,
    width: Width.width_410,
  },
  frameItem: {
    height: 221,
    zIndex: 1,
    top: 0,
    width: Width.width_410,
  },
  home: {
    left: 367,
    top: 13,
    width: Width.width_30,
    height: Height.height_30,
    position: "absolute",
    zIndex: 2,
  },
  icon: {
    height: "100%",
    nodeWidth: 30,
    nodeHeight: 30,
    width: "100%",
  },
  botIcon: {
    top: 76,
    left: 43,
    width: Width.width_80,
    height: Height.height_80,
    zIndex: 3,
    position: "absolute",
  },
  frameParent: {
    height: 631,
    gap: Gap.gap_11,
    width: Width.width_356,
    zIndex: null,
  },
  rectangleParent: {
    height: 575,
    paddingHorizontal: Padding.padding_16,
    paddingTop: 51,
    paddingBottom: Padding.padding_20,
    gap: 36,
    width: Width.width_356,
    zIndex: 1,
  },
  frameInner: {
    right: 0,
    bottom: 0,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1100,
    width: Width.width_356,
    zIndex: 1,
    top: 0,
  },
  inputField: {
    paddingBottom: Padding.padding_1,
  },
  inputLabel: {
    paddingLeft: Padding.padding_17,
    height: Height.height_23,
    width: Width.width_122,
    flexDirection: "row",
  },
  userParent: {
    width: 105,
    gap: Gap.gap_7,
    height: Height.height_23,
    zIndex: 2,
    flexDirection: "row",
  },
  userIcon: {
    height: Height.height_20,
    width: Width.width_20,
    zIndex: 2,
  },
  name: {
    width: Width.width_81,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.fs_17,
    color: Color.colorGray1200,
    height: Height.height_23,
    zIndex: 3,
    fontWeight: "500",
  },
  aiNutrionistInputField: {
    height: Height.height_25,
    width: Width.width_323,
  },
  inputFieldChild: {
    top: 24,
    left: 0,
    position: "absolute",
  },
  age: {
    top: 1,
    zIndex: 3,
  },
  plannerIcon: {
    top: 0,
  },
  inputField2: {
    height: Height.height_23,
    width: Width.width_323,
  },
  inputFieldItem: {
    top: 22,
    left: 0,
    position: "absolute",
  },
  gender: {
    zIndex: 3,
    top: 0,
  },
  saveTheChildren: {
    top: 1,
  },
  inputFieldInner: {
    top: 23,
    left: 0,
    position: "absolute",
  },
  weighingIcon: {
    top: 2,
  },
  sportsType: {
    width: Width.width_103,
    color: Color.colorGray1200,
    textAlign: "left",
    height: Height.height_23,
    zIndex: 3,
    top: 0,
  },
  vegNonVeg: {
    height: Height.height_21,
    color: Color.colorGray1200,
    textAlign: "left",
    width: Width.width_122,
    top: 0,
    zIndex: 2,
  },
  frameWrapper: {
    width: 323,
    height: 45,
    paddingLeft: Padding.padding_23,
    zIndex: 1,
    flexDirection: "row",
  },
  rectangleGroup: {
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    paddingLeft: 81,
    paddingTop: Padding.padding_12,
    paddingRight: 79,
    paddingBottom: Padding.padding_12_5,
    zIndex: 1,
    flexDirection: "row",
  },
  rectangleView: {
    display: "none",
  },
  generatePlan: {
    zIndex: 1,
  },
  aiNutrionistGeneratePlan: {
    width: Width.width_141,
    fontSize: FontSize.fs_20,
    lineHeight: LineHeight.lh_20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    height: Height.height_20,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default AiNutrionist;
