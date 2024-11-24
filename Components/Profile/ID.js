import { Image, StyleSheet, View } from "react-native"
import Header from "../../UI/Header/Header"
import Monicar from "../../UI/Monicar/Monicar"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const ID = () => {
    return (
        <View style={Style.IDContainer}>
            <View>
                <Image style={Style.profileImage} source={{ uri: "https://i.postimg.cc/NF4VcVdx/pixA.jpg" }} />
            </View>
            <View>
                <Header>Sally Robins</Header>
                <View style={Style.IdLocation}>
                <View>
                        <FontAwesome5 name="map-pin" size={20} color="#686D76" />
                    </View>
                    <View>
                        <Monicar>New York</Monicar>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ID

const Style = StyleSheet.create({
    IDContainer:
    {
        marginVertical: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    IdLocation :
    {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly'
        
    }
})