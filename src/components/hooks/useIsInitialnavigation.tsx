// // import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect, useState } from 'react';
// import { router } from 'expo-router';

// function useInitialNavigation() {
//   const [isReady, setReady] = useState(false);

//   useEffect(() => {
//     (async () => {
//       // const hasSeenOnboarding = await AsyncStorage.getItem('hasSeenOnboarding');
//       // const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');

//       const hasSeenOnboarding = false


//       const isLoggedIn = false

//       if (!hasSeenOnboarding) {

//         console.log("in here")
//         router.replace('/onboarding');
//       } else if (!isLoggedIn) {
//         router.replace('/login');
//       } else {
//         router.replace('/(tabs)');
//       }

//       setReady(true);
//     })();
//   }, []);

//   return isReady;
// }

// export default useInitialNavigation
