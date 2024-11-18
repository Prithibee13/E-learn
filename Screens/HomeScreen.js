import { StyleSheet, View } from "react-native"
import HomeOutlets from "../Components/Home/HomeOutlet"
import HomeImg from "../Components/Home/HomeImg"

const HomeScreens = () => 
{
    return(
        <View style={style.homeContainer}>
            <HomeImg></HomeImg>
            <HomeOutlets></HomeOutlets>
        </View>
    )
}
export default HomeScreens

const style = StyleSheet.create({
    homeContainer:
    {
        flex : 1,
        justifyContent:'center',
        alignItems : 'center',
        padding : "10%"
    }
})