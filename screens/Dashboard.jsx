import { View, Text, Button } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import { LinearGradient } from "expo-linear-gradient";

export default function Dashboard({ navigation }) {
  const navigateToProfile = () => navigation.navigate("Profile");
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
      <Text style={styles.legend}>Dashboard</Text>
      <Button title="Profile Screen" onPress={navigateToProfile} />
    </View>
  );
}
