import { StyleSheet, Text, View } from "react-native"
import Overview from "./Overview"

const Overviews = () =>
{
    const overviews = [
        {
            id: 1,
            title : "Introduction",
            no : "1 video",
            icon : "angle-right",
            done : "check",
            color : "#9ABF80"
        },
        {
            id: 2,
            title : "1. Camera configuration",
            no : "3 videos" ,
            icon : "angle-down",
            color : "#9ABF80",
            videos : [
                {
                    id : 1,
                    title : "1.Essential of camera configu...",
                    time : "4m 25s",
                    done : "check",
                    color : "#9ABF80"
                },
                {
                    id : 2,
                    title : "2.Setting camera storage",
                    time : "7m 12s",
                    done : "check",
                    color : "#9ABF80"
                },
                {
                    id : 3,
                    title : "3.Type of media",
                    time : "6m 48s", 
                    done : "check",
                    color :"#9ABF80"
                },
                {
                    id : 4,
                    title : "4.Understanding camera lenses",
                    time : "2m 41s",
                    done : "check",
                    color : "#9ABF80"
                },
            ],
            done : "check",
        },
        {
            id: 3,
            title : "2. Exposures",
            no : "7 videos",
            icon : "angle-right",
            done : "check",
            color : "#686D76"
        },
        {
            id: 4,
            title : "3. Photo composition",
            no : "7 videos",
            icon : "angle-right",
            done : "check",
            color : "#686D76"
        },
        {
            id: 5,
            title : "Skill test",
            no : "3 videos", 
            icon : "angle-right",
            done : "check",
            color : "#686D76"
        },
    ]


    return(
        <View style={style.overviewsContainer}>
            <Text style={style.title}>Course Overview</Text>

            {
                overviews.map(overview => <Overview key={overview.id} overview={overview}></Overview>)
            }
        </View>
    )
}

export default Overviews


const style= StyleSheet.create({
    overviewsContainer : 
    {
        padding: "5%"
    },
    title : 
    {
        
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical : 20
    }
})