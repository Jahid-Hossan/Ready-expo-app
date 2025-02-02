import { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function HomeScreen() {
  const { name } = useContext(AuthContext);

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      return response.data;
    },
  });

  console.log(data);

  return (
    <View className=" flex flex-1 justify-center items-center">
      <Text className="text-red-500 text-2xl">this is test</Text>
    </View>
  );
}
