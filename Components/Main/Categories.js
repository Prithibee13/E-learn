import { FlatList, StyleSheet, Text, View } from "react-native"
import UseCategory from "../../Hooks/UseCategory"
import Category from "./Category"
import PagerView from "react-native-pager-view"
import Header from "../../UI/Header/Header"


const Categories = () => {
    const categories = [
        {
            id: 1,
            icon: "chart-line",
            title: "Sales"
        },
        {
            id: 2,
            icon: "users",
            title: "HR"
        },
        {
            id: 3,
            icon: "drafting-compass",
            title: "Drawing"
        },
        {
            id: 4,
            icon: "database",
            title: "Big Data"
        }
    ]



    return (
        <View style={styles.catContaner}>
            <Header>Categories</Header>
            <View style={styles.gridContainer}>
                {
                    categories.map(item => <Category key={item.id} item={item}></Category>)
                }
            </View>

        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    catContaner:
    {
        marginVertical: 20
    },
    gridContainer :
    {
        flexDirection : 'row',
        columnGap : 30,
        justifyContent : 'space-evenly',
        marginVertical : 20
    }

})