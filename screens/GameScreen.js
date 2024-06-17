import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/color";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

// function generateRandomBetween(min, max, exclude) {
//     const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;

//     if (rndNum === exclude) {
//       const newMax = exclude === max ? exclude - 1 : max;
//       const newMin = exclude === min ? exclude + 1 : min;
//       return generateRandomBetween(newMin, newMax, exclude);
//     } else {
//       return rndNum;
//     }
//   }

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!, You're trying to trick the App.", [
        {
          text: "My Bad!",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <View>
        <Title>Opponents Guess</Title>
        <View>
          <NumberContainer>{currentGuess}</NumberContainer>
        </View>
      </View>
      {/* <View>
        <Title>Higher or Lower?</Title>
        <View>
          <PrimaryButton>+</PrimaryButton>
          <PrimaryButton>-</PrimaryButton>
        </View>
      </View> */}
      <View style={styles.screen2}>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
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
    // alignItems: "center",
  },
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
  buttonsContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  screen2: {
    flex: 4,
    padding: 24,
    // width: 48,
    alignContent: "center",
    // alignItems: "center",
    flexDirection: "column",
  },
});
