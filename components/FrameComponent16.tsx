import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Image } from "expo-image";
import {
  Height,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
  Width,
  Gap,
  BoxShadow,
} from "../GlobalStyles";

const FrameComponent16 = () => {
  const [jumpAllOpen, setJumpAllOpen] = useState(false);
  const [jumpAllValue, setJumpAllValue] = useState();
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState();

  return (
    <View style={styles.productNavigationWrapper}>
      <View style={styles.productNavigation}>
        <View style={styles.star} />
        <View style={[styles.categoryLocation, styles.categoryLayout]}>
          <Text style={[styles.selectCategory, styles.locationTypo]}>
            Select Category :
          </Text>
          <View style={[styles.footer, styles.footerLayout]}>
            <View style={styles.jumpAll}>
              <DropDownPicker
                style={[styles.dropdownpicker, styles.jumpAlldropDownContainer]}
                open={jumpAllOpen}
                setOpen={setJumpAllOpen}
                value={jumpAllValue}
                setValue={setJumpAllValue}
                placeholder="Vertical Jump"
                items={[]}
                labelStyle={styles.jumpAllValue}
                placeholderStyle={styles.jumpAllValue}
                dropdownContainerStyle={styles.jumpAlldropDownContent}
                zIndex={4000}
                zIndexInverse={0}
                dropDownDirection={"BOTTOM"}
              />
            </View>
            <View style={styles.footerChild} />
            <Image
              style={[styles.dropDownIcon, styles.wrapperLayout]}
              contentFit="cover"
              source={require("../assets/Drop-Down.png")}
            />
          </View>
        </View>
        <View
          style={[
            styles.productNavigationWrapperCategoryLocation,
            styles.categoryLayout,
          ]}
        >
          <Text style={[styles.location, styles.locationTypo]}>Location :</Text>
          <View style={[styles.frameParent, styles.footerLayout]}>
            <View style={styles.wrapperLayout}>
              <DropDownPicker
                style={[
                  styles.dropdownpicker,
                  styles.frameDropdowndropDownContainer,
                ]}
                open={frameDropdownOpen}
                setOpen={setFrameDropdownOpen}
                value={frameDropdownValue}
                setValue={setFrameDropdownValue}
                placeholder="All"
                items={[]}
                labelStyle={styles.frameDropdownValue}
                placeholderStyle={styles.frameDropdownValue}
                dropdownContainerStyle={styles.frameDropdowndropDownContent}
                zIndex={4000}
                zIndexInverse={0}
                dropDownDirection={"BOTTOM"}
              />
            </View>
            <View style={styles.footerChild} />
            <Image
              style={[styles.dropDownIcon, styles.wrapperLayout]}
              contentFit="cover"
              source={require("../assets/Drop-Down.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jumpAllValue: {
    color: "#000",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "LeagueSpartan-Medium",
  },
  jumpAlldropDownContainer: {
    paddingTop: 3,
    minHeight: 20,
    height: 20,
    borderWidth: 0,
    borderColor: "",
  },
  jumpAlldropDownContent: {
    borderColor: "",
    borderWidth: 0,
  },
  frameDropdownValue: {
    color: "#000",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "LeagueSpartan-Medium",
  },
  frameDropdowndropDownContainer: {
    paddingTop: 3,
    minHeight: 20,
    height: 20,
    borderWidth: 0,
    borderColor: "",
  },
  frameDropdowndropDownContent: {
    borderColor: "",
    borderWidth: 0,
  },
  categoryLayout: {
    zIndex: 1,
    height: Height.height_22,
    flexDirection: "row",
  },
  locationTypo: {
    zIndex: 1,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_24,
    height: Height.height_22,
  },
  footerLayout: {
    paddingVertical: Padding.padding_1,
    paddingHorizontal: Padding.padding_5,
    zIndex: 2,
    borderWidth: 1,
    borderColor: Color.colorGray1200,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_6,
    width: Width.width_157,
    height: Height.height_22,
    flexDirection: "row",
  },
  wrapperLayout: {
    width: Width.width_20,
    height: Height.height_20,
  },
  productNavigationWrapper: {
    width: 365,
    height: 103,
    paddingLeft: Padding.padding_4,
    paddingBottom: Padding.padding_5,
    flexDirection: "row",
    zIndex: null,
  },
  productNavigation: {
    height: 98,
    paddingLeft: Padding.padding_15,
    paddingTop: Padding.padding_13,
    paddingRight: Padding.padding_11,
    paddingBottom: Padding.padding_13,
    gap: Gap.gap_28,
    width: Width.width_361,
    zIndex: null,
  },
  star: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray700,
    width: Width.width_361,
  },
  categoryLocation: {
    width: Width.width_335,
    gap: Gap.gap_3,
  },
  selectCategory: {
    width: 175,
  },
  footer: {
    gap: Gap.gap_22,
  },
  jumpAll: {
    width: Width.width_103,
    height: Height.height_20,
  },
  dropdownpicker: {
    paddingTop: Padding.padding_3,
    minHeight: 20,
    height: 20,
    borderWidth: 0,
    borderColor: "",
  },
  footerChild: {
    display: "none",
    borderWidth: 1,
    borderColor: Color.colorGray1200,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_6,
    width: Width.width_157,
    height: Height.height_22,
  },
  dropDownIcon: {
    zIndex: 3,
  },
  productNavigationWrapperCategoryLocation: {
    width: 276,
    gap: Gap.gap_18,
  },
  location: {
    width: Width.width_101,
  },
  frameParent: {
    gap: 105,
  },
});

export default FrameComponent16;
