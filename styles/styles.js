import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  modalContainer: {
    minHeight: "50%",
    borderRadius: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  formContainer: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
  },
  legend: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: "80%",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 15,
    width: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  toggleText: {
    marginTop: 10,
    color: "blue",
    textAlign: "center",
  },
  text: {
    paddingHorizontal: 30,
    marginBottom: 20,
    fontSize: 17,
  },
});
