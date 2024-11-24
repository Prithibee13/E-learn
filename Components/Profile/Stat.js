import { StyleSheet, Text, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Stat = (props) =>
{
    const { item } = props

    const { icon , title , color, number,r,g,b} = item
    return(
        <View style={Styles.statContainer}>
            <View style={Styles.innerContainer}>
                <View>
                    <FontAwesome5 name={icon} size={20} color={color}/>
                </View>
                <View>
                    <Text style={Styles.innerText}>{title}</Text>
                </View>
            </View>
            <View style={[{backgroundColor : `rgba(${r}, ${g}, ${b}, 0.1)`}, Styles.NumberContainer]}>
                <Text style={[{color : color}, Styles.number]}>{number}</Text>
            </View>
        </View>
    )
}

export default Stat


const Styles = StyleSheet.create({
    statContainer :
    {
        backgroundColor : '#fff',
        elevation : 1,
        marginVertical : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems:'center',
        padding : '5%',
        borderRadius : 20
    },
    innerContainer : 
    {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        columnGap:20,
    },
    innerText : {
        fontSize : 20,
        fontWeight : 'bold',
    },
    NumberContainer : 
    {
        paddingHorizontal :"5%",
        paddingVertical : "1%",
        borderRadius : 8,
        width: 65
    },
    number : {
        fontSize : 25,
        fontWeight : 'bold',
        textAlign : 'center'
    } 
})