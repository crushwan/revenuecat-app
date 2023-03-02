import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
};

const ActionRow = ({ title, screen, color, icon, vertical }: Props) => {
  return (
    <TouchableOpacity
      className={`flex flex-1 items-center justify-center 
    py-6 rounded-lg space-x-2 `}
      style={{ backgroundColor: color }}
    >
      <Ionicons name={icon} size={30} color="#fff" />
      <Text className="text-white font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;