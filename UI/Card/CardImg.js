import { Image, StyleSheet, View } from "react-native"

const CardImg = (props) =>
{
    const { url } = props
    return(
        <View>
            <Image style={Style.cardImg} source={{ uri : url}}/>
        </View>
    )
}

export default CardImg
const Style = StyleSheet.create({
    cardImg :
    {
        height : 300,
        width : 200,
        borderRadius : 25
    }
})