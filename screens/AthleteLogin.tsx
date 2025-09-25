import React, { useState, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  Modal,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Root from "./Root";
import Group407 from "../assets/Group-407.svg";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";
import { Color, Width, Height, FontSize, FontFamily } from "../GlobalStyles";

const AthleteLogin = () => {
  const [sortDownIconVisible, setSortDownIconVisible] = useState(false);

  const openSortDownIcon = useCallback(() => {
    setSortDownIconVisible(true);
  }, []);

  const closeSortDownIcon = useCallback(() => {
    setSortDownIconVisible(false);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.scrollviewFlexBox}>
        <KeyboardAvoidingView
          style={styles.scrollviewFlexBox}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            style={[styles.scrollview, styles.scrollviewFlexBox]}
            contentContainerStyle={styles.athleteLoginScrollViewContent}
          >
            <Group407
              style={styles.athleteLoginChild}
              width={NaN}
              height={NaN}
            />
            <Container
              whatsAppImageAt={require("../assets/WhatsApp-Image-2025-09-09-at-20-57-53-61d7975d-removebg-preview-3.png")}
              onSortDownPress={openSortDownIcon}
            />
            <View style={styles.welcomeWrapper}>
              <Text style={styles.welcome}>WELCOME!</Text>
            </View>
            <LoginForm />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>

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
  athleteLoginScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 101,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 19,
    height: 917,
  },
  scrollviewFlexBox: {
    flex: 1,
    width: "100%",
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
  scrollview: {
    backgroundColor: Color.colorDarkslateblue100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    maxWidth: "100%",
  },
  athleteLoginChild: {
    width: Width.width_412_17,
    position: "absolute",
    top: 0,
    right: -3,
    height: Height.height_915_21,
  },
  welcomeWrapper: {
    zIndex: 1,
    width: Width.width_267,
    flexDirection: "row",
    paddingLeft: 116,
    height: Height.height_44,
  },
  welcome: {
    width: Width.width_154,
    fontSize: FontSize.fs_35,
    fontFamily: FontFamily.jaro,
    color: Color.colorWhite,
    textAlign: "left",
    zIndex: 1,
    height: Height.height_44,
  },
});

export default AthleteLogin;
