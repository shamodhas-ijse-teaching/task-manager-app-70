import React from "react"
import { View, ActivityIndicator } from "react-native"

interface LoaderProps {
  visible: boolean
}

const Loader: React.FC<LoaderProps> = ({ visible }) => {
  if (!visible) return null

  return (
    <View className="absolute inset-0 bg-black/50 items-center justify-center z-50">
      <ActivityIndicator size="large" color="#fff" />
    </View>
  )
}

export default Loader
