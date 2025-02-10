import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { router } from "expo-router";

const Header = () => {

    const handleBack = () =>
    {
        router.push('/(tabs)/saved')
    }
    return (
        <View>
            <ImageBackground style={styles.imgContainer} resizeMode="cover" source={{ uri: 'https://i.postimg.cc/mrKh1CV4/pix5.jpg' }}>
                <View style={styles.iconContainer}>
                    <Pressable onPress={handleBack}>
                        <FontAwesome5 name="arrow-left" size={24} color="white" />
                    </Pressable>
                </View>

            </ImageBackground>

            
            <View style={styles.pills}>
                <View>

                    <Image style={styles.badgeImage} source={{ uri: 'https://i.postimg.cc/NF4VcVdx/pixA.jpg' }}></Image>
                </View>
                <View>
                    <Text>John Eames</Text>
                </View>
            </View>
        </View>
    )
}

export default Header


const styles = StyleSheet.create({
    HeaderImage:
    {
        width: '100%',
        height: 300
    },
    imgContainer:
    {
        width : '100%',
        height: 300,
    },
    iconContainer: {
        padding: '5%',
        position: 'absolute',
        top: 10,
        left: 20,
        borderRadius: 15
    },
    badgeImage:
    {
        width: 40,
        height: 40,
        borderRadius: 100
    },
    pills:
    {
        backgroundColor: '#fff',
        padding: '1%',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        borderRadius: 50,
        width: '40%',
        elevation: 10,
        top: -30,
        marginLeft: 20
    },
})