import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

useFonts({
    'jose_regular': require('./../assets/fonts/JosefinSans-Regular.ttf'),
    'jose_medium': require('./../assets/fonts/JosefinSans-Medium.ttf'),
    'jose_bold': require('./../assets/fonts/JosefinSans-Bold.ttf'),
})

  return (
    <Stack screenOptions={
       {headerShown: false }
    }
  >

  </Stack>
  )
}
