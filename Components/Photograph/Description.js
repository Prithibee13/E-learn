import { StyleSheet, Text, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Description = () =>
{
    return(
        <View style={styles.DescriptionContainer}>
           
        <View>
            <Text style={styles.courseTitle}>Becoming a Photographer</Text>
        </View>
                
            <View>
                <View style={styles.rateContainer}>
                    <View>
                        <FontAwesome5 name="clock" size={20} color="#686D76" />
                    </View>
                    <View>

                        <Text style={styles.rate}>43m</Text>
                    </View>

                </View>
                <View style={styles.rateContainer}>
                    <View>

                        <FontAwesome5 name="star" size={20} color="#686D76" />
                    </View>
                    <View>

                        <Text style={styles.rate}>4.7/5.0</Text>
                    </View>
                </View>
            </View>
            <View style={styles.CourseDescriptionContainer}>
                <Text style={styles.descriptionTitel}>Course Description</Text>
                <Text style={styles.description}>This online Course created for you if you interested in taking great digital photos and how to make your  photography unique and outstanding.</Text>
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
    
    rateContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        columnGap : 10,
        marginVertical : '2%',
        paddingHorizontal :"2%"
    },
    CourseDescriptionContainer :{
        marginVertical : '10%',
        marginRight : 20
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