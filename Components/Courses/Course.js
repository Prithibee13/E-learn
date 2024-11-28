import { StyleSheet, Text, View } from "react-native"
import CardDetailes from "../../UI/Card/CardDetailes"
import CardImg from "../../UI/Card/CardImg"
import { ProgressBar } from "react-native-paper"

const Course = (props) => {
    const { course } = props
    const { title, name, img , color, complete, progress} = course
    return (
        <View style={styles.card}>
            <View>
                <CardImg url={img} ></CardImg>
            </View>

            <View>
                <CardDetailes title={title} monicar={name} color={color}></CardDetailes>
                <View style={styles.cardprogressContainer}>
                        
                    <ProgressBar Styles={styles.cardProress} progress={progress} color="#00FF9C" />
                    <Text>{complete} completed</Text>

                    </View>
            </View>
        </View>
    )
}

export default Course

const styles = StyleSheet.create({
    card:
    {  
        width : "100%",
        backgroundColor: "#FFF",
        elevation: 10,
        flexDirection: 'row',
        marginVertical: "10%",
        backgroundColor: "#fff",
        padding: '3%',
        borderRadius: 25, 
    },
    cardprogressContainer : 
    {
        width : '70%',
        marginLeft : '5%',
    },
    cardProress : {
        height : 20,
        marginVertical : 5
    }
})