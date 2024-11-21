import { StyleSheet, View } from "react-native"
import Learning from "../Components/Main/Learning"
import Categories from "../Components/Main/Categories"

const LandinScreen = () =>
{
 
    return(
        <View style={Style.landingContainer}>
            <Categories></Categories>
            <Learning></Learning>
        </View>
    )
}


export default LandinScreen
const Style = StyleSheet.create({
    landingContainer : {
        padding : '5%',
        
    }
})