import React, { useState, useCallback } from "react";
import { Pressable, StyleSheet, View, Text, Modal } from "react-native";
import Website1 from "../screens/Website1";
import {
  Height,
  Width,
  Padding,
  BoxShadow,
  Border,
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const AnalysisLayout = () => {
  const [analyseBackgroundVisible, setAnalyseBackgroundVisible] =
    useState(false);
  const [analyseNowTextVisible, setAnalyseNowTextVisible] = useState(false);

  const openAnalyseBackground = useCallback(() => {
    setAnalyseBackgroundVisible(true);
  }, []);

  const closeAnalyseBackground = useCallback(() => {
    setAnalyseBackgroundVisible(false);
  }, []);

  const openAnalyseNowText = useCallback(() => {
    setAnalyseNowTextVisible(true);
  }, []);

  const closeAnalyseNowText = useCallback(() => {
    setAnalyseNowTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.analysisLayout}>
        <View style={styles.analysisButtonArea}>
          <Pressable style={styles.analyseLayout}>
            <Pressable
              style={[styles.analyseBackground, styles.backgroundPosition]}
              onPress={openAnalyseBackground}
            />
            <Pressable style={styles.analyseNow} onPress={openAnalyseNowText}>
              <Text style={styles.analysisLayoutAnalyseNow}>Analyse now</Text>
            </Pressable>
          </Pressable>
        </View>
        <View style={styles.lieDownArea}>
          <View style={[styles.lieDownBackground, styles.backgroundPosition]} />
          <Text
            style={styles.lieOnYour}
          >{`Lie on your back with knees bent, feet flat, and hands behind your head. Engage your core, lift your upper body toward your knees, then slowly lower back down.
Make sure your camera didn’t shake and don’t indulge in video tampering. If you found tampering for 3 times, you will be banned from using this app anymore.`}</Text>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={analyseBackgroundVisible}
      >
        <View style={styles.analyseBackgroundOverlay}>
          <Pressable
            style={styles.analyseBackgroundBg}
            onPress={closeAnalyseBackground}
          />
          <Website1 onClose={closeAnalyseBackground} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={analyseNowTextVisible}>
        <View style={styles.analyseNowTextOverlay}>
          <Pressable
            style={styles.analyseNowTextBg}
            onPress={closeAnalyseNowText}
          />
          <Website1 onClose={closeAnalyseNowText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  analysisLayout: {
    height: Height.height_448,
    gap: 39,
    zIndex: null,
    width: Width.width_356,
  },
  analysisButtonArea: {
    width: Width.width_342,
    height: Height.height_50_6,
    paddingLeft: Padding.padding_14,
    flexDirection: "row",
    zIndex: null,
  },
  analyseLayout: {
    width: Width.width_328,
    height: Height.height_50_56,
  },
  analyseBackgroundOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  analyseBackgroundBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  analyseBackground: {
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_10,
    backgroundColor: Color.colorForestgreen,
    width: Width.width_328,
    height: Height.height_50_56,
  },
  analyseNowTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  analyseNowTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  analyseNow: {
    left: 84,
    top: 10,
    zIndex: 1,
    position: "absolute",
  },
  analysisLayoutAnalyseNow: {
    fontSize: FontSize.fs_34,
    fontFamily: FontFamily.leagueSpartanRegular,
    color: Color.colorWhite,
    width: Width.width_178,
    height: Height.height_31,
    textAlign: "left",
  },
  lieDownArea: {
    height: 358,
    zIndex: 1,
    paddingLeft: Padding.padding_23,
    paddingTop: Padding.padding_22,
    paddingRight: Padding.padding_5,
    paddingBottom: 88,
    flexDirection: "row",
    width: Width.width_356,
  },
  lieDownBackground: {
    right: 0,
    bottom: 0,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1000,
    width: Width.width_356,
  },
  lieOnYour: {
    width: 326,
    fontSize: FontSize.fs_20,
    fontFamily: FontFamily.inderRegular,
    color: Color.colorGray900,
    textAlign: "left",
    zIndex: 1,
  },
});

export default AnalysisLayout;
