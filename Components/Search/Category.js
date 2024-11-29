import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Checkbox } from "react-native-paper"
import Button from "../../UI/Button/Buton"

const Category = () => {
    const [checked, setChecked] = useState(true)

    const handleChecked = () => {
        setChecked(!checked)
    }
    return (
        <View style={styles.categoriesContainer}>
            <Text style={styles.categoriesHeading}>Categories</Text>
            <View style={styles.checkerContainer}>
                <View>
                    <Checkbox color="#00FF9C" status={checked ? 'checked' : 'unchecked'} onPress={handleChecked}></Checkbox>
                </View>
                <View>
                    <Text style={styles.checkText}>Sales</Text>
                </View>
            </View>
            <View style={styles.checkerContainer}>
                <View>
                    <Checkbox color="#00FF9C" status={checked ? 'checked' : 'unchecked'} onPress={handleChecked}></Checkbox>
                </View>
                <View>
                    <Text style={styles.checkText}>HR</Text>
                </View>
            </View>
            <View style={styles.checkerContainer}>
                <View>
                    <Checkbox color="#00FF9C" status={checked ? 'checked' : 'unchecked'} onPress={handleChecked}></Checkbox>
                </View>
                <View>
                    <Text style={styles.checkText}>Drawing</Text>
                </View>
            </View>
            <View style={styles.checkerContainer}>
                <View>
                    <Checkbox color="#00FF9C" status={checked ? 'checked' : 'unchecked'} onPress={handleChecked}></Checkbox>
                </View>
                <View>
                    <Text style={styles.checkText}>Big Data</Text>
                </View>
            </View>

            <Button padding="5%" background="#00FF9C" marginVertical="10%" radius={20} fontSize={25} fontWeight="bold">SHOW RESULTS</Button>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    categoriesContainer:
    {
        padding: '5%'
    },
    categoriesHeading:
    {
        fontSize: 25,
        color: '#686D76',
        fontWeight: 'bold',
    },
    checkerContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5,
        padding : '2%'
    },
    checkText : 
    {
        fontSize : 25,
        color: '#686D76'
    }
})