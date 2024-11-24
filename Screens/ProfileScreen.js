import { ScrollView, StyleSheet, View } from "react-native"
import ID from "../Components/Profile/ID"
import Bar from "../Components/Profile/Bar"
import Stats from "../Components/Profile/Stats"

const ProfileScreen = () =>
{
    return(
        <ScrollView style={Styles.Profile}>
            <ID></ID>
            <Bar></Bar>
            <Stats></Stats>
        </ScrollView>
    )
}

export default ProfileScreen


const Styles = StyleSheet.create({
    Profile : {
        padding : '8%'
    }
})