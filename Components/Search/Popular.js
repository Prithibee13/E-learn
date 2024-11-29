import { StyleSheet, Text, View } from "react-native"
import Header from "../../UI/Header/Header"

const Popular = () => {
    return (
        <View style={style.popularContainer}>
            <Text style={style.popularHeader}>Top Search</Text>
            <View style={style.BtnContainer}>
                <View style={style.popularBtn}>
                    <Text style={style.btnText}>Marketing Strategy</Text>
                </View>
                <View style={[style.popularBtn, { borderWidth : 2 ,borderColor : '#00FF9C', backgroundColor :`rgba(0, 255, 156, 0.1)`}]}>
                    <Text style={[style.btnText,{color : '#00FF9C'}]}>UX Design</Text>
                </View>
            </View>
            <View style={style.BtnContainer}>
                <View style={style.popularBtn}>
                    <Text style={style.btnText}>Excel</Text>
                </View>
                <View style={style.popularBtn}>
                    <Text style={style.btnText}>Adobe Photoshop</Text>
                </View>
                <View style={style.popularBtn}>
                    <Text style={style.btnText}>CRM</Text>
                </View>
            </View>
            <View style={style.BtnContainer}>
                <View style={style.popularBtn}>
                    <Text style={style.btnText}>Photography</Text>
                </View>
                <View style={style.popularBtn}>
                    <Text style={style.btnText}>Content Making</Text>
                </View>
            </View>
        </View>
    )
}

export default Popular

const style = StyleSheet.create({
    popularContainer : 
    {
        marginVertical : '10%',
        padding : '5%'
    },
    popularBtn :
    {
        borderRadius : 25,
        borderWidth : 1,
        borderStyle : 'solid',
        padding : '3%',  
        borderColor : '#686D76',
        paddingHorizontal : '5%'
    },
    BtnContainer : {
        flexDirection : 'row',
        columnGap : 50,
        marginVertical : '2%',
        padding : '3%',
    },
    btnText : 
    {
        fontSize : 18,
        fontWeight :'semibold',
        color : '#686D76'
    },
    popularHeader : 
    {
        fontSize :25,
        fontWeight : 'bold',
        color : '#686D76',
        marginBottom : '5%'
    }
}
)