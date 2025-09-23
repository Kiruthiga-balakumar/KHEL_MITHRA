import React from 'react';
import { View, Text, Switch } from 'react-native';
import { KMButton } from '../../components/UI';
import { useAuth } from '../../context/AuthContext';
import { requestNotificationPermissions, sendLocalTestNotification } from '../../services/notifications';

const SettingsScreen: React.FC = () => {
  const [enabled, setEnabled] = React.useState(true as any);
  const { logout } = useAuth();
  return (
    <View className="flex-1 bg-primary px-6 py-10">
      <Text className="text-white text-2xl font-bold mb-4">Settings</Text>
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-white">Push Notifications</Text>
        <Switch value={enabled} onValueChange={async (v) => {
          setEnabled(v);
          if (v) await requestNotificationPermissions();
        }} />
      </View>
      <KMButton title="Send test notification" variant="secondary" onPress={() => sendLocalTestNotification('Khel Mithra', 'This is a test notification')} />
      <View className="h-4" />
      <KMButton title="Logout" variant="secondary" onPress={logout} />
    </View>
  );
};

export default SettingsScreen;


