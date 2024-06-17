import { Text, View } from "react-native";
import Title from "../components/ui/Title";
import { StyleSheet } from "react-native";

function GameIsOver() {
  return (
    <View style={styles.gameover}>
      <Title>Game is Over!</Title>
    </View>
  );
  //   return <Text>Game is Over!</Text>;
}

export default GameIsOver;

const styles = StyleSheet.create({
  gameover: {
    marginTop: 140,
  },
});
