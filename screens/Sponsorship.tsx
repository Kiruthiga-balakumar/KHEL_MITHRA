import * as React from "react";
import { ScrollView, Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import DataContainer from "../assets/Data-Container.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent20 from "../components/FrameComponent20";
import FrameComponent21 from "../components/FrameComponent21";
import FrameComponent22 from "../components/FrameComponent22";
import {
  Color,
  FontFamily,
  Border,
  Height,
  BoxShadow,
  Width,
  Gap,
  Padding,
  FontSize,
} from "../GlobalStyles";

const Sponsorship = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.sponsorship}
      contentContainerStyle={styles.sponsorshipScrollViewContent}
    >
      <View style={[styles.sponsorshipInner, styles.sponsorshipSpaceBlock]}>
        <View style={styles.sponsorshipParent}>
          <Text style={[styles.sponsorship2, styles.sponsorshipTypo]}>
            Sponsorship
          </Text>
          <View style={styles.vectorParent}>
            <DataContainer style={styles.frameChild} width={NaN} height={221} />
            <Pressable
              style={[styles.back, styles.backPosition]}
              onPress={() => navigation.navigate("FrameComponent6")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/Back.png")}
              />
            </Pressable>
            <Image
              style={[styles.informationIcon, styles.backPosition]}
              contentFit="cover"
              source={require("../assets/Information.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.sponsorshipChild, styles.sponsorshipSpaceBlock]}>
        <View style={styles.dAvatars13Parent}>
          <Image
            style={styles.dAvatars13}
            contentFit="cover"
            source={require("../assets/3D-Avatars-131.png")}
          />
          <View style={styles.frameWrapper}>
            <View style={[styles.rectangleParent, styles.frameItemLayout]}>
              <View style={[styles.frameItem, styles.frameItemLayout]} />
              <Pressable
                style={styles.status}
                onPress={() => navigation.navigate("AsicsContainer")}
              >
                <Text
                  style={[styles.sponsorshipStatus, styles.sponsorshipTypo]}
                >
                  Status
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <FrameComponent20
        nike={require("../assets/Nike.png")}
        nikeIndia="Nike India"
        reqiurementTopInLeaderboard="Reqiurement : Top 20 in leaderboard"
        benefitsFreeShoesSportsKits="Benefits : Free shoes + sports kits"
      />
      <FrameComponent20
        nike={require("../assets/Adidas.png")}
        brandOptionSetWidth={145}
        brandOptionSetPaddingRight="unset"
        nikeIndia="Adidas Hub"
        nikeIndiaWidth={148}
        reqiurementTopInLeaderboard="Reqiurement : Gold level athletes"
        reqiurementTopWidth={253}
        benefitsFreeShoesSportsKits="Benefits : Rs.10,000 cash rewards"
        benefitsFreeWidth={258}
        benefitsFreeHeight={17}
      />
      <View style={[styles.rectangleGroup, styles.frameViewSpaceBlock]}>
        <View style={styles.frameInner} />
        <View style={[styles.frameParent, styles.frameLayout]}>
          <View style={styles.tataMotorsWrapper}>
            <Image
              style={styles.tataMotorsIcon}
              contentFit="cover"
              source={require("../assets/Tata-Motors.png")}
            />
          </View>
          <View style={[styles.tataSportsWrapper, styles.wrapperSpaceBlock1]}>
            <Text style={[styles.tataSports, styles.sportsTypo]}>
              TATA sports
            </Text>
          </View>
          <View style={styles.frameContainer}>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View style={[styles.rectangleView, styles.rectangleLayout]} />
              <Text style={[styles.apply, styles.sponsorshipTypo]}>Apply</Text>
            </View>
          </View>
        </View>
        <Text
          style={[styles.reqiurementYoung, styles.reqiurementTypo]}
        >{`Reqiurement : Young athletes <20 yrs`}</Text>
        <Text style={[styles.benefitsScholarship, styles.reqiurementTypo]}>
          Benefits : scholarship + training sponsorship
        </Text>
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]}>
        <View style={styles.frameInner} />
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View
            style={[styles.friendsWrapper, styles.rectangleGroupSpaceBlock]}
          >
            <Image
              style={styles.tataMotorsIcon}
              contentFit="cover"
              source={require("../assets/Friends.png")}
            />
          </View>
          <View style={[styles.asicsIndiaWrapper, styles.wrapperSpaceBlock1]}>
            <Text style={[styles.asicsIndia, styles.sportsTypo]}>
              ASICS India
            </Text>
          </View>
          <View style={styles.frameContainer}>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View style={[styles.rectangleView, styles.rectangleLayout]} />
              <Text style={[styles.apply, styles.sponsorshipTypo]}>Apply</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.reqiurementGold, styles.reqiurementTypo]}>
          Reqiurement : Gold in running performance
        </Text>
        <Text style={[styles.benefitsFree, styles.benefitsTypo]}>
          Benefits : Free running shoes + Marathon entry
        </Text>
      </View>
      <View style={[styles.rectangleParent2, styles.frameViewLayout]}>
        <View style={styles.frameInner} />
        <View style={[styles.frameWrapper2, styles.frameLayout]}>
          <View style={[styles.pumaParent, styles.parentLayout]}>
            <Image
              style={styles.tataMotorsIcon}
              contentFit="cover"
              source={require("../assets/Puma.png")}
            />
            <View style={[styles.pumaIndiaWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.tataSports, styles.sportsTypo]}>
                PUMA India
              </Text>
            </View>
            <View style={styles.frameWrapper3}>
              <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
                <View style={[styles.rectangleView, styles.rectangleLayout]} />
                <Text style={[styles.apply, styles.sponsorshipTypo]}>
                  Apply
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.reqiurementTop, styles.reqiurementTypo]}>
          Reqiurement : Top 10 in any sports
        </Text>
        <Text style={[styles.benefitsApparel, styles.benefitsTypo]}>
          Benefits : Apparel Sponsorship + Media  Coverage
        </Text>
      </View>
      <FrameComponent21
        reebok={require("../assets/Reebok.png")}
        rEEBOK="REEBOK"
        reqiurementConsistencyStreak="Reqiurement : Consistency streak (30 Days)"
        benefitsFreeGymApparelFitne="Benefits : Free gym apparel + Fitness  accessories"
      />
      <View style={[styles.rectangleParent2, styles.frameViewLayout]}>
        <View style={styles.frameInner} />
        <View style={[styles.frameWrapper2, styles.frameLayout]}>
          <View style={[styles.underArmourParent, styles.parentLayout]}>
            <Image
              style={styles.tataMotorsIcon}
              contentFit="cover"
              source={require("../assets/Under-Armour.png")}
            />
            <View style={[styles.uaSportsWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.uaSports, styles.sportsTypo]}>
                UA sports
              </Text>
            </View>
            <View style={styles.frameWrapper3}>
              <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
                <View style={[styles.rectangleView, styles.rectangleLayout]} />
                <Text style={[styles.apply, styles.sponsorshipTypo]}>
                  Apply
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.reqiurementPlatinum, styles.reqiurementTypo]}>
          Reqiurement : Platinum level athletes
        </Text>
        <Text style={[styles.benefitsAnnual, styles.benefitsTypo]}>
          Benefits : Annual training kit + Event  sponsorship
        </Text>
      </View>
      <FrameComponent22 />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sponsorshipScrollViewContent: {
    flexDirection: "column",
    paddingLeft: 28,
    paddingTop: 28,
    paddingRight: 25,
    paddingBottom: 22,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 16,
    height: 1430,
  },
  sponsorshipSpaceBlock: {
    paddingLeft: 29,
    zIndex: null,
    flexDirection: "row",
  },
  sponsorshipTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  backPosition: {
    top: 27,
    position: "absolute",
    zIndex: 1,
  },
  frameItemLayout: {
    backgroundColor: Color.colorDarkslateblue100,
    borderRadius: Border.br_6,
    height: Height.height_40,
    elevation: 4,
    boxShadow: BoxShadow.shadow_drop,
    width: Width.width_102,
  },
  frameViewSpaceBlock: {
    gap: Gap.gap_8_5,
    paddingLeft: Padding.padding_17,
  },
  frameLayout: {
    width: Width.width_319,
    height: Height.height_63,
    flexDirection: "row",
  },
  wrapperSpaceBlock1: {
    paddingTop: Padding.padding_18,
    height: Height.height_46,
    zIndex: 1,
  },
  sportsTypo: {
    color: Color.colorBlack,
    zIndex: 1,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.fs_30,
    height: Height.height_28,
  },
  rectangleLayout: {
    backgroundColor: Color.colorBlack,
    height: Height.height_32,
    width: Width.width_85,
    borderRadius: Border.br_6,
    elevation: 4,
    boxShadow: BoxShadow.shadow_drop,
  },
  reqiurementTypo: {
    fontSize: FontSize.fs_18,
    color: Color.colorBlack,
    zIndex: 1,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  frameViewLayout: {
    paddingBottom: Padding.padding_10,
    height: Height.height_141,
    width: Width.width_356,
    zIndex: 1,
  },
  rectangleGroupSpaceBlock: {
    paddingRight: Padding.padding_7,
    zIndex: 1,
  },
  benefitsTypo: {
    textAlign: "right",
    fontSize: FontSize.fs_18,
    color: Color.colorBlack,
    zIndex: 1,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  parentLayout: {
    width: Width.width_316,
    height: Height.height_63,
    zIndex: 1,
    flexDirection: "row",
  },
  wrapperSpaceBlock: {
    paddingTop: Padding.padding_15,
    height: Height.height_43,
  },
  sponsorship: {
    backgroundColor: Color.colorGold,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
  sponsorshipInner: {
    width: 183,
    height: Height.height_28,
  },
  sponsorshipParent: {
    width: Width.width_154,
    zIndex: 1,
    flexDirection: "row",
    height: Height.height_28,
  },
  sponsorship2: {
    width: Width.width_157,
    zIndex: 1,
    fontSize: FontSize.fs_30,
    color: Color.colorWhite,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    height: Height.height_28,
  },
  vectorParent: {
    right: -200,
    bottom: -51,
    height: 107,
    width: Width.width_410,
    position: "absolute",
  },
  frameChild: {
    top: -114,
    height: 221,
    left: 0,
    width: Width.width_410,
    position: "absolute",
  },
  back: {
    left: 6,
    width: Width.width_30,
    height: Height.height_30,
  },
  icon: {
    height: "100%",
    nodeWidth: 30,
    nodeHeight: 30,
    width: "100%",
  },
  informationIcon: {
    left: 364,
    width: Width.width_20,
    height: Height.height_20,
  },
  sponsorshipChild: {
    width: 337,
    height: 124,
    paddingBottom: Padding.padding_22,
  },
  dAvatars13Parent: {
    width: 308,
    gap: 104,
    height: Height.height_102,
    zIndex: 1,
    flexDirection: "row",
  },
  dAvatars13: {
    width: Width.width_102,
    height: Height.height_102,
    zIndex: 1,
  },
  frameWrapper: {
    height: 71,
    paddingTop: 31,
    width: Width.width_102,
  },
  rectangleParent: {
    paddingLeft: Padding.padding_11,
    paddingTop: Padding.padding_6,
    paddingRight: Padding.padding_10,
    paddingBottom: Padding.padding_6,
    zIndex: 1,
    flexDirection: "row",
  },
  frameItem: {
    display: "none",
  },
  status: {
    zIndex: 2,
  },
  sponsorshipStatus: {
    width: Width.width_84,
    fontSize: FontSize.fs_30,
    color: Color.colorWhite,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    height: Height.height_28,
  },
  rectangleGroup: {
    height: 126,
    paddingBottom: Padding.padding_12,
    paddingRight: Padding.padding_7,
    zIndex: 1,
    width: Width.width_356,
  },
  frameInner: {
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray400,
    width: Width.width_356,
    elevation: 4,
    boxShadow: BoxShadow.shadow_drop,
    left: 0,
    position: "absolute",
  },
  frameParent: {
    gap: Gap.gap_9,
    height: Height.height_63,
  },
  tataMotorsWrapper: {
    width: 69,
    paddingRight: Padding.padding_6,
    height: Height.height_63,
    zIndex: 1,
  },
  tataMotorsIcon: {
    width: Width.width_63,
    height: Height.height_63,
    zIndex: 1,
  },
  tataSportsWrapper: {
    width: Width.width_147,
  },
  tataSports: {
    width: 150,
  },
  frameContainer: {
    height: Height.height_48,
    paddingTop: Padding.padding_16,
    width: Width.width_85,
    zIndex: 1,
  },
  rectangleContainer: {
    paddingHorizontal: Padding.padding_13,
    paddingVertical: Padding.padding_5,
    zIndex: 1,
    flexDirection: "row",
  },
  rectangleView: {
    display: "none",
  },
  apply: {
    height: Height.height_22,
    width: Width.width_62,
    fontSize: FontSize.fs_24,
    zIndex: 2,
  },
  reqiurementYoung: {
    width: 287,
    height: Height.height_17,
    fontSize: FontSize.fs_18,
  },
  benefitsScholarship: {
    width: Width.width_335,
    height: Height.height_17,
    fontSize: FontSize.fs_18,
  },
  frameView: {
    paddingRight: Padding.padding_11,
    gap: Gap.gap_8_5,
    paddingLeft: Padding.padding_17,
  },
  frameGroup: {
    gap: Gap.gap_8,
    height: Height.height_63,
  },
  friendsWrapper: {
    width: 70,
    height: Height.height_63,
  },
  asicsIndiaWrapper: {
    width: Width.width_148,
  },
  asicsIndia: {
    width: 151,
  },
  reqiurementGold: {
    width: Width.width_331,
    height: Height.height_17,
    fontSize: FontSize.fs_18,
  },
  benefitsFree: {
    width: 309,
  },
  rectangleParent2: {
    paddingHorizontal: Padding.padding_17,
    paddingTop: Padding.padding_3,
    gap: Gap.gap_7,
  },
  frameWrapper2: {
    paddingLeft: Padding.padding_3,
    height: Height.height_63,
  },
  pumaParent: {
    gap: 10,
  },
  pumaIndiaWrapper: {
    width: Width.width_147,
  },
  frameWrapper3: {
    height: Height.height_45,
    paddingTop: Padding.padding_13,
    width: Width.width_85,
  },
  reqiurementTop: {
    width: 259,
  },
  benefitsApparel: {
    width: Width.width_301,
  },
  underArmourParent: {
    gap: Gap.gap_12,
  },
  uaSportsWrapper: {
    width: Width.width_144,
    paddingRight: Padding.padding_22,
  },
  uaSports: {
    width: 125,
  },
  reqiurementPlatinum: {
    width: Width.width_288,
    height: Height.height_17,
    fontSize: FontSize.fs_18,
  },
  benefitsAnnual: {
    width: 282,
  },
});

export default Sponsorship;
