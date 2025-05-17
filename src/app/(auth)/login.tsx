import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { SafeAreaView } from '@/src/components/Themed';
import InputField from '@/src/components/global/InputField';
import { UserLoginFormData } from '@/src/types/auth.types';
import { loginSchema } from '@/src/validation/logInValidation';

export default function LogInScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginFormData>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = (data: UserLoginFormData) => {
    console.log(data);
  };

  return (
    <SafeAreaView className="p-4">
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

      <Button title="Sign In" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}
