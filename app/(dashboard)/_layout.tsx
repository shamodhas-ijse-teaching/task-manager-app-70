import { View, Text, SafeAreaView, ActivityIndicator } from "react-native"
import React, { useEffect } from "react"
import { Slot, Tabs, useRouter } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import { useAuth } from "@/context/AuthContext"

const DashboardLayout = () => {
  const { user, loading } = useAuth()
  const router = useRouter()
  console.log("User Data :", user)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading])

  if (loading) {
    return (
      <View className="flex-1 w-full justify-center align-items-center">
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#2ecc71",
          tabBarInactiveTintColor: "#2c3e50",
          tabBarStyle: {
            backgroundColor: "#bdc3c7"
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: (data) => (
              <MaterialIcons
                name="home-filled"
                size={data.size}
                color={data.color}
              />
            )
          }}
        />
        <Tabs.Screen
          name="tasks"
          // name="tasks/index"
          options={{
            title: "Task",
            tabBarIcon: (data) => (
              <MaterialIcons
                name="check-circle"
                size={data.size}
                color={data.color}
              />
            )
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: (data) => (
              <MaterialIcons
                name="person"
                size={data.size}
                color={data.color}
              />
            )
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            title: "Setting",
            tabBarIcon: (data) => (
              <MaterialIcons
                name="settings"
                size={data.size}
                color={data.color}
              />
            )
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}

export default DashboardLayout
