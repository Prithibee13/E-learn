import { StyleSheet, Text, View } from "react-native"

const SaveHeader = () =>
{
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Saved Courses</Text>
        </View>
    )
}

export default SaveHeader

const styles = StyleSheet.create({

    headerContainer : 
    {
        backgroundColor: '#FEFAF6',
        borderRadius: 15,
        paddingHorizontal : 16,
        paddingVertical : '5%',
    
    },
    headerText : 
    {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
       
        color : "#686D76"
    }
})