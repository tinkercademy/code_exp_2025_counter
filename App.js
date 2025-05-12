import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { useState } from "react"; // import the useState function ("hook") from React
import CounterText from "./components/CounterText";

export default function App() {
  // Getting back a count state variable
  // and a setCount function to set the state variable
  // Use `const` so that we don't try to manipulate the variable directly
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);

    // This doesn't update the UI
    // count += 1;
    // console.log(count)
  }

  function decrement() {
    setCount(count - 1);
  }

  function showEncouragingText() {
    if (count >= 30) {
      return "Wow! Amazing!!!!";
    } else if (count >= 10) {
      return "Keep going!!!!!";
    }
  }

  return (
    <View style={styles.container}>
      <CounterText color="pink" fontSize={10}>
        {count}
      </CounterText>
      <CounterText color="blue" fontSize={40}>
        {count}
      </CounterText>
      <CounterText color="purple" fontSize={90}>
        {count}
      </CounterText>

      <Pressable onPress={increment}>
        <Text style={styles.buttonStyle}>Increment!</Text>
      </Pressable>
      <Pressable onPress={decrement}>
        <Text style={styles.buttonStyle}>Decrement!</Text>
      </Pressable>
      <Pressable onPress={() => setCount(0)}>
        <Text style={styles.buttonStyle}>Reset!</Text>
      </Pressable>
      <Text style={styles.encouragingText}>{showEncouragingText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hotpink"
  },
  text: {
    fontSize: 40,
    padding: 20,
    textAlign: "center"
  },
  encouragingText: {
    paddingTop: 20,
    color: "#bda973"
  },
  buttonStyle: {
    marginTop: 10,
    padding: 30,
    backgroundColor: "yellow",
    color: "blue",
    borderRadius: 20,
    fontSize: 20,
    boxShadow: "2px 2px"
  }
});
