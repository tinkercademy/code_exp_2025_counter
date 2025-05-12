import { StyleSheet, Text } from "react-native";

// destructured props into its three inner properties
// export default function CounterText(props) {
export default function CounterText({ color, fontSize, children }) {
  return <Text style={{ color, fontSize }}>{children}</Text>;

  // Same as
  // <Text style={{ color: color, fontSize: fontSize }}
}
