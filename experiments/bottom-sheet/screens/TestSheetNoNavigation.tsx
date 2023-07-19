import { SafeAreaView, Text } from "react-native"

export const TestSheetNoNavigation = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 32, textTransform: "uppercase"}}>No Nav</Text>
        </SafeAreaView>
    )
}
