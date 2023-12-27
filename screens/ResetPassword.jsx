import React, { useState } from "react";
import { styles } from "../styles/styles";
import {
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
const ResetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    try {
      const response = await sendPasswordResetEmail(auth, email);
      alert("We've sent you an email!");
    } catch (error) {
      alert("Reset failed: " + error.message);
    }
  };
  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "rgba(245, 125, 6, 0.356)",
          "rgba(149, 254, 68, 0.420)",
          "rgba(222, 246, 8, 0.532)",
          "rgba(241, 55, 55, 0.517)",
          "transparent",
        ]}
        style={styles.background}
      />
      <Text style={styles.legend}>Password Reset</Text>
      <View style={styles.modalContainer}>
        <Text style={styles.text}>
          Enter the email associated to your account. Press "Reset" button.
          We'll send you an email with a link to reset the password.
        </Text>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />

        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handleReset}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToLogin}>
              <Text style={styles.toggleText}>go back to Login screen</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
export default ResetPassword;
