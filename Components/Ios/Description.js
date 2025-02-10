import { StyleSheet, Text, View } from "react-native"
import Button from "../../UI/Button/Buton"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Description = () => {
    return (
        <View style={styles.DescriptionContainer}>
            <View style={styles.TitleContainer}>
                <View>
                    <Text style={styles.courseTitle}>Building iOS15 App</Text>
                </View>
                <View>
                    <Button width={100} padding="1%" background="#00FF9C" radius={20} fontSize={25} fontWeight="bold">$24</Button>
                </View>
            </View>
            <View>
                <View style={styles.rateContainer}>
                    <View>
                        <FontAwesome5 name="clock" size={20} color="#686D76" />
                    </View>
                    <View>

                        <Text style={styles.rate}>1h 13m</Text>
                    </View>

                </View>
                <View style={styles.rateContainer}>
                    <View>

                        <FontAwesome5 name="star" size={20} color="#686D76" />
                    </View>
                    <View>

                        <Text style={styles.rate}>5.0/5.0</Text>
                    </View>
                </View>
            </View>
            <View style={styles.CourseDescriptionContainer}>
                <Text style={styles.descriptionTitel}>Course Description</Text>
                <Text style={styles.description}>In this course you will learn how to build iOS app. We will go through the whole process begining with the first line of code, managing the user interface storyboard and create logic</Text>
            </View>
        </View>
    )
}


export default Description

const styles = StyleSheet.create({
    DescriptionContainer: {
        marginTop: "10%",
        padding: '5%'
    },
    TitleContainer:
    {
        marginVertical: '5%',
        flexDirection : 'row',
        justifyContent: 'space-between',
        lignItems : 'center'
    },
    rateContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        columnGap : 10,
        marginVertical : '2%',
        paddingHorizontal :"2%"
    },
    CourseDescriptionContainer :{
        marginVertical : '10%'
    },
    courseTitle:
    {
        fontSize: 30,
        fontWeight: 'bold'
    },
    descriptionTitel : {
        fontSize : 30,
        fontWeight : 'bold',
        marginBottom : '5%'
    }, 
    description : {
        fontSize : 27,
        color : '#686D76'
    },
    rate : 
    {
        fontSize : 20, 
        color : '#686D76'
    }
    
})