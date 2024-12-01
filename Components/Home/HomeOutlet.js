import { StyleSheet, Text, View } from "react-native"
import Header from "../../UI/Header/Header"
import Button from "../../UI/Button/Buton"
import { router } from "expo-router"
const HomeOutlet = (props) => {
   
    const toMain = () =>
    {
        router.push('/(tabs)/landing')
    }
    return (
        <View style={styles.outletContainer}>
            <Header>Discover passion</Header>
            <View style={styles.outletTextContainer}>
                <Text style={styles.outlettext}>Find out topics you find interesting, Learn a new skill & connect with people that are passionate about simmilar topics....</Text>
            </View>
            <Button nav = {toMain} padding="5%" background="#00FF9C" marginVertical="10%" radius={20} fontSize={25} fontWeight="bold">Get Started</Button>
        </View>
    )
}

export default HomeOutlet


const styles = StyleSheet.create({
   outletContainer :{
    padding : '5%'
   },

    outletTextContainer : 
    {
        marginVertical : 10
    },
    outlettext:
    {
        fontSize : 25,
    }
})