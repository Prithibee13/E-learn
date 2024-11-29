import { View } from "react-native"
import SearchBar from "../Components/Search/Searchbar"
import Popular from "../Components/Search/Popular"
import Category from "../Components/Search/Category"

const SearchScreen = () =>{
    return(
        <View>
           <SearchBar></SearchBar>
           <Popular></Popular>
           <Category></Category>
        </View>
    )
} 

export default SearchScreen