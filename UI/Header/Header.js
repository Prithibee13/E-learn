import { StyleSheet, Text } from "react-native"

const Header = (props) =>
{
    return(
        <Text style={Styles.HerderText}>{props.children}</Text>
    )
}

export default Header

const Styles = StyleSheet.create({
    HerderText : 
    {
        fontWeight :'bold',
        fontSize : 30
    }
})