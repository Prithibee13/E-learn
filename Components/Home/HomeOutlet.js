import { StyleSheet, Text, View } from "react-native"
import Header from "../../UI/Header/Header"
import Button from "../../UI/Button/Buton"
const HomeOutlet = () => {
    return (
        <View>
            <Header>Discover passion</Header>
            <View style={styles.outletContainer}>
                <Text style={styles.outlettext}>Find out topics you find interesting, Learn a new skill & connect with people that are passionate about simmilar topics....</Text>
            </View>
            <Button  padding="5%" background="#00FF9C" marginVertical="10%" radius={20} fontSize={25} fontWeight="bold">Get Started</Button>
        </View>
    )
}

export default HomeOutlet


const styles = StyleSheet.create({
    outletContainer : 
    {
        marginVertical : 10
    },
    outlettext:
    {
        fontSize : 20,
    }
})