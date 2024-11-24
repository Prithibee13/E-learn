import { ScrollView, StyleSheet, View } from "react-native"
import Course from "./Course"

const Courses = () =>
{
    const courses =
    [
        {
            id : 1,
            title : "Becoming a Photographer",
            name : "Clara Manning",
            img: "https://i.postimg.cc/yNDkNvmn/pix4.jpg", 
            color : "#686D76"
        },
        {
            id: 2,
            title : "Design Thinking",
            name : "Chris Kinley",
            img: "https://i.postimg.cc/kg129kbB/pix3.jpg",
            color : "#686D76"
        },
        {
            id : 3,
            title : "Product Photography",
            name : "Lena Gold",
            img: "https://i.postimg.cc/L4LgfCrb/pix7.jpg",
            color : "#00FF9C"
        }

    ]
    return(
        <ScrollView>
            <View style={styles.cardItems}>
            {
                courses.map( course => <Course key={course.id} course = {course}></Course>)
            }
            </View>
            
        </ScrollView>
    )
}

export default Courses

const styles = StyleSheet.create({
    cardItems : 
    {
        padding: "5%"
    }
})