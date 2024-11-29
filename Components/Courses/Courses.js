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
            color : "#686D76",
            complete : "69%",
            progress : 0.69,
            r : 104,
            g : 109,
            b :118
        },
        {
            id: 2,
            title : "Design Thinking",
            name : "Chris Kinley",
            img: "https://i.postimg.cc/kg129kbB/pix3.jpg",
            color : "#686D76",
            complete : "27%",
            progress : 0.27,
            r : 104,
            g : 109,
            b :118
        },
        {
            id : 3,
            title : "Product Photography",
            name : "Lena Gold",
            img: "https://i.postimg.cc/L4LgfCrb/pix7.jpg",
            color : "#00FF9C",
            complete : "11%",
            progress : 0.11,
            r : 0,
            g : 256,
            b :156
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