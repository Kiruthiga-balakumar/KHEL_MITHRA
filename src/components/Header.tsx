import React from 'react';
import { View, Text } from 'react-native';

type HeaderProps = {
  title: string;
  subtitle?: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <View className="mb-4">
      <Text className="text-white text-2xl font-bold">{title}</Text>
      {subtitle ? <Text className="text-muted mt-1">{subtitle}</Text> : null}
    </View>
  );
};

export default Header;


