import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Color,
  Border,
  BoxShadow,
  Width,
  Height,
  FontSize,
  FontFamily,
  Gap,
  Padding,
} from "../GlobalStyles";

const AsicsContainer = () => {
  return (
    <View style={styles.asicsContainer}>
      <View style={styles.reviewContainerWrapper}>
        <View style={[styles.reviewContainer, styles.reviewContainerLayout]}>
          <View
            style={[styles.reviewContainerChild, styles.reviewContainerLayout]}
          />
          <Text style={styles.inReview}>{`In Review >`}</Text>
        </View>
      </View>
      <View style={[styles.reebokAsicsRows, styles.asicsLayout]}>
        <View style={[styles.asicsRow, styles.asicsLayout]}>
          <Text style={[styles.reebok, styles.reebokTypo]}>REEBOK</Text>
          <View style={[styles.emptyDividerWrapper, styles.asicsLayout]}>
            <Text style={[styles.emptyDivider, styles.textTypo]}>
              23/06/2025
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.asicsContainerReebokAsicsRows, styles.asicsLayout]}>
        <Text style={[styles.asicsIndia, styles.reebokTypo]}>ASICS India</Text>
        <View style={styles.wrapper}>
          <Text style={[styles.text, styles.textTypo]}>06/08/2025</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewContainerLayout: {
    backgroundColor: Color.colorCoral,
    borderRadius: Border.br_6,
    elevation: 4,
    boxShadow: BoxShadow.shadow_drop,
    width: Width.width_165,
    height: Height.height_37,
  },
  asicsLayout: {
    height: Height.height_22,
    zIndex: null,
  },
  reebokTypo: {
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
  asicsContainer: {
    height: 137,
    alignItems: "flex-end",
    gap: Gap.gap_28,
    zIndex: null,
    width: Width.width_367,
  },
  reviewContainerWrapper: {
    paddingRight: 202,
    justifyContent: "flex-end",
    flexDirection: "row",
    height: Height.height_37,
    zIndex: null,
    width: Width.width_367,
  },
  reviewContainer: {
    paddingLeft: Padding.padding_11,
    paddingTop: Padding.padding_5,
    paddingRight: Padding.padding_6,
    paddingBottom: Padding.padding_4,
    flexDirection: "row",
  },
  reviewContainerChild: {
    display: "none",
  },
  inReview: {
    height: Height.height_28,
    width: Width.width_147,
    fontSize: FontSize.fs_30,
    color: Color.colorWhite,
    zIndex: 1,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  reebokAsicsRows: {
    paddingRight: Padding.padding_1,
    width: 345,
    height: Height.height_22,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  asicsRow: {
    width: Width.width_344,
    gap: 171,
    flexDirection: "row",
  },
  reebok: {
    width: 86,
  },
  emptyDividerWrapper: {
    width: Width.width_87,
    paddingTop: Padding.padding_7,
  },
  emptyDivider: {
    width: Width.width_90,
  },
  asicsContainerReebokAsicsRows: {
    gap: 135,
    width: 345,
    height: Height.height_22,
    flexDirection: "row",
  },
  asicsIndia: {
    width: Width.width_122,
  },
  wrapper: {
    width: 88,
    height: Height.height_21,
    paddingTop: Padding.padding_6,
    zIndex: null,
  },
  text: {
    width: 91,
  },
});

export default AsicsContainer;
