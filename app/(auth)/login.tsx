import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from "react-native"
import React, { useState } from "react"
import { useRouter } from "expo-router"
import { login, register } from "@/services/authService"

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLogin = async () => {
    // if(email)
    // password
    if (isLoading) return

    setIsLoading(true)
    await login(email, password)
      .then((res) => {
        router.push("/home")
      })
      .catch((err) => {
        Alert.alert("Login failed", "Somthing went wrong")
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <View className="flex-1 w-full justify-center align-items-center p-4">
      <Text className="text-4xl text-center mb-2">Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="bg-surface border border-gray-300 rounded px-4 py-3 mb-4 text-gray-900"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="bg-surface border border-gray-300 rounded px-4 py-3 mb-4 text-gray-900"
      />
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-600 p-4 rounded mt-2"
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" size="large" />
        ) : (
          <Text className="text-center text-2xl">Login</Text>
        )}
      </TouchableOpacity>
      <Pressable className="px-6 py-3" onPress={() => router.push("/register")}>
        <Text className="text-xl text-center text-blue-500">
          Don't have an account? Register
        </Text>
      </Pressable>
    </View>
  )
}

export default Login
