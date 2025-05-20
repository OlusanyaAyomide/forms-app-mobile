import React from 'react';
import { useRouter } from 'expo-router';

import { OnBoardingScreen } from '@/src/components/auth/onBoarding';
import { imageLinks } from '@/src/components/assests/imageLinks';

export default function SafeGuard() {
  const router = useRouter();

  return (
    <OnBoardingScreen
      imageUri={imageLinks.onBoardingScreenLogIn}
      headline="Your Quizzes, Safely Secured"
      subheadline="We keep your content protected. Log in to create, share, and manage quizzes with confidence."
      currentPage={2}
      totalPages={2}
      ctaText="Get Started"
      onContinue={() => router.push('/signup')}
      showSkip={false}
    />
  );
}
