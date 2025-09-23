import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AthleteDashboard from '../../screens/dashboards/AthleteDashboard';
import CoachDashboard from '../../screens/dashboards/CoachDashboard';
import OfficialDashboard from '../../screens/dashboards/OfficialDashboard';
import EventsListScreen from '../../screens/events/EventsListScreen';
import SettingsScreen from '../../screens/misc/SettingsScreen';
import AdminPanelScreen from '../../screens/misc/AdminPanelScreen';
import { Text } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export type MainTabParamList = {
  Dashboard: undefined;
  Events: undefined;
  Admin?: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  const { profile } = useAuth();
  const role: 'athlete' | 'coach' | 'official' = profile?.role || 'athlete';

  const DashboardComponent =
    role === 'coach' ? CoachDashboard : role === 'official' ? OfficialDashboard : AthleteDashboard;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#0B1026', borderTopColor: '#141A36' },
        tabBarActiveTintColor: '#FF6F3D',
        tabBarInactiveTintColor: '#8A8FA3',
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardComponent} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Events" component={EventsListScreen} options={{ tabBarLabel: 'Events' }} />
      {role === 'official' ? (
        <Tab.Screen name="Admin" component={AdminPanelScreen} options={{ tabBarLabel: 'Admin' }} />
      ) : null}
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: 'Settings' }} />
    </Tab.Navigator>
  );
};

export { MainTabs };


