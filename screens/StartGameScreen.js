import { TextInput, View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, //android
    shadowColor: "black",
    //IOS below
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 1,
    marginTop: 100,
    padding: 16,
    backgroundColor: "#3b57b1",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    // width: 50,
    borderBottomColor: "#a3ffe8",
    borderBottomWidth: 2,
    color: "#a3ffe8",
    marginVertical: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    textAlign: "center",
  },
});
