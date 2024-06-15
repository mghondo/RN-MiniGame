import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      <View>
        <Text>Higher or Lower</Text>
      </View>
      <View>
        <Text>Higher or Lower</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignContent: "center",
  },
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
    backgroundColor: "rgba(58, 140, 154, 0.5)",
    overflow: "hidden",
  },
});
