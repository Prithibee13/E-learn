import { ScrollView, StyleSheet, View } from "react-native"
import ID from "../Components/Profile/ID"
import Bar from "../Components/Profile/Bar"
import Stats from "../Components/Profile/Stats"
import ProfileHeader from "../Components/Profile/ProfileHeader"

const ProfileScreen = () => {
    return (
        <ScrollView >
            <ProfileHeader></ProfileHeader>
            <View style={Styles.Profile}>
                <ID></ID>
                <Bar></Bar>
                <Stats></Stats>
            </View>

        </ScrollView>
    )
}

export default ProfileScreen


const Styles = StyleSheet.create({
    Profile: {
        padding: '8%'
    }
})