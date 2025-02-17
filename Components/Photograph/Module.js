import { StyleSheet, Text, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const Module = (props) => {
    const { detailes } = props

    const { title, time, done, color } = detailes
    return (
        <View style={style.moduleContainer}>
            <View>
                <FontAwesome5 name={done} size={20} color={color} />
            </View>
            <View>
                <Text style={style.title}>{title}</Text>
                <Text style={style.time}>{time}</Text>
            </View>
        </View>
    )
}

export default Module

const style = StyleSheet.create({
    moduleContainer :
    {
        padding : '5%',
        flexDirection : 'row',
        columnGap : 10,
        alignItems :'center'
    },
    title : {
        fontSize : 20,
        marginBottom : 3,
        color : "#686D76"
    },
    time : {
        fontSize : 20, 
        color : "#686D76"
    }
})