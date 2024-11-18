import { Pressable, StyleSheet, Text } from "react-native"
import { View } from "react-native"

const Button = (props) =>
{
    const {color, background, marginVertical, radius, padding, fontSize, fontWeight} = props

    const styles = 
    {
        backgroundColor : background,
        borderRadius : radius,
        marginVertical : marginVertical   
    }
    return(
        <View style={styles}>
            <Pressable style={{padding : padding}} android_ripple={{color : '#eee'}}>
                <Text style={[style.BtnText, {fontSize:fontSize, fontWeight:fontWeight}]}>{props.children}</Text>
            </Pressable>
        </View>
    )
}


export default Button
const style = StyleSheet.create({
    BtnText :
    {
        color : '#fff',
        textAlign : 'center'
    }
})