import { StyleSheet, Text, View } from "react-native"
import Header from "../Header/Header"
import Monicar from "../Monicar/Monicar"

import FontAwesome from '@expo/vector-icons/FontAwesome';

const CardDetailes = (props) => 
{
    const { title, monicar } = props
    return(
        <View style={Styles.detailesContainer}>
            <View style={Styles.headerContainer}>
                <View>
                    <Header>{title}</Header>
                    <Monicar>{monicar}</Monicar>
                </View>
                <View>
                    <FontAwesome size={20} name="bookmark" color={'#686D76'}></FontAwesome>
                </View>
            </View>
        </View>
    )

}

export default CardDetailes

const Styles = StyleSheet.create({
    detailesContainer :{
        
        width : '80%',
        padding : "2%"
    },
    headerContainer : 
    {
        flexDirection : "row",
        justifyContent:'space-between',

    }
})