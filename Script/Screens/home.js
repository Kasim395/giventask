import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Switch,
} from "react-native";
import CustomButton from "../Buttons/bluebtn";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [bgcolor, setBgColor] = useState("white");
  const [bkcolor, setbkcolor] = useState("#474658");

  const handleToggleSwitch = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setBgColor((prevColor) => (prevColor === "white" ? "black" : "white"));
    setbkcolor("white");
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "black" : "#fff" },
      ]}
    >
      <View
        style={{ flex: 0.69, alignItems: "center", justifyContent: "center" }}
      >
        <Image
          resizeMode="contain"
          source={require("../Images/piclogo.png")}
          style={styles.logoStyle}
        />
        <Text style={[styles.text1, { color: isDarkMode ? "white" : "black" }]}>
          Welcome to KnowMe
        </Text>
        <Text style={styles.text2}>Contacts - simple & secure</Text>
      </View>

      <View
        style={{ flex: 0.31, alignItems: "center", justifyContent: "center" }}
      >
        <CustomButton
          title="Create New Account"
          onPress={() =>
            navigation.navigate("Signup", {
              colorz: bgcolor,
              backcolor: bkcolor,
            })
          }
          textColor="white"
          bgColor="#0F46EA"
        />

        <CustomButton
          title="Login"
          onPress={() =>
            navigation.navigate("Signup", {
              colorz: bgcolor,
              backcolor: bkcolor,
            })
          }
          buttonColor="black"
          textColor="#474658"
          bgColor="#ffffff"
        />

        <View style={styles.toggleContainer}>
          <Text style={{ color: isDarkMode ? "white" : "black" }}>
            Dark Mode
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={handleToggleSwitch}
            thumbColor="#3498db"
            trackColor={{ false: "#bdc3c7", true: "#7f8c8d" }}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoStyle: {
    height: 205,
    width: 240,
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text2: {
    color: "#B5B5BC",
    fontSize: 14,
    marginTop: 8,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
});
