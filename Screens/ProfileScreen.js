import { StyleSheet, View } from "react-native"
import ID from "../Components/Profile/ID"
import Bar from "../Components/Profile/Bar"

const ProfileScreen = () =>
{
    return(
        <View style={Styles.Profile}>
            <ID></ID>
            <Bar></Bar>
        </View>
    )
}

export default ProfileScreen


const Styles = StyleSheet.create({
    Profile : {
        padding : '5%'
    }
})