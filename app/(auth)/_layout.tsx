import { View, Text } from "react-native"
import React from "react"
import { Stack } from "expo-router"

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right"
      }}
    >
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="register" options={{ title: "Login" }} />
    </Stack>
  )
}

export default AuthLayout
