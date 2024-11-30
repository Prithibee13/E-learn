import { ScrollView, StyleSheet, View } from "react-native"
import Learning from "../Components/Main/Learning"
import Categories from "../Components/Main/Categories"
import Features from "../Components/Main/Featuers"

const LandinScreen = () => {

    return (
        <ScrollView>
            <View style={Style.landingContainer}>
                <Features></Features>
                <Categories></Categories>
                <Learning></Learning>
            </View>
        </ScrollView>

    )
}


export default LandinScreen
const Style = StyleSheet.create({
    landingContainer: {
        padding: '5%',

    }
})