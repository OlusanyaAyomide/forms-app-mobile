import React, { useState } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, useColorScheme } from 'react-native';
import { Controller, FieldValues, Path, Control } from 'react-hook-form';
import { FontAwesome } from '@expo/vector-icons';

import { View, Text } from '@/src/components/Themed';
import { cn } from '@/src/utils/cn';

type InputFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  labelText?: string;
  error?: string;
  containerClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
  type?: 'text' | 'password';
  showPasswordToggle?: boolean;
  showPlaceholder?: boolean;
};

export default function InputField<T extends FieldValues>({
  control,
  name,
  labelText,
  error,
  containerClassName,
  inputClassName,
  disabled = false,
  type = 'text',
  showPasswordToggle = false,
  showPlaceholder = false,
}: InputFieldProps<T>) {
  const [secure, setSecure] = useState(type === 'password');

  const theme = useColorScheme()
  return (
    <View className={cn('mb-8 w-full', containerClassName)}>
      {labelText && !showPlaceholder && (
        <Text className="mb-1 text-base font-medium">{labelText}</Text>
      )}

      <View className="relative">
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={showPlaceholder ? labelText : ''}
              secureTextEntry={secure}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              editable={!disabled}
              autoCapitalize="none"
              className={cn(
                'h-12 px-4 py-2 border rounded-xl text-base',
                theme === "light" ? "bg-[#F0F5FB]" : "bg-[#232425] text-dark-text",
                error ? 'border-red-500' : 'border-gray-300',
                disabled && 'opacity-50',
                inputClassName
              )}
            />
          )}
        />

        {showPasswordToggle && (
          <TouchableOpacity
            onPress={() => setSecure(!secure)}
            className="absolute right-3 top-3"
          >
            <FontAwesome
              name={secure ? 'eye-slash' : 'eye'}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <Text className="text-red-500 mt-1 text-sm">{error}</Text>
      )}
    </View>
  );
}
