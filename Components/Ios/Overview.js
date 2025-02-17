import { StyleSheet, Text, View } from "react-native"

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const Overview = (props) => {
    const { overview } = props
    const { title, no } = overview
    return (
        <View style={style.OverviewContainer}>
            <View>

                <Text style={style.title}>{title}</Text>
                <Text style={style.no}>{no}</Text>
            </View>
            <View>
                <FontAwesome5 name="angle-right" size={60} color="#686D76" />
            </View>
        </View>
    )
}

export default Overview

const style = StyleSheet.create({
    OverviewContainer:
    {
        padding: '5%',
        elevation: 2,
        backgroundColor: '#fff',
        marginTop: '2%',
        borderRadius: 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    title :
    {
        fontWeight : 'bold',
        fontSize: 25
    },
    no : 
    {
        fontSize : 18
    }
})