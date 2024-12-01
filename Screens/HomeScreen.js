import { StyleSheet, View } from "react-native"
import HomeOutlets from "../Components/Home/HomeOutlet"
import HomeImg from "../Components/Home/HomeImg"
import HeaderBar from "../UI/HeaderBar/HeaderBar"

const HomeScreens = (props) => 
{
    
    return(
        <View style={style.homeContainer}>
            <HeaderBar></HeaderBar>
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
        backgroundColor :'#fff',        
    }
})