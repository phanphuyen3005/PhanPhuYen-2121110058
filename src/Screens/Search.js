import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { useDispatch } from "react-redux";
const SearchScreen = ({ route }) => {
  console.log(route);
  // const dispatch = useDispatch();
  // const navigation = useNavigation();
  // const key = route.params?.key || "";
  // const data = aodai.filter((item) =>
  //   item.name.toLowerCase().includes(key.toLowerCase())
  // );

  // console.log("data", data);

  return (
    <ScrollView>
      {/* <View>
      <Text style={[{color:"red"}]} >Tất cả sản phẩm</Text>
      <HomeSearch></HomeSearch>
      <View className="my-3">
        <Text>Search key: {key}</Text>
      </View>
      <View >
        {data?.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="w-[40vw] "
            onPress={() => navigation.navigate("Detail", { product: item })}
            activeOpacity={0.5}
            style={{
              height: 200,
              marginTop: 8,
              borderWidth: 1,
              borderColor: "#E3E3E3",
              borderRadius: 20,
            }}
          >
            <Image
              style={{ height: 130, resizeMode: "contain", borderRadius: 20 }}
              source={{ uri: item.img }}
            />

            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {item.name}
              </Text>
              <Text style={{ color: "gray" }}>quantity: {item.pieces}</Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#990000", fontWeight: "bold" }}>
                  {item.price} USD
                </Text>
                <AntDesign
                  name="pluscircle"
                  size={22}
                  color="#00AA00"
                  onPress={() => {
                    dispatch(addToCart(item));
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View> */}
    </ScrollView>
  );
};

export default SearchScreen;