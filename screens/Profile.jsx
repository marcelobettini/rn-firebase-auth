import { View, Button, Text } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import { auth } from "../FirebaseConfig";
import { LinearGradient } from "expo-linear-gradient";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "rgba(211, 31, 115, 0.432)",
          "rgba(242, 89, 13, 0.587)",
          "rgba(239, 104, 226, 0.5)",
          "rgba(203, 233, 32, 0.495)",
          "transparent",
        ]}
        style={styles.background}
      />
      <Text style={styles.legend}>Profile</Text>
      <Button
        title="Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Button title="Logout" onPress={() => auth.signOut()} />
    </View>
  );
};

export default Profile;
