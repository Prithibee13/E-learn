import { StyleSheet, Text, View } from "react-native"

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Module from "./Module"

const Overview = (props) => {
    const { overview } = props
    const { title, no, icon, done, videos, color } = overview
    return (
        <View style={style.mainContainer}>
            <View style={style.OverviewContainer}>
                <View style={style.header}>
                    <View>
                        <FontAwesome5 name={done} size={25} color={color} />
                    </View>
                    <View>
                        <Text style={style.title}>{title}</Text>
                        <Text style={style.no}>{no}</Text>
                    </View>
                </View>
                <View>
                    <FontAwesome5 name={icon} size={60} color="#686D76" />
                </View>
            </View>

            {
                videos?.map(video=> <Module key={video.id} detailes={video}></Module>)
            }

        </View>

    )
}

export default Overview

const style = StyleSheet.create({
   mainContainer : {
    padding: '5%',
    elevation: 2,
    backgroundColor: '#fff',
    marginTop: '5%',
    borderRadius: 20,
   },
    OverviewContainer:
    {   
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title:
    {
        fontWeight: 'bold',
        fontSize: 25
    },
    no:
    {
        fontSize: 18
    },
    header:
    {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    }
})