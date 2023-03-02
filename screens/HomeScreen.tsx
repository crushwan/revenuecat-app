import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ActionRow from "../components/ActionRow";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        <TouchableOpacity className="absolute z-50  top-5 right-10 items-center">
          <Ionicons name="person-circle" size={30} color="#e5962d" />
          <Text className="text-center text-[#e5962d]">UPGRADE</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: "https://i.imgur.com/e14NE49.png" }}
          className="w-full h-64"
        />

        <ActionRow
          title="Track Workout"
          screen="Demo"
          color="#e5962d"
          icon="fitness"
          vertical
        />

        <ActionRow
          title="Browse Workouts"
          screen="Demo"
          color="#1982c4"
          icon="library"
          vertical
        />

        <ActionRow
          title="Connect with Friends"
          screen="Demo"
          color="#f44174"
          icon="share-social"
        />

        <ActionRow
          title="Add an Exercise"
          screen="Demo"
          color="#8ac926"
          icon="add-circle"
          requiresPro
        />

        <ActionRow
          title="Create a Routine"
          screen="Demo"
          color="#c03221"
          icon="md-time"
          requiresPro
        />

        <ActionRow
          title="Join Challenges"
          screen="Demo"
          color="#23967f"
          icon="trophy"
          requiresPro
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
