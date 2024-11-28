import { StyleSheet, Text, View } from "react-native"
import Header from "../../UI/Header/Header"
import { ProgressBar } from "react-native-paper"
import DayBars from "./DayBars"

const ThisWeek = () => {
    const day = [
        {
            id: 1,
            day: 'Mon',
            value: 0.50
        },
        {
            id: 2,
            day: 'Tue',
            value: 0.40
        },
        {
            id: 3,
            day: 'Wed',
            value: 0.60
        },
        {
            id: 4,
            day: 'Thu',
            value: 0.50
        },
        {
            id: 5,
            day: 'Fri',
            value: 0.40
        },
        {
            id: 6,
            day: 'Sat',
            value: 0.50
        },
        {
            id: 7,
            day: 'Sun',
            value: 0.70
        }
    ]
    return (
        <View style={styles.weekContainer}>
            <View style={styles.headerContainer}>
                <Header>This Week</Header>
            </View>

            <View style={styles.statContainer}>
                <View style={styles.embalish}>
                    <Text style={ styles.statHeading }>Time Spent</Text>
                    <Header>31.8 hours</Header>
                </View>
                {
                    day.map(day => <DayBars key={day.id} item={day}></DayBars>)
                }
            </View>

        </View>
    )
}

export default ThisWeek

const styles = StyleSheet.create({
    weekContainer:
    {
        padding: '5%',
        marginVertical: '10%'
    },
    statContainer: {
        backgroundColor: '#fff',
        elevation: 15,
        padding: '5%',
        borderRadius: 25
    },
    headerContainer: {
        marginVertical: '5%'
    },
    embalish : 
    {
        marginVertical : '5%'
    },
    statHeading : {
        fontSize : 20,
        marginVertical : '2%',
        fontWeight : 'bold',
        color : '#686D76'
    }
})