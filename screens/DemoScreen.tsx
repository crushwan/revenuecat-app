import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Demo"
>;

const DemoScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="bg-[#e5962d] flex-1">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex-row items-center p-5"
      >
        <Ionicons name="arrow-back" size={50} color="white" />
        <Text>Go Back</Text>
      </TouchableOpacity>

      <View>
        <Text>Demo</Text>
      </View>
    </SafeAreaView>
  );
};

export default DemoScreen;
