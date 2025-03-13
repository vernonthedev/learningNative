import { Text, View, Button, Alert, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.title}>Test Application</Text>
        <Link href="/profile">Profile Page</Link>
        <Button
            title="Press Me"
            onPress={() => Alert.alert('Message','The Press Me Button was Pressed')}
        />
    </View>
    
  );
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        marginVertical: 8,
        color: "blue",
        fontSize: 24
    }
});
