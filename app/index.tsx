import { View, Text, Pressable, Button, ActivityIndicator } from "react-native"
import React, { useEffect } from "react"
import { useRouter } from "expo-router"
import { useAuth } from "@/context/AuthContext"

const Index = () => {
  const router = useRouter()
  const { user, loading } = useAuth()
  console.log("User Data : ", user)

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push("/home")
      } else {
        router.push("/login")
      }
    }
  }, [user, loading])

  return loading ? (
    <View className="flex-1 w-full justify-center align-items-center">
      <ActivityIndicator size="large" />
    </View>
  ) : null
}

export default Index
