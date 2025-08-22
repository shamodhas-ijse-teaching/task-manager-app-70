import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import React, { useEffect, useState } from "react"
import { useLocalSearchParams, useRouter } from "expo-router"
import { createTask, getTaskById, updateTask } from "@/services/taskService"
import { useLoader } from "@/context/LoaderContext"

const TaskFormScreen = () => {
  const { id } = useLocalSearchParams<{ id?: string }>()
  // params.id = {id}
  const isNew = !id || id === "new" // null or id is new -> save
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const router = useRouter()
  const { hideLoader, showLoader } = useLoader()
  useEffect(() => {
    const load = async () => {
      if (!isNew && id) {
        try {
          showLoader()
          const task = await getTaskById(id)
          if (task) {
            setTitle(task.title)
            setDescription(task.description)
          }
        } finally {
          hideLoader()
        }
      }
    }
    load()
  }, [id])

  const handleSubmit = async () => {
    // validations
    if (!title.trim) {
      Alert.alert("Validation", "Title is required")
      return
    }
    try {
      showLoader()
      if (isNew) {
        await createTask({ title, description })
      } else {
        await updateTask(id, { title, description })
      }
      router.back()
    } catch (err) {
      console.error("Error saving task : ", err)
      Alert.alert("Error", "Fail to save task")
    } finally {
      hideLoader()
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
