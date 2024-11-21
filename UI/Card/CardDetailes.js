import { StyleSheet, Text, View } from "react-native"
import Header from "../Header/Header"
import Monicar from "../Monicar/Monicar"

import FontAwesome from '@expo/vector-icons/FontAwesome';

const CardDetailes = () => 
{
    return(
        <View style={Styles.detailesContainer}>
            <View style={Styles.headerContainer}>
                <View>
                    <Header>Becoming a Photographer</Header>
                    <Monicar>Clara Manning</Monicar>
                </View>
                <View>
                    <FontAwesome size={28} name="bookmark" color={'#686D76'}></FontAwesome>
                </View>
            </View>
        </View>
    )

}

export default CardDetailes

const Styles = StyleSheet.create({
    detailesContainer :{
        
        width : '80%'
    },
    headerContainer : 
    {
        flexDirection : "row",
        justifyContent:'space-evenly'
    }
})