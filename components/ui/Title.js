import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
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
});
