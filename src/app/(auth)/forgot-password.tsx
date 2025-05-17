import React from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';

import { Text } from '@/src/components/Themed';
import InputField from '@/src/components/global/InputField';
import AuthLayout from '@/src/components/auth/AuthLayout';
import { imageLinks } from '@/src/components/assests/imageLinks';
import { forgotPasswordSchema } from '@/src/validation/logInValidation';
import { ForgotPasswordFormData } from '@/src/types/auth.types';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log(data);
    // Implement forgot password logic here
  };

  return (
    <AuthLayout
      imageSource={imageLinks.authTopImages} // Using existing image
      title="Forgot Password?"
      subtitle="Enter your email address to reset your password"
    >
      <InputField
        name="email"
        labelText="Email"
        control={control}
        error={errors.email?.message}
        showPlaceholder
      />

      <TouchableOpacity
        className="bg-primary py-4 rounded-xl items-center mt-4"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white font-bold">Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="mt-6 items-center"
        onPress={() => router.back()}
      >
        <Text className="text-primary">Back to Log In</Text>
      </TouchableOpacity>
    </AuthLayout>
  );
}
