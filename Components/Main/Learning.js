import { StyleSheet, Text, View } from "react-native"
import Header from "../../UI/Header/Header"
import Button from "../../UI/Button/Buton"
import CardImg from "../../UI/Card/CardImg"
import CardDetailes from "../../UI/Card/CardDetailes"
import { router } from "expo-router"
import { MD3Colors, ProgressBar } from "react-native-paper"

const Learning = () => {

    const Nav = () => {
        router.push('/(tabs)/courses')
    }
    return (
        <View>
            <Header>My Learning</Header>
            <View style={Styles.Card}>
                <View>
                    <CardImg url="https://i.postimg.cc/yNDkNvmn/pix4.jpg"></CardImg>
                </View>
                <View>
                    <CardDetailes title='Becoming a Photographer' monicar="Clara Manning" colo="#686D76"></CardDetailes>
                    <View style={Styles.cardprogressContainer}>
                        
                    <ProgressBar Styles={Styles.cardProress} progress={0.69} color="#000" />
                    <Text>69% completed</Text>

                    </View>

                </View>
            </View>
            <Button nav={Nav} padding="5%" background="#00FF9C" marginVertical="10%" radius={20} fontSize={25} fontWeight="bold">See All</Button>


        </View>
    )
}

export default Learning

const Styles = StyleSheet.create({
    Card:
    {
        padding: "3%",
        flexDirection: 'row',
        marginVertical: "10%",
        backgroundColor: "#fff",
        elevation: 10,
        borderRadius: 25

    },
    cardprogressContainer : 
    {
        width : '70%',
        marginLeft : '5%'
    },
    cardProress : {
        height : 20
    }
}
)