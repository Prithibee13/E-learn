import { StyleSheet, Text, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const Category = (props) => {
    const { item } = props
    const { icon, title } = item


    return (
        <View style={styles.iconContainer}>
            <FontAwesome5 name={icon} size={32} color="#686D76" />
            <Text>{title}</Text>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    iconContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 20,
        shadowColor: '#52006A',
    }
})