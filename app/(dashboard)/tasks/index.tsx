import { View, Text } from "react-native"
import React, { useEffect } from "react"
import { getAllTask } from "@/services/taskService"

const TasksScreen = () => {
  const handleFetchData = async () => {
    await getAllTask()
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-center text-4xl">Tasks screen</Text>
    </View>
  )
}

export default TasksScreen
