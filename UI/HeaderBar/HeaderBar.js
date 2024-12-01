import { StyleSheet, Text, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const HeaderBar = () => {
    return (
        <View style={style.barContainer}>
            <View style={style.detailesContainer}>
                <View style={style.barIconContainer}>
                    <FontAwesome5 name='kiwi-bird' color="#fff" size={25}></FontAwesome5>
                </View>
                <View>
                    <Text style={style.text}>LearnU</Text>
                </View>
            </View>
        </View>
    )
}


export default HeaderBar

const style = StyleSheet.create({
    barContainer : 
    {
        padding : '5%',
        backgroundColor :"#fff",
        elevation : 3,
        borderRadius : 20,
        marginBottom : '5%'
    },

    detailesContainer : 
    {
        flexDirection : 'row',
        columnGap : 15,
        alignItems : 'center'
    },
    barIconContainer : 
    {
        padding  : "3%",
        backgroundColor : '#00FF9C',
        borderRadius : 25
    },
    text : 
    {
        fontSize : 30,
        fontWeight  :'bold',
        color : '#00FF9C',
    }
    
})