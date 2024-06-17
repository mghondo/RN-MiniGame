import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/color";

function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    // console.log("Pressed and what not!");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        // onPress={pressHandler}
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={{ textAlign: "center" }}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.buttonColor,
    borderRadius: 28,
    paddingVertical: 8,
    marginVertical: 5,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: Colors.shadowColor,
    //IOS below
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  buttonStyles: {
    color: "#1a1c1c", // not currently used
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
