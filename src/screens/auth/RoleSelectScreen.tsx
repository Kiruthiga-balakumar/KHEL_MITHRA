import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/stacks/AuthStack';
import { KMButton, Card } from '../../components/UI';

type Props = NativeStackScreenProps<AuthStackParamList, 'RoleSelect'>;

const RoleSelectScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="flex-1 bg-primary px-6 py-10">
      <Text className="text-white text-2xl font-bold mb-6">Choose your role</Text>
      <Card className="mb-4">
        <Text className="text-white text-lg mb-2">Athlete</Text>
        <Text className="text-muted mb-4">Track progress, register for events, and find coaches.</Text>
        <KMButton title="Continue as Athlete" onPress={() => navigation.navigate('Register', { role: 'athlete' })} />
      </Card>
      <Card className="mb-4">
        <Text className="text-white text-lg mb-2">Coach</Text>
        <Text className="text-muted mb-4">Manage athletes, sessions, and training plans.</Text>
        <KMButton title="Continue as Coach" onPress={() => navigation.navigate('Register', { role: 'coach' })} />
      </Card>
      <Card>
        <Text className="text-white text-lg mb-2">Government Official</Text>
        <Text className="text-muted mb-4">Verify athletes, manage events, and publish updates.</Text>
        <KMButton title="Continue as Official" onPress={() => navigation.navigate('Register', { role: 'official' })} />
      </Card>
    </View>
  );
};

export default RoleSelectScreen;


