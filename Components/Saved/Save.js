import { StyleSheet, View } from "react-native"
import CardImg from "../../UI/Card/CardImg"
import CardDetailes from "../../UI/Card/CardDetailes"

const Save = (props) =>
{
    const { item } = props
    const { title , name ,img } = item
    return(
        <View style={Style.saveContainer}>
            <CardImg url={img}></CardImg>
            <CardDetailes title={title} monicar={name} color="#00FF9C"></CardDetailes>
        </View>
    )
}
export default Save

const Style = StyleSheet.create({
    saveContainer : 
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