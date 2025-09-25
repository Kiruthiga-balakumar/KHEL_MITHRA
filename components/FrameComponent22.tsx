import * as React from "react";
import { StyleSheet, View } from "react-native";
import FrameComponent21 from "./FrameComponent21";
import { Height, Padding } from "../GlobalStyles";

const FrameComponent22 = () => {
  return (
    <View style={styles.sponsorshipInner}>
      <FrameComponent21
        frameViewPaddingLeft="unset"
        frameViewPaddingRight="unset"
        frameViewPaddingHorizontal="unset"
        frameViewWidth={185}
        reebok={require("../assets/Mizuno.png")}
        frameViewWidth1={110}
        rEEBOK="MIZUNO"
        rEEBOKWidth={113}
        reqiurementConsistencyStreak="Reqiurement : Top 100 Runners in board"
        reqiurementConsistencyWidth={301}
        reqiurementConsistencyHeight="unset"
        benefitsFreeGymApparelFitne="Benefits : Running shoes + Nutrition  supplements"
        benefitsFreeWidth={275}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sponsorshipInner: {
    zIndex: null,
    width: 359,
    height: Height.height_141,
    flexDirection: "row",
    paddingLeft: Padding.padding_3,
  },
});

export default FrameComponent22;
