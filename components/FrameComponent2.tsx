import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Width,
  Color,
  Border,
  BoxShadow,
  Height,
  FontFamily,
  Gap,
  Padding,
  FontSize,
} from "../GlobalStyles";

const FrameComponent2 = () => {
  return (
    <View style={[styles.rejectedContainerParent, styles.containerLayout]}>
      <View style={[styles.rejectedContainer, styles.rejectedContainerLayout]}>
        <View
          style={[
            styles.rejectedContainerChild,
            styles.rejectedContainerLayout,
          ]}
        />
        <Text
          style={[styles.rejected, styles.rejectedTypo]}
        >{`Rejected >`}</Text>
      </View>
      <View style={[styles.tataContainerWrapper, styles.containerLayout]}>
        <View style={styles.tataContainer}>
          <Text style={[styles.tataSports, styles.rejectedTypo]}>
            TATA sports
          </Text>
          <View style={styles.emptyValueWrapper}>
            <Text style={[styles.emptyValue, styles.rejectedTypo]}>
              17/04/2025
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLayout: {
    width: Width.width_355,
    zIndex: null,
  },
  rejectedContainerLayout: {
    backgroundColor: Color.colorRed,
    borderRadius: Border.br_6,
    elevation: 4,
    boxShadow: BoxShadow.shadow_drop,
    height: Height.height_37,
    width: Width.width_165,
  },
  rejectedTypo: {
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  rejectedContainerParent: {
    height: 86,
    gap: Gap.gap_26,
    zIndex: null,
  },
  rejectedContainer: {
    paddingLeft: Padding.padding_18,
    paddingTop: Padding.padding_5,
    paddingRight: Padding.padding_12,
    paddingBottom: Padding.padding_4,
    flexDirection: "row",
  },
  rejectedContainerChild: {
    display: "none",
  },
  rejected: {
    height: Height.height_28,
    width: 134,
    fontSize: FontSize.fs_30,
    color: Color.colorWhite,
    zIndex: 1,
  },
  tataContainerWrapper: {
    paddingLeft: Padding.padding_16,
    height: Height.height_23,
    flexDirection: "row",
    zIndex: null,
  },
  tataContainer: {
    width: 339,
    gap: 136,
    height: Height.height_23,
    flexDirection: "row",
    zIndex: null,
  },
  tataSports: {
    width: Width.width_121,
    fontSize: FontSize.fs_24,
    color: Color.colorBlack,
    height: Height.height_23,
  },
  emptyValueWrapper: {
    width: Width.width_82,
    height: Height.height_21,
    paddingTop: Padding.padding_6,
    zIndex: null,
  },
  emptyValue: {
    width: Width.width_85,
    height: Height.height_15,
    fontSize: FontSize.fs_16,
    color: Color.colorGray1700,
  },
});

export default FrameComponent2;
