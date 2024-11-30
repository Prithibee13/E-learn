import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Header from "../Header/Header";
import Button from "../Button/Buton";

const Card = () => {
    return (
        <View style={styles.cardContainer}>
            <View>
                <ImageBackground style={styles.imgContainer} resizeMode="cover" source={{ uri: 'https://i.postimg.cc/Yq0SM9n9/highway-393492-1920.jpg' }}>
                    <View style={styles.iconContainer}>
                        <FontAwesome5 name='bookmark' color='#F1F0E8' size={20}></FontAwesome5>
                    </View>

                </ImageBackground>
                <View style={styles.pills}>
                    <View>

                        <Image style={styles.badgeImage} source={{ uri: 'https://i.postimg.cc/NF4VcVdx/pixA.jpg' }}></Image>
                    </View>
                    <View>
                        <Text>John Eames</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: '5%' }}>
                <Header>Power BI</Header>
                <View style={styles.detailesCOntainer}>
                    <View style={styles.detaileCOntainer}>
                        <View>
                            <FontAwesome5 name='clock' color="#686D76" size={18}></FontAwesome5>
                        </View>
                        <View>
                            <Text style={styles.detaileText}>1h 53m</Text>
                        </View>
                    </View >
                    <View style={styles.detaileCOntainer}>
                        <View>
                            <FontAwesome5 name='star' color = "#686D76" size={18}></FontAwesome5>
                        </View>
                        <View>
                            <Text style={styles.detaileText}>4.9/5</Text>
                        </View>
                    </View>
                    <View>
                        <Button width={100} padding="2%" background="#00FF9C" radius={20} fontSize={25} fontWeight="bold">$24</Button>
                    </View>
                </View>
            </View>

        </View>
    )
}
export default Card


const styles = StyleSheet.create({
    cardContainer: {
        padding: '3%',
        backgroundColor: '#fff',
        elevation: 10,
        marginBottom: '5%',
        borderRadius: 20
    },
    imgContainer:
    {
        padding: '5%',
        borderRadius: 25,
        overflow: 'hidden',
        height: 200,
        marginVertical: '5%'
    },
    iconContainer: {
        padding: '5%',
        position: 'absolute',
        top: 10,
        right: 20,
        backgroundColor: `rgba(104,109,118,0.2)`,
        borderRadius: 15
    },
    detailesCOntainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: "3%"
    },
    detaileCOntainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    },
    badgeImage:
    {
        width: 40,
        height: 40,
        borderRadius: 100
    },
    pills:
    {
        backgroundColor: '#fff',
        padding: '1%',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        borderRadius: 50,
        width: '40%',
        elevation: 10,
        top: -50,
        marginLeft: 20
    },
    detaileText : 
    {
        fontSize : 18,
        color : '#686D76'
    }

})