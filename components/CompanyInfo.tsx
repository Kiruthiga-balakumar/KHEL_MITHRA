import * as React from "react";
import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Vector4 from "../assets/Vector-4.svg";
import Rectangle1091 from "../assets/Rectangle-109.svg";
import {
  Height,
  Width,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
  LineHeight,
} from "../GlobalStyles";

const CompanyInfo = () => {
  return (
    <View style={styles.companyInfo}>
      <Vector4 style={styles.companyInfoChild} width={280} height={232} />
      <View style={styles.companyInfoItem} />
      <View style={[styles.rectangleParent, styles.wrapperLayout]}>
        <View style={styles.framePosition} />
        <Image
          style={[styles.personIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/Person.png")}
        />
        <View style={styles.companyAddress}>
          <TextInput
            style={[styles.name, styles.companyTypo]}
            placeholder="Name"
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
          />
        </View>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.frameItem, styles.framePosition]} />
        <View style={styles.companyWrapper}>
          <Image
            style={[styles.companyIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/Company.png")}
          />
        </View>
        <TextInput
          style={[styles.company, styles.companyTypo]}
          placeholder="Company"
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupViewSpaceBlock]}>
        <View style={[styles.frameItem, styles.framePosition]} />
        <Image
          style={styles.emailIcon}
          contentFit="cover"
          source={require("../assets/Email.png")}
        />
        <TextInput
          style={styles.frameTextinput}
          placeholder="Work Email"
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
        />
      </View>
      <View style={[styles.groupView, styles.groupViewSpaceBlock]}>
        <View style={styles.framePosition} />
        <Image
          style={[styles.personIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/Address.png")}
        />
        <TextInput
          style={[styles.companyInfoCompanyAddress, styles.companyTypo]}
          placeholder="Company address"
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
        />
      </View>
      <View style={styles.websiteProfileParent}>
        <View style={styles.websiteProfile}>
          <Text style={styles.companyWebsite}>
            Company website / Profile link
          </Text>
        </View>
        <View style={styles.companyInfoRectangleParent}>
          <View style={styles.framePosition} />
          <Text style={[styles.uploadYourFile, styles.companyTypo]}>
            Upload your file here
          </Text>
          <View style={styles.uploadToFtpWrapper}>
            <Image
              style={styles.uploadToFtp}
              contentFit="cover"
              source={require("../assets/Upload-To-FTP.png")}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => {}}
      >
        <Rectangle1091 style={styles.icon} width={328} height={51} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: Height.height_50_56,
    zIndex: 2,
  },
  iconLayout: {
    height: Height.height_21_53,
    width: Width.width_21_53,
  },
  companyTypo: {
    fontSize: FontSize.fs_17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  framePosition: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGray1400,
    borderRadius: Border.br_10,
    width: Width.width_328,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupViewSpaceBlock: {
    paddingHorizontal: Padding.padding_12,
    flexDirection: "row",
    width: Width.width_328,
  },
  companyInfo: {
    height: 633,
    paddingLeft: Padding.padding_17,
    paddingTop: 59,
    paddingRight: Padding.padding_11,
    paddingBottom: 22,
    gap: 35,
    width: Width.width_356,
  },
  companyInfoChild: {
    width: 280,
    right: -30,
    bottom: -68,
    height: 232,
    position: "absolute",
  },
  companyInfoItem: {
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray1600,
    zIndex: 1,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    width: Width.width_356,
  },
  rectangleParent: {
    paddingHorizontal: Padding.padding_12_5,
    paddingTop: Padding.padding_13_2,
    paddingBottom: Padding.padding_12_5,
    gap: Gap.gap_8_2,
    zIndex: 2,
    flexDirection: "row",
    width: Width.width_328,
  },
  personIcon: {
    zIndex: 1,
  },
  companyAddress: {
    height: Height.height_24_9,
    paddingTop: Padding.padding_1_9,
    width: Width.width_142_9,
  },
  name: {
    width: Width.width_145_9,
    height: Height.height_23,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    zIndex: 1,
  },
  rectangleGroup: {
    paddingHorizontal: Padding.padding_14,
    paddingTop: Padding.padding_14,
    paddingBottom: 13,
    gap: 9,
    height: Height.height_50_6,
    flexDirection: "row",
    width: Width.width_328,
  },
  frameItem: {
    zIndex: 2,
  },
  companyWrapper: {
    width: Width.width_21_5,
    height: 23,
    paddingTop: Padding.padding_1,
  },
  companyIcon: {
    zIndex: 3,
  },
  company: {
    width: Width.width_81,
    zIndex: 3,
    height: Height.height_23,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  rectangleContainer: {
    paddingBottom: 0,
    gap: Gap.gap_5,
    height: Height.height_50_6,
  },
  emailIcon: {
    width: Width.width_25,
    height: Height.height_50,
    zIndex: 3,
  },
  frameTextinput: {
    height: Height.height_36,
    paddingTop: Padding.padding_13,
    width: Width.width_142_9,
  },
  groupView: {
    paddingTop: Padding.padding_15,
    paddingBottom: 14,
    gap: 9,
    zIndex: 2,
    height: Height.height_50_56,
  },
  companyInfoCompanyAddress: {
    height: Height.height_21,
    width: 151,
    zIndex: 1,
  },
  websiteProfileParent: {
    height: 122,
    paddingBottom: 3,
    gap: Gap.gap_4,
    width: Width.width_328,
  },
  websiteProfile: {
    width: Width.width_190,
    paddingLeft: Padding.padding_12,
    height: Height.height_12,
    flexDirection: "row",
  },
  companyWebsite: {
    width: Width.width_181,
    fontSize: FontSize.fs_12,
    lineHeight: LineHeight.lh_12,
    fontFamily: FontFamily.inderRegular,
    color: Color.colorWhite,
    textAlign: "left",
    height: Height.height_12,
    zIndex: 2,
  },
  companyInfoRectangleParent: {
    height: Height.height_102,
    paddingHorizontal: 79,
    paddingVertical: Padding.padding_14,
    gap: Gap.gap_6,
    zIndex: 2,
    width: Width.width_328,
  },
  uploadYourFile: {
    width: Width.width_173,
    color: Color.colorGray1200,
    textAlign: "left",
    height: Height.height_23,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    zIndex: 1,
  },
  uploadToFtpWrapper: {
    width: Width.width_108,
    paddingLeft: Padding.padding_63,
    height: Height.height_45,
    flexDirection: "row",
  },
  uploadToFtp: {
    width: Width.width_45,
    height: Height.height_45,
    zIndex: 1,
  },
  wrapper: {
    zIndex: 2,
    width: Width.width_328,
  },
  icon: {
    borderRadius: Border.br_50,
    nodeWidth: 328,
    nodeHeight: 51,
  },
});

export default CompanyInfo;
