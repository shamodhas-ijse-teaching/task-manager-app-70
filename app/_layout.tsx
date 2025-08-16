import { View, Text } from "react-native"
import React from "react"
import { Slot, Stack } from "expo-router"
import "./../global.css"
import { AuthProvider } from "@/context/AuthContext"

const RootLayout = () => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  )
}

export default RootLayout
