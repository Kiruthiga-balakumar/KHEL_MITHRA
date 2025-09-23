import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KMButton, KMInput } from '../../components/UI';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/stacks/AuthStack';
import { loginWithEmail } from '../../services/auth';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-primary px-6 py-10">
      <Text className="text-white text-2xl font-bold mb-6">Sign in</Text>
      <KMInput label="Email" placeholder="you@example.com" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <KMInput label="Password" placeholder="••••••••" secureTextEntry value={password} onChangeText={setPassword} />
      <KMButton title="Sign in" onPress={async () => { await loginWithEmail(email, password); }} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text className="text-muted text-center mt-4">No account? <Text className="text-accent">Create one</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;


