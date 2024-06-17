import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.white,
    fontSize: 30,
  },
});
