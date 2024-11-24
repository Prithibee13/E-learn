import { StyleSheet, View } from "react-native"
import CardDetailes from "../../UI/Card/CardDetailes"
import CardImg from "../../UI/Card/CardImg"

const Course = (props) => {
    const { course } = props
    const { title, name, img , color} = course
    return (
        <View style={styles.card}>
            <View>
                <CardImg url={img} ></CardImg>
            </View>

            <View>
                <CardDetailes title={title} monicar={name} color={color}></CardDetailes>
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
       
        
    }
})