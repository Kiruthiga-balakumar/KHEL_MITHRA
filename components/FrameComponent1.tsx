import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Color,
  Border,
  BoxShadow,
  Height,
  Width,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";

const FrameComponent1 = () => {
  return (
    <View style={styles.selectedContainerParent}>
      <View style={[styles.selectedContainer, styles.selectedContainerLayout]}>
        <View
          style={[
            styles.selectedContainerChild,
            styles.selectedContainerLayout,
          ]}
        />
        <Text style={styles.selected}>{`Selected >`}</Text>
      </View>
      <View style={[styles.brandSelection, styles.brandLayout1]}>
        <View style={[styles.brandGrid, styles.brandLayout1]}>
          <View style={[styles.brandRows, styles.brandLayout]}>
            <Text style={[styles.nikeIndia, styles.indiaTypo]}>NIKE India</Text>
            <View style={styles.brandDividers}>
              <Text style={[styles.emptyDividers, styles.textTypo]}>
                22/07/2025
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.selectedContainerParentBrandRows,
              styles.brandLayout,
            ]}
          >
            <Text style={[styles.adidas, styles.indiaTypo]}>Adidas</Text>
            <View style={[styles.wrapper, styles.brandLayout]}>
              <Text style={[styles.text, styles.textTypo]}>18/06/2025</Text>
            </View>
          </View>
          <View style={[styles.brandRows2, styles.brandLayout]}>
            <Text style={[styles.pumaIndia, styles.indiaTypo]}>PUMA India</Text>
            <View style={[styles.container, styles.frameSpaceBlock]}>
              <Text style={[styles.emptyDividers, styles.textTypo]}>
                27/05/2025
              </Text>
            </View>
          </View>
          <View style={[styles.brandRows3, styles.brandLayout]}>
            <Text style={[styles.underArmour, styles.indiaTypo]}>
              Under Armour
            </Text>
            <View style={[styles.frame, styles.frameSpaceBlock]}>
              <Text style={[styles.text2, styles.textTypo]}>14/05/2025</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedContainerLayout: {
    backgroundColor: Color.colorLimegreen100,
    borderRadius: Border.br_6,
    elevation: 4,
    boxShadow: BoxShadow.shadow_drop,
    height: Height.height_37,
    width: Width.width_165,
  },
  brandLayout1: {
    height: 172,
    zIndex: null,
  },
  brandLayout: {
    height: Height.height_22,
    zIndex: null,
  },
  indiaTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.fs_24,
    height: Height.height_22,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  textTypo: {
    color: Color.colorGray1700,
    fontSize: FontSize.fs_16,
    height: Height.height_15,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  frameSpaceBlock: {
    paddingTop: Padding.padding_6,
    height: Height.height_21,
    zIndex: null,
  },
  selectedContainerParent: {
    height: 235,
    gap: Gap.gap_26,
    zIndex: null,
    width: Width.width_366,
  },
  selectedContainer: {
    paddingLeft: Padding.padding_18,
    paddingRight: Padding.padding_14,
    paddingBottom: Padding.padding_2,
    paddingTop: Padding.padding_7,
    flexDirection: "row",
  },
  selectedContainerChild: {
    display: "none",
  },
  selected: {
    height: Height.height_28,
    width: 132,
    fontSize: FontSize.fs_30,
    color: Color.colorWhite,
    zIndex: 1,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  brandSelection: {
    paddingLeft: Padding.padding_22,
    flexDirection: "row",
    width: Width.width_366,
  },
  brandGrid: {
    gap: Gap.gap_28,
    width: Width.width_344,
  },
  brandRows: {
    gap: 150,
    width: Width.width_344,
    flexDirection: "row",
  },
  nikeIndia: {
    width: 107,
  },
  brandDividers: {
    height: Height.height_17,
    paddingTop: Padding.padding_2,
    width: Width.width_87,
    zIndex: null,
  },
  emptyDividers: {
    width: Width.width_90,
  },
  selectedContainerParentBrandRows: {
    width: 341,
    gap: 184,
    flexDirection: "row",
  },
  adidas: {
    width: 73,
  },
  wrapper: {
    width: Width.width_84,
    paddingTop: Padding.padding_7,
  },
  text: {
    width: Width.width_87,
  },
  brandRows2: {
    gap: 136,
    width: Width.width_344,
    flexDirection: "row",
  },
  pumaIndia: {
    width: Width.width_121,
  },
  container: {
    width: Width.width_87,
  },
  brandRows3: {
    width: 339,
    gap: 111,
    flexDirection: "row",
  },
  underArmour: {
    width: Width.width_146,
  },
  frame: {
    width: Width.width_82,
  },
  text2: {
    width: Width.width_85,
  },
});

export default FrameComponent1;
