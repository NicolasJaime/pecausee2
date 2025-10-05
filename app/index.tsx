import CustomText from "@/components/ui/CustomText";
import MoreDetails from "@/components/MoreDetails";
import ProfileDetails from "@/components/ProfileDetails"
import "@/global.css";
import { View } from "react-native";
export default function Index() {
  return (
    <View className="bg-[#026A75] w-screen h-screen">
      <ProfileDetails></ProfileDetails>
      <MoreDetails></MoreDetails>
    </View>
  );
}
