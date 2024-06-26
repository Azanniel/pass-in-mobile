/* eslint-disable camelcase */
import './global.css'

import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import { Loading } from '@/components/loading'
import { View } from 'react-native'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View className="flex-1 bg-green-500">
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
    </View>
  )
}
