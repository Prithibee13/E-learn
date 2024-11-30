import { StyleSheet, Text, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const Category = (props) => {
    const { item } = props
    const { icon, title , color, r,g,b} = item


    return (
        <View style={[styles.iconContainer]}>
            <FontAwesome5 name={icon} size={32} color={color || "#686D76"} />
            <Text style={[styles.categoryText, {color: color}]}>{title}</Text>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    iconContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#fff',
        borderRadius: 10,
        elevation: 20,
        padding : "5%",
        width : 100
        
    },
    categoryText :
    {
        fontSize : 15,
        marginVertical : 10

    }
})