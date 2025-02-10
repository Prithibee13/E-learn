import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import Save from "./Save"
import { router } from "expo-router"

const Saves = () =>
{

    const saved  = [
        {
            id:1,
            title : 'Typeface Design',
            name: 'Gary Saltz',
            img : 'https://i.postimg.cc/sX7FjNs1/martin-sanchez-4w-Sa-D5-ZXchg-unsplash.jpg',
            r : 0,
            g : 256,
            b :156
        },
        {
            id:2,
            title : 'Building ios15 App',
            name: 'Tom Collins',
            img : 'https://i.postimg.cc/mrKh1CV4/pix5.jpg',
            r : 0,
            g : 256,
            b :156
        },
        {
            id:3,
            title : 'Excel: formulas and functions',
            name: 'Mike Kurtish',
            img : 'https://i.postimg.cc/N0XCm2Vz/pankaj-patel-fv-Me-P4ml4b-U-unsplash.jpg',
            r : 0,
            g : 256,
            b :156
        },
    ]

    const handleSaveCourse = (id) =>
    {
        if (id == 2)
        {
            router.push('/ioscourse')   
        }
    }

    return(
        <ScrollView style={styles.savedContainer}>
            {
                saved.map(save=><Save key={save.id} press = {handleSaveCourse} item={save}></Save>)
            }
        </ScrollView>
    )
}

export default Saves

const styles = StyleSheet.create({
    savedContainer : 
    {
        padding : '6%'
    }
})
