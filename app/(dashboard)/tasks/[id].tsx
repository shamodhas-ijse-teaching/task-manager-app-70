import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import React, { useState } from "react"
import { useLocalSearchParams, useRouter } from "expo-router"
import { createTask } from "@/services/taskService"

const TaskFormScreen = () => {
  const { id } = useLocalSearchParams<{ id?: string }>()
  // params.id = {id}
  const isNew = !id || id === "new" // null or id is new -> save
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const router = useRouter()

  const handleSubmit = async () => {
    // validations
    if (!title.trim) {
      Alert.alert("Validation", "Title is required")
      return
    }
    try {
      if (isNew) {
        await createTask({ title, description })
      }
      router.back()
    } catch (err) {
        console.error("Error saving task : ",err)
        Alert.alert("Error", "Fail to save task")
    }
  }

  return (
    <View className="flex-1 w-full p-5">
      <Text className="text-2xl font-bold">
        {isNew ? "Add Task" : "Edit Task"}
      </Text>
      <TextInput
        className="border border-gray-400 p-2 my-2 rounded-md"
        placeholder="title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        className="border border-gray-400 p-2 my-2 rounded-md"
        placeholder="description"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        className="bg-blue-400 rounded-md px-6 py-3 my-2"
        onPress={handleSubmit}
      >
        <Text className="text-xl text-white text-center">
          {isNew ? "Add Task" : "Update Task"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TaskFormScreen
