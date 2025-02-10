import { Pressable, StyleSheet, View } from "react-native"
import CardImg from "../../UI/Card/CardImg"
import CardDetailes from "../../UI/Card/CardDetailes"
import Button from "../../UI/Button/Buton"

const Save = (props) => {
    const { item, press } = props
    const { title, name, img, id } = item
    return (
        <Pressable onPress={()=>press(id)}>
             <View style={Style.saveContainer}>
            <View>

                <CardImg url={img}></CardImg>
            </View>
            <View>

                <CardDetailes title={title} monicar={name} color="#00FF9C"></CardDetailes>
                <View style={Style.btnContainer}>
                    <Button width={100}  padding="2%" background="#00FF9C" marginVertical="10%" radius={20} fontSize={25} fontWeight="bold">Buy</Button>
                </View>
            </View>
        </View>
        </Pressable>
       
    )
}
export default Save

const Style = StyleSheet.create({
    saveContainer:
    {
        backgroundColor: "#FFF",
        elevation: 10,
        flexDirection: 'row',
        marginVertical: "10%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 25,
        width : '100%',
    },
    btnContainer : 
    {
        marginHorizontal : '10%'
    }
})