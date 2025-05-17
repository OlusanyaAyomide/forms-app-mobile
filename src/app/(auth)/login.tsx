import React from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

import { View, Text } from '@/src/components/Themed';
import InputField from '@/src/components/global/InputField';
import { UserLoginFormData } from '@/src/types/auth.types';
import { loginSchema } from '@/src/validation/logInValidation';
import AuthLayout from '@/src/components/auth/AuthLayout';
import { imageLinks } from '@/src/components/assests/imageLinks';

export default function LogInScreen() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: UserLoginFormData) => {
    console.log(data);
  };

  return (
    <AuthLayout
      imageSource={imageLinks.authTopImages}
      title="Log In"
      subtitle="Welcome back, Enter the details below to continue"
    >
      <InputField
        name="email"
        labelText="Email"
        control={control}
        error={errors.email?.message}
        showPlaceholder
      />

      <InputField
        name="password"
        labelText="Password"
        control={control}
        error={errors.password?.message}
        type="password"
        showPasswordToggle
        showPlaceholder
      />

      <TouchableOpacity
        className="bg-primary py-4 rounded-xl items-center"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white font-bold">Log In</Text>
      </TouchableOpacity>

      <View className="flex-row justify-between items-center mt-4">
        <Link href="/forgot-password" asChild>
          <TouchableOpacity>
            <Text className="text-primary">Forgot Password?</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Social Login - Placeholders */}
      <View className="mt-8">
        <Text className="text-center text-gray-500">Or</Text>
        <View className="flex-row justify-center mt-4">
          <TouchableOpacity className="mx-2">
            <FontAwesome name="facebook-square" size={30} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity className="mx-2">
            <FontAwesome name="twitter-square" size={30} color="#1da1f2" />
          </TouchableOpacity>
          <TouchableOpacity className="mx-2">
            <FontAwesome name="apple" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-8 text-center">
        <Text className="text-gray-500 text-center">
          Don't have an account?{' '}
          <Link href="/signup" asChild>
            <TouchableOpacity>
              <Text className="text-primary font-bold">Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </Text>
      </View>
    </AuthLayout>
  );
}
