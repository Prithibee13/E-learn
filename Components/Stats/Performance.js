import { StyleSheet, Text, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Header from "../../UI/Header/Header";

const Performance = (props) => {
    const { item } = props
    const { icon, color, r, g, b, title, hours } = item
    return (
        <View style={styles.performanceCOntainer}>
            <View style={styles.mainContainer}>
                <View style={[{ backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`, padding: '10%', borderRadius: 15 }]}>
                    <FontAwesome5 name={icon} color={color} size={35} />
                </View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Header>{hours}</Header>
                </View>
            </View>

            <View>
                <FontAwesome5 name="angle-right" size={40} color="#686D76" />
            </View>
        </View>
    )
}

export default Performance

const styles = StyleSheet.create({
    performanceCOntainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        elevation: 10,
        marginVertical: '5%',
        padding: '5%',
        borderRadius: 20
    },
    mainContainer : 
    {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        columnGap : 16
    },
    title : 
    {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#686D76',
        
    }
})