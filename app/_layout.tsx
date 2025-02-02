import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { UserDetailContext } from './../context/UserDetailContext'
import { useState } from "react";
export default function RootLayout() {

  useFonts({
    'jose_regular': require('./../assets/fonts/JosefinSans-Regular.ttf'),
    'jose_medium': require('./../assets/fonts/JosefinSans-Medium.ttf'),
    'jose_bold': require('./../assets/fonts/JosefinSans-Bold.ttf'),
  })

  const [userDetail, setUserDetail] = useState();

  return (
    <UserDetailContext.Provider  value={{userDetail, setUserDetail}} >
      <Stack screenOptions={
        { headerShown: false }
      }
      >

      </Stack>
    </UserDetailContext.Provider>
  )
}
