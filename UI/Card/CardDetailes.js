import { StyleSheet, Text, View } from "react-native"
import Header from "../Header/Header"
import Monicar from "../Monicar/Monicar"

import FontAwesome from '@expo/vector-icons/FontAwesome';

const CardDetailes = (props) => 
{
    const { title, monicar, color } = props
    return(
        <View style={Styles.detailesContainer}>
            <View style={Styles.headerContainer}>
                <View style={Styles.headerDetailes}>
                    <Header>{title}</Header>
                    <Monicar>{monicar}</Monicar>
                </View>
                <View>
                    <FontAwesome size={20} name="bookmark" color={color}></FontAwesome>
                </View>
            </View>
        </View>
    )

}

export default CardDetailes

const Styles = StyleSheet.create({
    detailesContainer :{
        
       marginTop : '3%'
    },
    headerContainer : 
    {
        flexDirection : "row",
        justifyContent:'space-between',
        width : '75%',
        columnGap : 20,
    },
    headerDetailes : 
    {
        marginHorizontal : '10%'
    }
})