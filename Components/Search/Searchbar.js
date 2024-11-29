import { StyleSheet, TextInput, View } from "react-native"

const SearchBar = () =>
{
    return(
        <View style={Style.barContainer}>
            <TextInput style={Style.input} placeholder="Search Courses"></TextInput>
        </View>
    )
}

export default SearchBar

const Style = StyleSheet.create({
    barContainer : {
        backgroundColor : '#fff',
        elevation : 5,
        padding : '5%',
        borderRadius : 10
    },
    input : {
        borderRadius : 15,
        borderColor : "#686D76",
        borderStyle :'solid',
        borderWidth : 1,
        padding : '2%',
        fontSize : 20
    }
}
)