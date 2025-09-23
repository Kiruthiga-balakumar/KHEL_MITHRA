import React from 'react';
import { Text, TouchableOpacity, TextInput, View, ViewProps } from 'react-native';

type ButtonProps = React.ComponentProps<typeof TouchableOpacity> & {
  title: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export const KMButton: React.FC<ButtonProps> = ({ title, variant = 'primary', className, ...props }: any) => {
  const base = 'w-full py-4 rounded-xl items-center justify-center';
  const variants: Record<string, string> = {
    primary: 'bg-accent',
    secondary: 'bg-card',
    ghost: 'bg-transparent',
  };
  return (
    <TouchableOpacity className={`${base} ${variants[variant]} ${className || ''}`} {...props}>
      <Text className="text-white text-base font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

type InputProps = React.ComponentProps<typeof TextInput> & {
  label?: string;
  errorText?: string;
};

export const KMInput: React.FC<InputProps> = ({ label, errorText, className, ...props }: any) => (
  <View className="w-full mb-4">
    {label ? <Text className="text-white mb-2">{label}</Text> : null}
    <TextInput
      placeholderTextColor="#8A8FA3"
      className={`w-full px-4 py-3 rounded-xl bg-card text-white ${className || ''}`}
      {...props}
    />
    {errorText ? <Text className="text-red-400 mt-1 text-xs">{errorText}</Text> : null}
  </View>
);

export const Card: React.FC<ViewProps> = ({ className, children, ...props }: any) => (
  <View className={`bg-card rounded-xl p-4 ${className || ''}`} {...props}>
    {children}
  </View>
);


