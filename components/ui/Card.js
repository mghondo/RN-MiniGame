import { StyleSheet, View } from "react-native";
import Colors from "../../constants/color";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 12,
    elevation: 4, //android
    shadowColor: Colors.shadowColor,
    //IOS below
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 1,
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.titleBackground,
    borderWidth: 2,
    borderColor: Colors.white,
  },
});
