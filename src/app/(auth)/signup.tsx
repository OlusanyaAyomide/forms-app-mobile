import React from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';

import { Text, View } from '@/src/components/Themed';
import InputField from '@/src/components/global/InputField';
import AuthLayout from '@/src/components/auth/AuthLayout';
import { imageLinks } from '@/src/components/assests/imageLinks';
import { signUpSchema } from '@/src/validation/logInValidation';
import { UserRegistrationFormData } from '@/src/types/auth.types';

export default function SignUpScreen() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistrationFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data: UserRegistrationFormData) => {
    console.log(data);
  };

  return (
    <AuthLayout
      imageSource={imageLinks.authTopImages} // Using existing image
      title="Sign Up"
      subtitle="Provide us with the details below to set up your account"
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

      <InputField
        name="password_confirmation"
        labelText="Confirm Password"
        control={control}
        error={errors.password_confirmation?.message}
        type="password"
        showPasswordToggle
        showPlaceholder
      />

      <TouchableOpacity
        className="bg-primary py-4 rounded-xl items-center mt-4"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white font-bold">Sign Up</Text>
      </TouchableOpacity>

      <View className="mt-6 items-center">
        <Text className="text-gray-500">
          Already have an account?{' '}
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text className="text-primary font-bold">Log In</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </AuthLayout>
  );
}
