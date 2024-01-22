import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const HomeSearch = () => {
  const [key, setKey] = useState("");
  const navigation = useNavigation();
  const handleSearch = () => {
    navigation.navigate("Search", {
      key:key,
    })
  }
  return (
    <View
      style={{
        backgroundColor: "#DDDDDD",
        height: responsiveHeight(6.5),
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10,
      }}
    >
      <FontAwesome name="search" size={24} color="black" />
      <TextInput onBlur={handleSearch} onChange={(text) => setKey(text)} style={{ flex: 1 }} placeholder="Search..." />
    </View>
  );
};

export default HomeSearch;
