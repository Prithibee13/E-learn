import { StyleSheet, View } from "react-native"
import Header from "../../UI/Header/Header"

const Bar = () => {
    return (
        <View style={Style.BarContainer}>
            <View style={Style.Bars}>
                <View style={Style.textContainer}>
                    <Header>0</Header>
                    <Header>My Courses</Header>
                </View>
                <View> 
                    <Header>2</Header>
                    <Header>Followers</Header></View>
                <View> 
                    <Header>32</Header>
                    <Header>Followings</Header></View>
            </View>
        </View>
    )
}

export default Bar

const Style = StyleSheet.create({
    BarContainer : 
    {
        backgroundColor : '#fff',
        padding : '2%',
        elevation : 1,
        borderRadius : 20
    },
    Bars : {
        backgroundColor : '#E4E0E1',
        flexDirection :'row',
        justifyContent : 'space-between',
        padding : '3%',
        borderRadius : 20
    },
    textContainer : 
    {
        justifyContent: 'center'
    }
})