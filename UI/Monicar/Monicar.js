import { StyleSheet, Text } from "react-native"

const Monicar = (props) =>
{
    return(
        <Text style={Styles.Name}>{props.children}</Text>
    )
}

export default Monicar 

const Styles = StyleSheet.create({
    Name : {
        fontSize : 20,
        color : "#686D76"
    }
})