import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "../Buttons/bluebtn";
import LogoButton from "../Buttons/logobtn";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const bgcolor = route.params.colorz;
  const bkcolor = route.params.backcolor;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bgcolor }}>

    <View style={{flex:0.06}}></View>
      <View style={styles.bkcontainer}>
        <TouchableOpacity
          style={{ width: 150 }}
          onPress={() => navigation.pop()}
        >
          <Text
            style={{
              textAlign: "left",
              color: bkcolor,
              fontWeight: "bold",
              fontSize: 19,
              marginLeft: 18,
            }}
          >
            <Icon name="arrow-left" size={19} />    Back
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.35, marginBottom:40 }}>
        <View style={styles.container1}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Enter Your Email" />
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <CustomButton title="Continue" textColor="white" bgColor="#0F46EA" />
        </View>

        <View style={{ alignItems: "center", margin: 20 }}>
          <View style={styles.orcontainer}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: bkcolor,
                marginHorizontal: 5,
              }}
            />
            <Text style={{ color: bkcolor, fontSize: 16 }}>or</Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: bkcolor,
                marginHorizontal: 5,
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.bottomcontainer}>
        <LogoButton
          title="Signup with Phone"
          onPress={() => console.log("Button pressed")}
          textColor="#474658"
          bgColor="#ffffff"
          iconName="phone"
          buttonColor="black"
        />

        <LogoButton
          title="Signup with Apple ID"
          onPress={() => console.log("Button pressed")}
          textColor="#474658"
          bgColor="#ffffff"
          iconName="apple"
          buttonColor="black"
        />

        <LogoButton
          title="Signup with Google"
          onPress={() => console.log("Button pressed")}
          textColor="#474658"
          bgColor="#ffffff"
          iconName="google"
          buttonColor="black"
        />

        <LogoButton
          title="Signup with Facebook"
          onPress={() => navigation.navigate("Api Data")}
          textColor="#474658"
          bgColor="#ffffff"
          iconName="facebook"
          buttonColor="black"
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container1: {
    margin: 20,
  },

  bottomcontainer: {
    flex: 0.53,
    alignItems: "center",
    justifyContent: "center",
  },

  bkcontainer: {
    flex: 0.06,
    justifyContent: "center",
    marginBottom: 12,
  },

  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#B5B5BC",
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  input: {
    height: 40,
    fontSize: 16,
    paddingVertical: 5,
    backgroundColor:'white'
  },

  orcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
