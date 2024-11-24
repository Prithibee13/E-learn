import { StyleSheet, Text, View } from "react-native"
import Header from "../../UI/Header/Header"

const Bar = () => {
    return (
        <View style={Style.BarContainer}>
            <View style={Style.Bars}>
                <View style={Style.textContainer}>
                    <Text style={Style.barNumber}>0</Text>
                    <Text style={Style.textHeader}>My Courses</Text>
                </View>
                <View>
                    <Text style={Style.barNumber}>2</Text>
                    <Text style={Style.textHeader}>Followers</Text>
                </View>
                <View>
                    <Text style={Style.barNumber}>32</Text>
                    <Text style={Style.textHeader}>Followings</Text>
                </View>
            </View>
        </View>
    )
}

export default Bar

const Style = StyleSheet.create({
    BarContainer:
    {
        backgroundColor: '#fff',
        padding: '2%',
        elevation: 1,
        borderRadius: 20
    },
    Bars: {
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '8%',
        borderRadius: 20
    },
    textContainer:
    {
        justifyContent: 'center'
    },
    textHeader:
    {
        fontSize:20,
        fontWeight :'bold',
        color : '#686D76'
    },
    barNumber :
    {
        fontSize:20,
        fontWeight :'bold',
        textAlign :'center',
    }
})