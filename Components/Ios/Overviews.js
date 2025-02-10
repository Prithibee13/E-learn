import { ScrollView, StyleSheet, Text, View } from "react-native"
import Overview from "./Overview"

const OverViews = () =>
{
    const overviews = [
        {
            id: 1,
            title : "Introduction",
            no : "1 video"
        },
        {
            id: 2,
            title : "1. Software setup",
            no : "3 videos"
        },
        {
            id: 3,
            title : "2. UI Fundamentals",
            no : "6 videos"
        },
        {
            id: 4,
            title : "3. Testing and Finishing",
            no : "1 video"
        },
        {
            id: 5,
            title : "Skill test",
            no : "1 video"
        },
    ]

    return(
        <View style={style.overviewContainer}>
            <Text style={style.overviewTitle}>Course Overviews</Text>

            {overviews.map(overview => <Overview key={overview.id} overview={overview}></Overview>)}
        </View>
    )
}


export default OverViews


const style = StyleSheet.create({
    overviewContainer : {
        padding : '5%'
    },
    overviewTitle : {
        fontSize : 30,
        fontWeight : 'bold',
        marginVertical : "2%"
    }
})