import React from 'react';
import { useRouter } from 'expo-router';

import { OnBoardingScreen } from '@/src/components/auth/onBoarding';
import { imageLinks } from '@/src/components/assests/imageLinks';

export default function OnBoarding() {
  const router = useRouter();

  return (
    <OnBoardingScreen
      imageUri={imageLinks.onBoardingScreen1}
      headline="Create Quizzes Effortlessly"
      subheadline="Design fun, interactive quizzes in minutes. Whether for learning or fun, your ideas come to life with ease."
      currentPage={1}
      totalPages={2}
      ctaText="Continue"
      onContinue={() => router.push('/safe-guard')}
      showSkip={true}
      onSkip={() => router.push('/login')}
    />
  );
}
