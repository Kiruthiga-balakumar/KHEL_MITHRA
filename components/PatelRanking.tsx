import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  BoxShadow,
  Color,
  FontFamily,
  FontSize,
  Height,
  Padding,
  Width,
  Gap,
  Border,
} from "../GlobalStyles";

const PatelRanking = () => {
  return (
    <View style={styles.patelRanking}>
      <View style={styles.rankingDivision}>
        <View style={styles.forwardWrapper}>
          <View style={[styles.forward, styles.forwardShadowBox]} />
        </View>
        <View style={styles.reviewsParent}>
          <View style={[styles.reviews, styles.forwardShadowBox]} />
          <View style={styles.ashwinDetails}>
            <Text style={[styles.ashwinData, styles.textTypo]}>4.</Text>
            <Text style={[styles.ashwin, styles.textTypo]}>Ashwin</Text>
          </View>
          <View style={styles.ashwinMetric}>
            <Text style={[styles.cm, styles.cmTypo]}>49 cm</Text>
          </View>
        </View>
      </View>
      <View style={styles.patelData}>
        <View style={[styles.reviewsGroup, styles.parentSpaceBlock]}>
          <View style={[styles.reviews, styles.forwardShadowBox]} />
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>5.</Text>
            <Text style={[styles.snehaPatel, styles.textTypo]}>
              Sneha Patel
            </Text>
          </View>
          <View style={[styles.metricData, styles.metricDataLayout]}>
            <Text style={[styles.patelRankingCm, styles.cmTypo]}>47 cm</Text>
          </View>
        </View>
      </View>
      <View style={styles.patelData}>
        <View style={[styles.ratingSnapshotParent, styles.parentSpaceBlock]}>
          <View style={[styles.reviews, styles.forwardShadowBox]} />
          <Text style={[styles.patelRankingText, styles.textTypo]}>6.</Text>
          <View style={styles.sureshKumarWrapper}>
            <Text style={[styles.sureshKumar, styles.textTypo]}>
              Suresh Kumar
            </Text>
          </View>
          <View style={styles.metricDataLayout}>
            <Text style={[styles.patelRankingCm, styles.cmTypo]}>45 cm</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.parentSpaceBlock]}>
        <View style={[styles.reviews, styles.forwardShadowBox]} />
        <View style={[styles.divyaInfo, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>7.</Text>
          <View style={styles.divyaWrapper}>
            <Text style={[styles.divya, styles.textTypo]}>Divya</Text>
          </View>
        </View>
        <View style={styles.divyaMetric}>
          <Text style={[styles.cm3, styles.cmTypo]}>44 cm</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forwardShadowBox: {
    elevation: 4,
    boxShadow: BoxShadow.shadow_drop,
  },
  textTypo: {
    zIndex: 1,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_28,
    height: Height.height_26,
  },
  cmTypo: {
    fontSize: FontSize.fs_24,
    height: Height.height_22,
    zIndex: 1,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  parentSpaceBlock: {
    paddingRight: Padding.padding_27,
    paddingBottom: Padding.padding_22,
    height: Height.height_70,
    flexDirection: "row",
    width: Width.width_368,
  },
  parentFlexBox: {
    gap: Gap.gap_3,
    zIndex: 1,
    flexDirection: "row",
  },
  metricDataLayout: {
    width: Width.width_60,
    paddingTop: Padding.padding_2,
    height: Height.height_24,
  },
  patelRanking: {
    height: 356,
    gap: Gap.gap_20,
    zIndex: null,
    width: Width.width_369,
  },
  rankingDivision: {
    height: 86,
    gap: Gap.gap_15,
    width: Width.width_368,
    zIndex: null,
  },
  forwardWrapper: {
    width: 365,
    paddingLeft: Padding.padding_3,
    flexDirection: "row",
    height: Height.height_1,
    zIndex: null,
  },
  forward: {
    width: 363,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    opacity: 0.5,
    height: Height.height_1,
  },
  reviewsParent: {
    paddingRight: Padding.padding_24,
    gap: 130,
    paddingBottom: Padding.padding_22,
    paddingTop: Padding.padding_22,
    paddingLeft: Padding.padding_37,
    height: Height.height_70,
    flexDirection: "row",
    width: Width.width_368,
  },
  reviews: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1000,
    width: Width.width_368,
  },
  ashwinDetails: {
    width: 116,
    gap: Gap.gap_5,
    zIndex: 1,
    height: Height.height_26,
    flexDirection: "row",
  },
  ashwinData: {
    width: Width.width_26,
  },
  ashwin: {
    width: 88,
  },
  ashwinMetric: {
    width: Width.width_61,
    paddingTop: Padding.padding_2,
    height: Height.height_24,
    zIndex: 1,
  },
  cm: {
    width: Width.width_64,
  },
  patelData: {
    paddingLeft: Padding.padding_1,
    height: Height.height_70,
    flexDirection: "row",
    zIndex: null,
    width: Width.width_369,
  },
  reviewsGroup: {
    gap: 76,
    paddingLeft: Padding.padding_36,
    paddingRight: Padding.padding_27,
    paddingTop: Padding.padding_22,
  },
  parent: {
    width: 169,
    height: Height.height_26,
  },
  text: {
    width: 27,
  },
  snehaPatel: {
    width: 142,
  },
  metricData: {
    zIndex: 1,
  },
  patelRankingCm: {
    width: Width.width_63,
  },
  ratingSnapshotParent: {
    gap: Gap.gap_2,
    paddingLeft: Padding.padding_36,
    paddingRight: Padding.padding_27,
    paddingTop: Padding.padding_22,
  },
  patelRankingText: {
    width: Width.width_28,
  },
  sureshKumarWrapper: {
    width: 210,
    paddingRight: 46,
    height: Height.height_26,
  },
  sureshKumar: {
    width: 167,
  },
  rectangleParent: {
    paddingTop: Padding.padding_20,
    gap: 149,
    paddingRight: Padding.padding_27,
    paddingLeft: Padding.padding_37,
  },
  divyaInfo: {
    width: 96,
    height: Height.height_28,
  },
  divyaWrapper: {
    width: 66,
    height: Height.height_28,
    paddingTop: Padding.padding_2,
  },
  divya: {
    width: 69,
  },
  divyaMetric: {
    width: 59,
    paddingTop: Padding.padding_4,
    zIndex: 1,
    height: Height.height_26,
  },
  cm3: {
    width: Width.width_62,
  },
});

export default PatelRanking;
