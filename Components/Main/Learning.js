import { StyleSheet, View } from "react-native"
import Header from "../../UI/Header/Header"
import Button from "../../UI/Button/Buton"
import CardImg from "../../UI/Card/CardImg"
import CardDetailes from "../../UI/Card/CardDetailes"
import { router } from "expo-router"

const Learning = () => {

    const Nav = () =>
    {
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
                    <CardDetailes title='Becoming a Photographer' monicar="Clara Manning"></CardDetailes>
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
        backgroundColor:"#fff",
        elevation: 10,
        borderRadius : 25

    }
}
)