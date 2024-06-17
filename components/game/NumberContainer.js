import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
    borderRadius: 12,
    margin: 6,
    backgroundColor: Colors.titleBackground,
    overflow: "hidden",
  },
  numberText: {
    color: Colors.white,
    fontSize: 36,
    fontWeight: "bold",
  },
});
