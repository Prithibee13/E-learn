import { ScrollView, View } from "react-native"
import Saves from "../Components/Saved/Saves"
import SaveHeader from "../Components/Saved/SaveHeader"

const SavedScreen = () =>
{
    return(
        <ScrollView>
            <SaveHeader></SaveHeader>
            <Saves></Saves>
        </ScrollView>
    )
}

export default SavedScreen