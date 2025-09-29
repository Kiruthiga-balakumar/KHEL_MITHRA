const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Design from "./screens/Design";
import AthleteDetails from "./screens/AthleteDetails";
import AthletePasswordSet from "./screens/AthletePasswordSet";
import DetailsSponsor from "./screens/DetailsSponsor";
import HomePage from "./screens/HomePage";
import RecordTest from "./screens/RecordTest";
import PerformanceResult from "./screens/PerformanceResult";
import Website1 from "./screens/Website1";
import Leaderboard from "./screens/Leaderboard";
import EgRecordTest from "./screens/EgRecordTest";
import OnBoarding from "./screens/OnBoarding";
import IPhone from "./screens/IPhone";
import Status1 from "./screens/Status1";
import SAIHomePage from "./components/SAIHomePage";
import AthleteLogin from "./screens/AthleteLogin";
import AtheleteSignUp from "./screens/AtheleteSignUp";
import SponsorHomepage from "./components/SponsorHomepage";
import SAILogin from "./screens/SAILogin";
import AthletePasswordSet1 from "./screens/AthletePasswordSet1";
import SponsorLogin from "./screens/SponsorLogin";
import Events from "./screens/Events";
import AiNutritionChart from "./screens/AiNutritionChart";
import AiNutrionist from "./screens/AiNutrionist";
import BadgesRewards from "./screens/BadgesRewards";
import Sponsorship from "./screens/Sponsorship";
import Root from "./components/Root";
import Website from "./components/Website";
import KHELMITRA from "./components/KHELMITRA";
import FrameComponent from "./components/FrameComponent";
import AsicsContainer from "./components/AsicsContainer";
import FrameComponent1 from "./components/FrameComponent1";
import FrameComponent2 from "./components/FrameComponent2";
import ActionButton from "./components/ActionButton";
import Container from "./components/Container";
import LoginForm from "./components/LoginForm";
import UserDetails from "./components/UserDetails";
import FrameComponent5 from "./components/FrameComponent5";
import FrameComponent13 from "./components/FrameComponent13";
import FrameComponent14 from "./components/FrameComponent14";
import GroupComponent from "./components/GroupComponent";
import FrameComponent15 from "./components/FrameComponent15";
import FrameComponent17 from "./components/FrameComponent17";
import FrameComponent18 from "./components/FrameComponent18";
import FrameComponent19 from "./components/FrameComponent19";
import FrameComponent20 from "./components/FrameComponent20";
import FrameComponent21 from "./components/FrameComponent21";
import FrameComponent22 from "./components/FrameComponent22";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "": require("./assets/fonts/.otf"),
    "Inder-Regular": require("./assets/fonts/Inder-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Joan-Regular": require("./assets/fonts/Joan-Regular.ttf"),
    "LeagueSpartan-Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
    "LeagueSpartan-Medium": require("./assets/fonts/LeagueSpartan-Medium.ttf"),
    "LexendPeta-Regular": require("./assets/fonts/LexendPeta-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Design"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Design"
              component={Design}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AthleteDetails"
              component={AthleteDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AthletePasswordSet"
              component={AthletePasswordSet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CompanyInfo"
              component={DetailsSponsor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent6"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent7"
              component={RecordTest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AvatarContainer"
              component={PerformanceResult}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Website1"
              component={Website1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent16"
              component={Leaderboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AnalysisLayout"
              component={EgRecordTest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KHELMITRA"
              component={OnBoarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent"
              component={IPhone}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AsicsContainer"
              component={Status1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SAIHomePage"
              component={SAIHomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActionButton"
              component={AthleteLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AtheleteSignUp"
              component={AtheleteSignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SponsorHomepage"
              component={SponsorHomepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent5"
              component={SAILogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AthletePasswordSet1"
              component={AthletePasswordSet1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SponsorLogin"
              component={SponsorLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Events"
              component={Events}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AiNutritionChart"
              component={AiNutritionChart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AiNutrionist"
              component={AiNutrionist}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BadgesRewards"
              component={BadgesRewards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent20"
              component={Sponsorship}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Root"
              component={Root}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Website"
              component={Website}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KHELMITRA"
              component={KHELMITRA}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent"
              component={FrameComponent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AsicsContainer"
              component={AsicsContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AsicsContainer"
              component={FrameComponent1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AsicsContainer"
              component={FrameComponent2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActionButton"
              component={ActionButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActionButton"
              component={Container}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActionButton"
              component={LoginForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AtheleteSignUp"
              component={UserDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent5"
              component={FrameComponent5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Events"
              component={FrameComponent13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Events"
              component={FrameComponent14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Events"
              component={GroupComponent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AiNutrionist"
              component={FrameComponent15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BadgesRewards"
              component={FrameComponent17}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BadgesRewards"
              component={FrameComponent18}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BadgesRewards"
              component={FrameComponent19}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent20"
              component={FrameComponent20}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent20"
              component={FrameComponent21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameComponent20"
              component={FrameComponent22}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
