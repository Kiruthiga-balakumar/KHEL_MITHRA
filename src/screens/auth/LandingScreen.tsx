import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/stacks/AuthStack';
import { KMButton } from '../../components/UI';

type Props = NativeStackScreenProps<AuthStackParamList, 'Landing'>;

const LandingScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="flex-1 bg-primary items-center justify-between px-6 py-12">
      <View className="items-center mt-12">
        <Text className="text-white text-4xl font-bold mt-6 text-center">Khel Mithra</Text>
        <Text className="text-muted text-center mt-2">Your companion for sports, training, and events</Text>
      </View>
      <View className="w-full">
        <KMButton title="Get Started" onPress={() => navigation.navigate('RoleSelect')} />
        <Text className="text-muted text-center mt-4">
          Already have an account? <Text className="text-accent" onPress={() => navigation.navigate('Login')}>Sign in</Text>
        </Text>
      </View>
    </View>
  );
};

export default LandingScreen;


