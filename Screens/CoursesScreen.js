import { View } from "react-native"
import Courses from "../Components/Courses/Courses"
import CourseHeader from "../Components/Courses/CourseHeader"

const CoursesScreen = () =>
{
    return(
        <View>
            <CourseHeader></CourseHeader>
            <Courses></Courses>
        </View>
    )
}

export default CoursesScreen
