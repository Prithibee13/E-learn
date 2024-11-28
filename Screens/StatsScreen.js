import { View } from "react-native"
import Performances from "../Components/Stats/Performances"
import ThisWeek from "../Components/Stats/ThisWeek"

const StatsScreen = () =>
{
    return(
        <View>
            <ThisWeek></ThisWeek>
            <Performances></Performances>
        </View>
    )
}

export default StatsScreen