import { Button, SafeAreaView, Text } from "react-native";

export const BlankScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>BlankBlank!</Text>

            <Button title="Test sheet with no nav" onPress={() => navigation.navigate("no-nav")} />

        </SafeAreaView>
    )
}
