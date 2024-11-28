import { StyleSheet, Text, View } from "react-native"
import { ProgressBar } from "react-native-paper"

const DayBars = (props) => {
    const { item } = props
    const { day, value } = item
    return (
        <View style={styles.dayContainer}>
            <View>
                <Text style={styles.dayText}>{day}</Text>
            </View>
            <View style={styles.progressContainer}>
                <ProgressBar style={{ height: 25, borderRadius: 10 }} progress={value} color="#00FF9C" />
            </View>
        </View>
    )
}

export default DayBars

const styles = StyleSheet.create({
    dayContainer: {
        flexDirection: 'row',
        columnGap: 20,
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    progressContainer :
    {
        width : '80%',
        marginVertical : 10,
    },
    dayText : {
        fontSize : 18,
        color : '#686D76',
        fontWeight:'bold'
    }
})