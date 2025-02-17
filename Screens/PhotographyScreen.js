import { ScrollView, View } from "react-native"
import Header from "../Components/Photograph/Header"
import Description from "../Components/Photograph/Description"
import Overviews from "../Components/Photograph/Overviews"

const PhotographyScreen = () =>
{
    return(
        <ScrollView>
            <Header></Header>
            <Description></Description>
            <Overviews></Overviews>
        </ScrollView>
    )
}

export default PhotographyScreen