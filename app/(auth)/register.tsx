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
import { register } from "@/services/authService"

const Register = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [cPassword, setCPassword] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleRegister = async () => {
    // if(email)
    // password
    if (isLoading) return
    if (password !== cPassword) {
      Alert.alert("Title", "description")
      return
    }
    setIsLoading(true)
    await register(email, password)
      .then((res) => {
        // const res = await register(email, password)
        // success
        router.back()
      })
      .catch((err) => {
        Alert.alert("Registration failed", "Somthing went wrong")
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <View className="flex-1 w-full justify-center align-items-center p-4">
      <Text className="text-4xl text-center mb-2">Register</Text>
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
      <TextInput
        placeholder="Confirm password"
        value={cPassword}
        onChangeText={setCPassword}
        secureTextEntry
        className="bg-surface border border-gray-300 rounded px-4 py-3 mb-4 text-gray-900"
      />
      <TouchableOpacity
        onPress={handleRegister}
        className="bg-green-600 p-4 rounded mt-2"
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" size="large" />
        ) : (
          <Text className="text-center text-2xl">Register</Text>
        )}
      </TouchableOpacity>
      <Pressable className="px-6 py-3" onPress={() => router.back()}>
        <Text className="text-xl text-center text-blue-500">
          Alrady have an account? Login
        </Text>
      </Pressable>
    </View>
  )
}

export default Register
