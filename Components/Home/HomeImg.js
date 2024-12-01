import { Image, StyleSheet, Text, View } from "react-native"


const HomeImg = () => {
    return (
        <View style={styles.HomeContainer}>

            <Image style={styles.img} source={{ uri: "https://i.postimg.cc/W1bdB2tB/pix1.jpg" }}></Image>

        </View>
    )
}

export default HomeImg

const styles = StyleSheet.create({
    HomeContainer:
    {
        padding : '5%',
    }
    ,
    img:
    {
        width: 450,
        height: 300,
        marginVertical : '10%'
    }
})