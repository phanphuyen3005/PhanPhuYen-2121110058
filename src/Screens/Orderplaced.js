import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { myColors } from "../Utils/MyColor";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { deleteAll } from "../../Redux/CartSlice";

const Orderplaced = () => {
  const nav = useNavigation();
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(deleteAll())
      nav.navigate("Home");
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <MaterialIcons name="verified" size={60} color={myColors.primary} /> */}
      <Text>Bạn Đã Đặt Hàng Thành Công!</Text>
    </View>
  );
};

export default Orderplaced;
