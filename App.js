import { Text, View, StyleSheet, Button, Pressable } from "react-native"; // pre-2023 uses TouchableOpacity instead of Pressable
import { useState } from "react";
import CounterButton from "./components/CounterButton";

export default function App() {
  const [counter, setCounter] = useState(0);

  function onButtonPressed() {
    console.log("Button was pressed!");
    console.log(`Before pressing, the counter was at ${counter}`);
    setCounter(counter + 1);
  }

  function renderEncouragingText() {
    if (counter >= 20) {
      return "Keep up the good work!";
    } else if (counter >= 10) {
      return "Keep Going!";
    }
  }

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <CounterButton text="Press Me!" onPress={onButtonPressed} />

      <Text style={styles.encouragingTex}>{renderEncouragingText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  encouragingTex: {
    marginTop: 50,
    color: "#AAAAAA",
  },
});
