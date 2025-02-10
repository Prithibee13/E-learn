import { Tabs } from "expo-router"

import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabLayout = () =>
{
    return (
        <Tabs  screenOptions={{ tabBarActiveTintColor: '#00FF9C', tabBarStyle :{
            paddingHorizontal :'2%',
            height : 75
            
        } }}>
            <Tabs.Screen name="landing" options={{
                title: 'Home',
                headerShown : false,
                tabBarIcon: ({ color }) => <FontAwesome size={30} name="home" color={color} />,tabBarLabelStyle: {
                    fontSize : 18,
                    fontWeight : 'bold',
                }
            }}></Tabs.Screen>
            <Tabs.Screen name="search" options={{
                title: 'Search',
                headerShown : false,
                tabBarIcon: ({ color }) => <FontAwesome size={30} name="search" color={color}/>, 
                tabBarLabelStyle: {
                    fontSize : 18,
                    fontWeight : 'bold',
                }}}></Tabs.Screen> 
            <Tabs.Screen name="courses" options={{
                title: 'Courses',
                headerShown :false,
                tabBarIcon: ({ color }) => <FontAwesome size={30} name="play-circle" color={color}/>,tabBarLabelStyle: {
                    fontSize : 18,
                    fontWeight : 'bold',
                }}}></Tabs.Screen>
            <Tabs.Screen name="saved" options={{
                title: 'Saved',
                headerShown :false,
                tabBarIcon: ({ color }) => <FontAwesome size={30} name="bookmark" color={color}/>,tabBarLabelStyle: {
                    fontSize : 18,
                    fontWeight : 'bold',
                }}}></Tabs.Screen>
            <Tabs.Screen name="handle" options={{
                title: 'Profile',
                
                headerShown :false,
                tabBarIcon: ({ color }) => <FontAwesome size={30} name="user-circle" color={color}/>,tabBarLabelStyle: {
                    fontSize : 18,
                    fontWeight : 'bold',
                }}}></Tabs.Screen>

        </Tabs>
    )
}

export default  TabLayout