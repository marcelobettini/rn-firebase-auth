import { styles } from "../styles/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Account Created. You can login now");
    } catch (error) {
      alert("Epic Fail " + error.message); //no mostrar, seguridad
    } finally {
      setLoading(false);
    }
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "rgba(245, 125, 6, 0.656)",
          "rgba(239, 104, 226, 0.5)",
          "rgba(211, 31, 115, 0.732)",
          "rgba(240, 76, 163, 0.748)",
          "transparent",
        ]}
        style={styles.background}
      />

      <Text style={styles.legend}>Register</Text>
      <View style={styles.modalContainer}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Repeat Password"
          secureTextEntry={true}
        />

        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToLogin}>
              <Text style={styles.toggleText}>
                Do you have an account? Login here
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
