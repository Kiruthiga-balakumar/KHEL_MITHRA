import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import FrameComponent9 from "../components/FrameComponent9";
import Vector3 from "../assets/Vector-3.svg";
import FrameComponent16 from "../components/FrameComponent16";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import RankingCard from "../components/RankingCard";
import PatelRanking from "../components/PatelRanking";
import JaiCard from "../components/JaiCard";
import {
  Height,
  Color,
  Padding,
  Width,
  Gap,
  BoxShadow,
  Border,
} from "../GlobalStyles";

const Leaderboard = () => {
  return (
    <SafeAreaView style={styles.scrollviewFlexBox}>
      <KeyboardAvoidingView
        style={styles.scrollviewFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.scrollviewFlexBox]}
          contentContainerStyle={styles.leaderboardScrollViewContent}
        >
          <FrameComponent9
            performanceResults="Leaderboard"
            performanceResultsWidth={164}
            vector3={<Vector3 width={NaN} height={NaN} />}
            showBack={false}
          />
          <View style={[styles.medalRankingWrapper, styles.wrapperFlexBox]}>
            <View style={styles.medalRanking}>
              <FrameComponent16 />
              <View style={[styles.ratingStarsWrapper, styles.wrapperFlexBox]}>
                <View style={styles.ratingStars} />
              </View>
              <View
                style={[
                  styles.searchContainerWrapper,
                  styles.searchContainerLayout,
                ]}
              >
                <View
                  style={[styles.searchContainer, styles.searchContainerLayout]}
                >
                  <View style={styles.searchContainerChild} />
                  <Image
                    style={styles.searchIcon}
                    contentFit="cover"
                    source={require("../assets/Search.png")}
                  />
                  <TextInput
                    style={styles.searchContainerItem}
                    placeholder="Search Athlete"
                    placeholderTextColor="rgba(0, 0, 0, 0.5)"
                  />
                </View>
              </View>
              <GroupComponent2 />
              <GroupComponent1
                priyaSharma="Priya Sharma"
                ndPlaceMedal={require("../assets/2nd-Place-Medal.png")}
                cm="52 cm"
              />
              <RankingCard />
              <PatelRanking />
              <JaiCard />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  leaderboardScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 1,
    paddingTop: 1,
    paddingBottom: 24,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 27,
    height: 1053,
  },
  scrollviewFlexBox: {
    flex: 1,
    width: "100%",
  },
  wrapperFlexBox: {
    flexDirection: "row",
    zIndex: null,
  },
  searchContainerLayout: {
    height: Height.height_36,
    flexDirection: "row",
  },
  scrollview: {
    backgroundColor: Color.colorGold,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    maxWidth: "100%",
    borderStyle: "solid",
  },
  medalRankingWrapper: {
    width: 389,
    justifyContent: "flex-end",
    paddingRight: Padding.padding_20,
    height: 925,
  },
  medalRanking: {
    width: Width.width_369,
    gap: Gap.gap_20,
    height: 925,
    zIndex: null,
  },
  ratingStarsWrapper: {
    width: 358,
    paddingLeft: Padding.padding_11,
    height: Height.height_3,
  },
  ratingStars: {
    width: Width.width_350,
    boxShadow: BoxShadow.shadow_drop1,
    elevation: 8,
    borderColor: Color.colorDarkslateblue100,
    borderTopWidth: 3,
    height: Height.height_3,
    borderStyle: "solid",
  },
  searchContainerWrapper: {
    width: 362,
    paddingLeft: Padding.padding_6,
    zIndex: null,
  },
  searchContainer: {
    zIndex: 1,
    paddingHorizontal: Padding.padding_18,
    paddingVertical: Padding.padding_3,
    gap: Gap.gap_14,
    width: Width.width_356,
  },
  searchContainerChild: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 4,
    borderRadius: Border.br_18,
    backgroundColor: Color.colorGray600,
    width: Width.width_356,
  },
  searchIcon: {
    width: Width.width_30,
    height: Height.height_30,
    zIndex: 1,
  },
  searchContainerItem: {
    width: Width.width_148,
    height: Height.height_26,
    paddingTop: Padding.padding_4,
  },
});

export default Leaderboard;
