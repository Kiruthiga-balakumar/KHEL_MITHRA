import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/stacks/AuthStack';
import { KMButton, KMInput } from '../../components/UI';
import { useAuth } from '../../context/AuthContext';
import { saveUserProfile } from '../../services/firestore';
import { Timestamp } from 'firebase/firestore'; // ✅ ensure Firestore timestamp

type Props = NativeStackScreenProps<AuthStackParamList, 'AadhaarVerify'>;

const AadhaarVerifyScreen: React.FC<Props> = ({ route, navigation }) => {
  const { role } = route.params;
  const { user, profile } = useAuth();
  const [otp, setOtp] = useState('');

  const handleVerify = async () => {
    if (user) {
      await saveUserProfile({
        uid: user.uid,
        name: profile?.name || user.displayName || '',
        email: profile?.email || user.email || '',
        phone: profile?.phone || '',
        role: profile?.role || role,
        aadhaar: profile?.aadhaar || '',
        aadhaarVerified: true,
        createdAt: profile?.createdAt || Timestamp.now(), // ✅ Firestore safe
      });
      // Switch to Main tabs
      navigation.getParent()?.navigate('Main' as never); // ✅ safer than ts-ignore
    }
  };

  return (
    <View className="flex-1 bg-primary px-6 py-10">
      <Text className="text-white text-2xl font-bold mb-2">Verify Aadhaar</Text>
      <Text className="text-muted mb-6">
        We have sent an OTP to your registered phone.
      </Text>

      <KMInput
        label="OTP"
        placeholder="123456"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />

      <KMButton title="Verify & Continue" onPress={handleVerify} />
    </View>
  );
};

export default AadhaarVerifyScreen;
