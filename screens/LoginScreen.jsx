import React, { useState } from "react";
import { styles } from "../styles/styles";
import { LinearGradient } from "expo-linear-gradient";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  //reuse of initialized instance

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
    } catch (error) {
      alert("Epic Fail " + error.message); //no mostrar, seguridad
    } finally {
      setLoading(false);
    }
  };
  const navigateToResetPassword = async () => {
    navigation.navigate("Reset");
  };

  const navigateToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "rgba(239, 104, 226, 0.5)",
          "rgba(237, 131, 24, 0.432)",
          "rgba(242, 89, 13, 0.432)",
          "rgba(211, 31, 115, 0.432)",
          "transparent",
        ]}
        style={styles.background}
      />
      <Text style={styles.legend}>Login</Text>
      <View style={styles.modalContainer}>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToRegister}>
              <Text style={styles.toggleText}>
                Don't have an account? Register here
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToResetPassword}>
              <Text style={styles.toggleText}>Forgot your password?</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
