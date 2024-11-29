import { Tabs } from "expo-router"

import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabLayout = () =>
{
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#00FF9C' }}>
            <Tabs.Screen name="landing" options={{
                title: 'Home',
                headerShown : false,
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            }}></Tabs.Screen>
            <Tabs.Screen name="search" options={{
                title: 'Search',
                headerShown : false,
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color}/>}}></Tabs.Screen>
            <Tabs.Screen name="courses" options={{
                title: 'Courses',
                headerShown :false,
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="play-circle-o" color={color}/>}}></Tabs.Screen>
            <Tabs.Screen name="saved" options={{
                title: 'Saved',
                headerShown :false,
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="bookmark-o" color={color}/>}}></Tabs.Screen>
            <Tabs.Screen name="handle" options={{
                title: 'Profile',
                
                headerShown :false,
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-o" color={color}/>}}></Tabs.Screen>

        </Tabs>
    )
}

export default  TabLayout