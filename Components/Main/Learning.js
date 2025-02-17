import { Pressable, StyleSheet, Text, View } from "react-native"
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

    const pushPhoto = () =>
    {
        router.push('/photography')
    }
    return (
        <View>
            <Header>My Learning</Header>
            <Pressable onPress={pushPhoto}>
                <View style={Styles.Card}>
                    <View>
                        <CardImg url="https://i.postimg.cc/yNDkNvmn/pix4.jpg"></CardImg>
                    </View>
                    <View>
                        <CardDetailes title='Becoming a Photographer' monicar="Clara Manning" colo="#686D76"></CardDetailes>
                        <View style={Styles.cardprogressContainer}>

                            <ProgressBar style={{ height: 8, borderRadius: 5 }} progress={0.69} color="#00FF9C" />
                            <Text style={Styles.cardProress}>69% completed</Text>

                        </View>

                    </View>
                </View>
            </Pressable>

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
    cardprogressContainer:
    {
        width: '70%',
        marginHorizontal: '10%'
    },
    cardProress: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#686D76',
        marginTop: 10
    }
}
)