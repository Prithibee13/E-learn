import { StyleSheet, View } from "react-native"
import Header from "../../UI/Header/Header"
import Performance from "./Performance"

const Performances = () =>
{
    const performance = [
        {
            id : 1 ,
            icon :'book',
            title: 'Time spent',
            hours : '31.8 hours',
            color : '#0D92F4',
            r : 13,
            g : 146,
            b : 244
        },
        {
            id:2,
            icon: 'chart-bar',
            title : "Average/day",
            hours: '4.6 hours',
            color : '#FF7F3E',
            r : 255,
            g : 127,
            b : 62
        },
        {
            id: 3,
            icon:'check-double',
            title: 'Finished Courses',
            hours:'12 courses',
            color : '#9ABF80',
            r : 154,
            g : 191,
            b : 128
        }
    ]
    return(
        <View style={styles.performanceContainer}> 
            <Header>My Performances</Header>

            <View>
                {
                    performance.map(performance=><Performance key={performance.id} item={performance}></Performance>)
                }
            </View>

        </View>
    )
}

export default Performances

const styles = StyleSheet.create({
    performanceContainer : 
    {
        padding : '5%'
    }
})
