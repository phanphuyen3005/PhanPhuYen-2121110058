import { View, Text, Image,ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "../Components/HomeIcon";
import HomeSearch from "../Components/HomeSearch";
import HomeBanner from "../Components/HomeBanner";
import ProductsTile from "../Components/ProductsTile";
import ProductsCarousel from "../Components/ProductsCarousel";
import { aodai, dam, vay } from "../Utils/Date";

const Home = () => {
  return (
    <ScrollView style={{backgroundColor:"#FFFFFF"}}>
    <SafeAreaView style={{ paddingHorizontal: 10, paddingTop: 10,backgroundColor:"while" }}>
      <HomeIcon />
      <HomeSearch/>
      <HomeBanner/>
      <ProductsTile  title="Ao Dai                    "/>
      <ProductsCarousel data={aodai}/>
      <ProductsTile title="Đầm                       "/>
      <ProductsCarousel data={dam}/>
      <ProductsTile title="vay                       "/>
      <ProductsCarousel data={vay}/>

    </SafeAreaView>
    </ScrollView>
  );
};
export default Home;
