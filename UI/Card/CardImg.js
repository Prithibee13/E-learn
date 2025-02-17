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
        height : 180,
        width : 150,
        borderRadius : 25,
    }
})