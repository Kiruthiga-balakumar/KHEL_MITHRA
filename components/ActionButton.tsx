import React, { useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Width,
  Height,
  FontFamily,
  FontSize,
  Gap,
  Padding,
  Color,
  Border,
  LineHeight,
} from "../GlobalStyles";

export type ActionButtonType = {
  line32?: React.ReactNode;

  /** Style props */
  actionButtonZIndex?: number;
  groupPressablePaddingRight?: number | string;
  frameViewWidth?: number | string;
  frameViewPaddingRight?: number | string;

  /** Action props */
  onGroupPressablePress?: () => void;
  onGroupPressablePress1?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ActionButton = ({
  actionButtonZIndex,
  onGroupPressablePress,
  groupPressablePaddingRight,
  frameViewWidth,
  frameViewPaddingRight,
  line32,
  onGroupPressablePress1,
}: ActionButtonType) => {
  const actionButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("zIndex", actionButtonZIndex),
    };
  }, [actionButtonZIndex]);

  const groupPressableStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingRight", groupPressablePaddingRight),
    };
  }, [groupPressablePaddingRight]);

  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth),
      ...getStyleValue("paddingRight", frameViewPaddingRight),
    };
  }, [frameViewWidth, frameViewPaddingRight]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.actionButton, actionButtonStyle]}>
      <Pressable
        style={[styles.rectangleParent, groupPressableStyle]}
        onPress={onGroupPressablePress}
      >
        <View style={styles.frameChild} />
        <Text style={styles.logIn}>Log in</Text>
      </Pressable>
      <View
        style={[
          styles.passwordActionWrapper,
          styles.signupSeparatorFlexBox,
          frameView2Style,
        ]}
      >
        <View style={styles.passwordAction}>
          <Text style={styles.forgottenPassword}>Forgotten Password?</Text>
          {line32}
        </View>
      </View>
      <View style={styles.actionButtonInner}>
        <Pressable
          style={styles.accountSignupParent}
          onPress={onGroupPressablePress1}
        >
          <View style={styles.accountSignup}>
            <Text style={styles.dontContainerTypo}>
              <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
              <Text style={styles.text}>{` `}</Text>
              <Text style={styles.signup}>Signup</Text>
            </Text>
            <Text
              style={[
                styles.actionButtonDontHaveAnContainer,
                styles.dontContainerTypo,
              ]}
            >
              <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
              <Text style={styles.text}>{` `}</Text>
              <Text style={styles.signup}>Signup</Text>
            </Text>
          </View>
          <View style={[styles.signupSeparator, styles.signupSeparatorFlexBox]}>
            <View style={styles.signupSeparatorChild} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signupSeparatorFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  dontContainerTypo: {
    width: Width.width_200,
    height: Height.height_8,
    fontFamily: FontFamily.joanRegular,
    fontSize: FontSize.fs_15,
    textAlign: "left",
  },
  actionButton: {
    width: 300,
    height: Height.height_107_6,
    gap: Gap.gap_11,
    alignItems: "flex-end",
  },
  rectangleParent: {
    paddingLeft: Padding.padding_123_6,
    paddingTop: Padding.padding_11_6,
    paddingRight: 103,
    paddingBottom: Padding.padding_12_9,
    zIndex: 2,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: Color.colorPowderblue100,
    borderStyle: "solid",
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_50,
    height: Height.height_44_48,
    width: Width.width_300_13,
  },
  frameChild: {
    display: "none",
    borderWidth: 2,
    borderColor: Color.colorPowderblue100,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_50,
    height: Height.height_44_48,
    width: Width.width_300_13,
    borderStyle: "solid",
  },
  logIn: {
    height: Height.height_20,
    width: Width.width_74,
    fontSize: FontSize.fs_20,
    lineHeight: LineHeight.lh_20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    zIndex: 1,
    textAlign: "left",
    color: Color.colorWhite,
  },
  passwordActionWrapper: {
    width: 214,
    paddingRight: 68,
    height: Height.height_19_1,
  },
  passwordAction: {
    width: Width.width_145,
    zIndex: 2,
    height: Height.height_19_1,
  },
  forgottenPassword: {
    width: Width.width_148,
    height: Height.height_16,
    zIndex: 3,
    color: Color.colorDeepskyblue,
    fontFamily: FontFamily.joanRegular,
    fontSize: FontSize.fs_15,
    textAlign: "left",
  },
  actionButtonInner: {
    width: 240,
    paddingRight: 42,
    height: Height.height_22,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  accountSignupParent: {
    gap: Gap.gap_14,
    width: Width.width_197,
    height: Height.height_22,
    zIndex: 2,
    alignItems: "flex-end",
  },
  accountSignup: {
    zIndex: 1,
    height: Height.height_8,
    width: Width.width_197,
    flexDirection: "row",
  },
  dontHaveAn: {
    color: Color.colorWhite,
  },
  text: {
    color: Color.colorDimgray,
  },
  signup: {
    color: Color.colorDeepskyblue,
  },
  actionButtonDontHaveAnContainer: {
    marginLeft: -200,
    zIndex: 1,
  },
  signupSeparator: {
    zIndex: null,
    width: 51,
    paddingRight: Padding.padding_6,
    height: Height.height_0_5,
  },
  signupSeparatorChild: {
    width: 46,
    borderColor: Color.colorDeepskyblue,
    borderTopWidth: 0.5,
    height: Height.height_0_5,
    borderStyle: "solid",
  },
});

export default ActionButton;
