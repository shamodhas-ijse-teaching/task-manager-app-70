import { View, Text, Pressable } from "react-native"
import React from "react"
import { Link, useRouter, useSegments } from "expo-router"

const FooterNav = () => {
  const router = useRouter()

  const segment = useSegments()
  const activeRouter = "/" + segment[0] || ("" as string)

  return (
    <View className="flex-row justify-around border-t border-gray-300 bg-white p-[50px]">
      <Pressable
        onPress={() => {
          router.push("/profile")
        }}
        className={`${activeRouter === "/profile" ? "bg-red-500" : ""}`}
      >
        <Text>Profile</Text>
      </Pressable>

      <View className="bg-[#000]">
        <Link
          href={{
            pathname: "/item/[id]",
            params: {
              id: "444",
              name: "shamodha",
              age: 40,
              address: "colombo"
            }
          }}
          style={{
            color: "#fff",
            padding: 10
          }}
        >
          Go to item
        </Link>
      </View>
      <View className="bg-[#000]">
        <Link
          href={"/home/test"}
          style={{
            color: "#fff",
            padding: 10
          }}
        >
          Home folder test
        </Link>
      </View>

      <View className="bg-[#000]">
        <Link
          href={"/"}
          style={{
            color: "#fff",
            padding: 10
          }}
        >
          Home
        </Link>
      </View>
      <View
        style={{
          backgroundColor: "#000",
          padding: 10
        }}
      >
        <Link
          href={"/profile"}
          style={{
            color: "#fff",
            padding: 10
          }}
        >
          Profile
        </Link>
      </View>
      <View
        style={{
          backgroundColor: "#000",
          padding: 10
        }}
      >
        <Link
          href={"/user"}
          style={{
            color: "#fff",
            padding: 10
          }}
        >
          User
        </Link>
      </View>
      <View
        style={{
          backgroundColor: "#000",
          padding: 10
        }}
      >
        <Link
          href={"/login"}
          style={{
            color: "#fff",
            padding: 10
          }}
        >
          Go to login
        </Link>
      </View>
    </View>
  )
}

export default FooterNav
