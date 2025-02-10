import { StyleSheet, Text, View } from "react-native"

const BuyBtn = () =>
{
    return(
       <View style ={Styles.StickyBtn}>
            <View style={Styles.BtnContainer}>
                <Text style={Styles.btnText}>Buy</Text>
            </View>
       </View>
    )
}

export default BuyBtn

const Styles = StyleSheet.create({
    StickyBtn :{
        padding : '5%',
        position : "absolute",
        bottom : 20,
        left : 0,
        right : 0,
        alignItems: "center",
        zIndex : 20
    },
    BtnContainer : {
        backgroundColor : "#00FF9C",
        width : "95%",
        height : 75,
        padding : '5%',
        margintop : '5%',
        borderRadius : 20,
        marginHorizontal : 'auto'

    },
    btnText : {
        color :'#fff',
        textAlign : 'center',
        fontSize : 25,
        fontWeight : 'bold'
    }
})