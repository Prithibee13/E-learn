import { StyleSheet, View } from "react-native"
import Header from "../../UI/Header/Header"
import Button from "../../UI/Button/Buton"
import CardImg from "../../UI/Card/CardImg"
import CardDetailes from "../../UI/Card/CardDetailes"

const Learning = () => {
    return (
        <View>
            <Header>My Learning</Header>
            <View style={Styles.Card}>
                <View>
                    <CardImg url="https://i.postimg.cc/yNDkNvmn/pix4.jpg"></CardImg>
                </View>
                <View>
                    <CardDetailes></CardDetailes>
                </View>
            </View>
            <Button padding="5%" background="#00FF9C" marginVertical="10%" radius={20} fontSize={25} fontWeight="bold">See All</Button>


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
        alignItems: 'center',
        elevation: 10

    }
}
)