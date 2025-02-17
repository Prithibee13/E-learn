import { ImageBackground, Pressable, StyleSheet, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ProgressBar } from "react-native-paper";


const Header = () => {
    return (
        <View>
            <ImageBackground style={styles.imgContainer} resizeMode="cover" source={{ uri: 'https://i.postimg.cc/yNDkNvmn/pix4.jpg' }}>
                <View style={styles.iconContainer}>
                    <Pressable>
                        <FontAwesome5 name="arrow-left" size={24} color="white" />
                    </Pressable>
                </View>
                <View style={styles.PausContainer}>

                    <FontAwesome5 name="pause" size={30} color="white" />
                </View>
                <View style={styles.ProgressContainer}>
                    <ProgressBar progress={0.5} color="#00FF9C" />
                </View>


            </ImageBackground>

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
        width: '100%',
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
    PausContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 'auto'
    },
    ProgressContainer : 
    {
        paddingHorizontal : '10%',
        paddingVertical : '5%' 
    }
})