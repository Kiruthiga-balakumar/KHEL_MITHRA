import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { KMButton, KMInput } from '../../components/UI';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/stacks/AuthStack';
import { registerWithEmail } from '../../services/auth';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

const RegisterScreen: React.FC<Props> = ({ navigation, route }) => {
  const { role } = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-primary px-6 py-10">
      <Text className="text-white text-2xl font-bold mb-6">Create account</Text>
      <KMInput label="Full name" placeholder="Your name" value={name} onChangeText={setName} />
      <KMInput label="Email" placeholder="you@example.com" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <KMInput label="Phone" placeholder="0000000000" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
      <KMInput label="Aadhaar" placeholder="XXXX-XXXX-XXXX" keyboardType="number-pad" value={aadhaar} onChangeText={setAadhaar} />
      <KMInput label="Password" placeholder="••••••••" secureTextEntry value={password} onChangeText={setPassword} />
      <KMButton
        title="Continue"
        onPress={async () => {
          await registerWithEmail({ name, email, phone, aadhaar, password, role });
          navigation.navigate('AadhaarVerify', { role });
        }}
      />
    </View>
  );
};

export default RegisterScreen;


