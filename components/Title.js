import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    borderRadius: 12,
    margin: 6,
    backgroundColor: "rgba(58, 140, 154, 0.3)",
    overflow: "hidden",
  },
});
