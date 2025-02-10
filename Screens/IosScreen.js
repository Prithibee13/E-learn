import { ScrollView, View } from "react-native"
import Header from "../Components/Ios/Header"
import Description from "../Components/Ios/Description"
import OverViews from "../Components/Ios/Overviews"
import BuyBtn from "../Components/Ios/BuyBtn"

const IosScreen = () => {
    return (
        <View>

            <ScrollView>
                <Header></Header>
                <Description></Description>
                <OverViews></OverViews>
            </ScrollView>
            <BuyBtn></BuyBtn>
        </View>
        
    )
}

export default IosScreen