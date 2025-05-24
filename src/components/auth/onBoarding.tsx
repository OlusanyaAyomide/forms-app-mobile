import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { Text, View, SafeAreaView } from '@/src/components/Themed';
import ThemedImage from '@/src/components/Themed';
import { cn } from '@/src/utils/cn';

export interface OnBoardingProps {
  imageUri: string;
  headline: string;
  subheadline: string;
  currentPage: number;
  totalPages: number;
  ctaText?: string;
  ctaLink?: string | any;
  showSkip?: boolean;
  skipLink?: string | any;
  onContinue?: () => void;
  onSkip?: () => void;
}

export function OnBoardingScreen({
  imageUri,
  headline,
  subheadline,
  currentPage,
  totalPages,
  ctaText,
  ctaLink,
  showSkip,
  skipLink,
  onContinue,
  onSkip,
}: OnBoardingProps) {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1">
      {/* Image Section */}
      <ThemedImage
        uri={imageUri}
        className="w-full h-[50vh]"
        alt="onboarding-image"
      />

      {/* Content Section */}
      <View className="flex-1 px-6 pt-8">
        {/* Dot Indicators */}
        <View className="flex-row justify-center items-center mb-8 bg-transparent">
          {Array.from({ length: totalPages }).map((_, index) => (
            <View
              key={index}
              className={cn(
                "h-2 w-2 rounded-full mx-1",
                index === currentPage - 1
                  ? "bg-primary w-6" // Active dot
                  : "bg-secondary" // Inactive dot
              )}
            />
          ))}
        </View>

        {/* Headline */}
        <Text className="text-3xl font-bold text-center mb-4">
          {headline}
        </Text>

        {/* Subheadline */}
        <Text className="text-base text-center mb-8 opacity-80">
          {subheadline}
        </Text>

        {/* CTA Button */}
        {ctaText && (
          <TouchableOpacity
            className="bg-primary py-4 px-6 rounded-full mb-4"
            onPress={() => {
              if (onContinue) {
                onContinue();
              } else if (ctaLink) {
                router.push(ctaLink);
              }
            }}
          >
            <Text className="text-white text-center font-bold">
              {ctaText}
            </Text>
          </TouchableOpacity>
        )}

        {/* Skip Button */}
        {showSkip && (
          <TouchableOpacity
            className="py-4 px-6 border rounded-full"
            onPress={() => {
              if (onSkip) {
                onSkip();
              } else if (skipLink) {
                router.push(skipLink);
              }
            }}
          >
            <Text className="text-center text-primary">
              Skip
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
