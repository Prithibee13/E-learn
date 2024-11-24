import { StyleSheet, Text, View } from "react-native"
import Header from "../../UI/Header/Header"
import Stat from "./Stat"

const Stats = () =>
{
   const stats =  [
        {
            id : 1,
            icon : 'check',
            title : 'Finished Courses',
            number : '3',
            color : '#0D92F4',
            r : 13,
            g : 146,
            b : 244
        },
        {
            id : 2,
            icon : 'hourglass-half',
            title : 'Hours Learned',
            number : '56',
            color : '#FF7F3E',
            r : 255,
            g : 127,
            b : 62
        },
        {
            id : 3,
            icon : 'trophy',
            title : 'Skill Achived',
            number : '7',
            color : '#9ABF80',
            r : 154,
            g : 191,
            b : 128
        },
    ]
    return(
        <View style={Styles.statsContiner}>
            <Text style={Styles.statHeader}>Total Statistics</Text>
            <View>
                {
                    stats.map(stat => <Stat key={stat.id} item={stat}></Stat>)
                }
            </View>
        </View>
    )
}

export default Stats

const Styles = StyleSheet.create({
    statsContiner : 
    {
        marginVertical : '20%'
    },
    statHeader : 
    {
        fontSize : 20,
        fontWeight: 'bold',
        color:'#686D76'
    }
})