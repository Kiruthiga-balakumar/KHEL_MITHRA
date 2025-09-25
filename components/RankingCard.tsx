import * as React from "react";
import { StyleSheet, View } from "react-native";
import GroupComponent1 from "./GroupComponent1";
import { Width, Padding } from "../GlobalStyles";

const RankingCard = () => {
  return (
    <View style={styles.rankingCard}>
      <GroupComponent1
        groupViewPaddingLeft={67}
        frameViewWidth={141}
        priyaSharma="Rahul Singh"
        priyaSharmaWidth={144}
        ndPlaceMedal={require("../assets/3rd-Place-Medal.png")}
        frameViewWidth1={62}
        cm="50 cm"
        cmWidth={65}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rankingCard: {
    zIndex: null,
    width: Width.width_369,
    height: 74,
    flexDirection: "row",
    paddingLeft: Padding.padding_1,
    paddingBottom: Padding.padding_4,
  },
});

export default RankingCard;
