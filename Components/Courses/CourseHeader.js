import { StyleSheet, Text, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const CourseHeader = () => {
    return (
        <View style={style.HeaderContainer}>
            
            <Text style={style.headerText}>Courses</Text>
            
            <FontAwesome5 style={StyleSheet.icon} name="chart-bar" size={30} color="#686D76" />
            

        </View>
    )
}

export default CourseHeader
const style = StyleSheet.create({
    HeaderContainer:
    {
        backgroundColor: '#FEFAF6',
        borderRadius: 15,
        flexDirection : 'row',
        paddingHorizontal : 16,
        paddingVertical : '5%',
        justifyContent :'space-between',
        alignItems : 'center'

    },
    headerText: {
        fontSize: 30,
        fontWeight: 'semibold',
        textAlign: 'center',
        flex : 1,
        color : "#686D76"

    },
    
})