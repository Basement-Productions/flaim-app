import React from "react";
import { Button, Text } from "react-native-paper";
import Wrapper from "./components/Wrapper";
import { Avatar } from "react-native-paper";
import { router } from "expo-router";
import { TouchableOpacity, View, Clipboard, ToastAndroid } from "react-native";
import {
  toast,
  ToastPosition,
  Toasts,
} from "@backpackapp-io/react-native-toast";
import useUserStore from './services/store/userStore'


export default function profile() {
  const handleCopyText = async () => {
    const textToCopy = "Link to profile";
    await Clipboard.setString(textToCopy);
    toast.success("Profile link copied", {
      width: 300,
      position: ToastPosition.BOTTOM,
    });
  };

  const { currentUser } = useUserStore();


  const renderGoals = () => {
    return (
      <TouchableOpacity
        onPress={() => router.push("/goal")}
        className="mt-4 border-solid border-gray-300 rounded-3xl border-4 h-1/2 w-full bg-gray-300 h-32 w-32"
      >
        <TouchableOpacity
          onPress={() => router.push("/goal-feed")}
          className="mt-2 ml-5"
        >
          <Text className="font-bold text-lg text-black">{"<GOAL_NAME>"}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  // Render initials for now, we'll deal with image logic later
  return (
    <Wrapper
      title="Profile"
      leftIcon="arrow-left"
      leftIconAction={router.back}
      rightIcon="cog-outline"
      rightIconAction={() => router.push("/settings")}
    >
      <Toasts />
      <View className="items-center h-full w-full">
        {/* <Avatar.Text size={96} label="AP" /> */}
        <Avatar.Image
          source={require("../assets/images/profilepic.jpeg")}
          size={96}
        />

        <View className="flex-col flex items-center">
          <Text className="pt-4">{currentUser?.username}</Text>
          <Text className="pt-4">{currentUser?.bio}</Text>
          <Button
            icon="pencil-outline"
            onPress={() => router.push("/edit-profile")}
            className="pt-2"
          >
            <Text>Edit profile</Text>
          </Button>
        </View>
        <View className="flex-row">
          <Text className="pt-10 pr-72 self-start">Pinned posts</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          {renderGoals()}
          {renderGoals()}
          {renderGoals()}
        </View>
      </View>
    </Wrapper>
  );
}
