/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  Switch as DefaultSwitch,
  Image as DefaultImage,
} from 'react-native';
// import { Image as DefaultImage } from 'expo-image';

import { SafeAreaView as DefaultSafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

import { useColorScheme } from '@/src/components/useColorScheme';
import { cn } from '../utils/cn';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type ThemedImageprop = {
  className?: string
  alt?: string
  uri: string
}


export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type SwitchProps = ThemeProps & DefaultSwitch['props'];


export function useThemedColor(styleType: 'text' | 'background') {

  const theme = useColorScheme();


  if (styleType === 'background') {
    return (theme === 'light') ? 'bg-light-background' : 'bg-dark-background';
  } else if (styleType === 'text') {
    return (theme === 'light') ? 'text-light-text' : 'text-dark-text';
  }
}

export function Text(props: TextProps) {
  const { className, ...otherProps } = props;
  const textColor = useThemedColor('text');

  return <DefaultText className={cn(
    textColor,
    className
  )} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { className, ...otherProps } = props;
  const backgroundColor = useThemedColor('background');

  return <DefaultView className={cn(
    backgroundColor,
    className
  )} {...otherProps} />;
}

export function Switch(props: SwitchProps) {
  const { className, ...otherProps } = props;
  const backgroundColor = useThemedColor('text');

  return <DefaultSwitch className={cn(
    backgroundColor,
    className
  )} {...otherProps}
  />
}

export default function Image({ className, uri, alt }: ThemedImageprop) {

  const backgroundColor = useThemedColor('background');

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


  return (
    <View className={cn("flex justify-center items-center", className)}>
      <DefaultImage
        source={{ uri }}
        className={`flex-1 h-[100%] w-[100%] ${backgroundColor}`}
        alt={alt}
      />
    </View>
  );
}



export function SafeAreaView(props: SafeAreaViewProps) {
  const { className, ...otherProps } = props;
  const backgroundColor = useThemedColor('background');

  return <DefaultSafeAreaView className={cn(
    backgroundColor, 'min-h-screen',
    className
  )} {...otherProps}
  />
}