import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";  
import { buttonStyles } from "../../style/buttonStyles";  

const ProfileHeader = () => {  
    return (  
        <View style={styles.container}>  
            {/* Profile Image */}
            <Image 
                style={styles.image} 
                source={{uri: 'https://png.pngtree.com/png-clipart/20221229/original/pngtree-hand-drawing-cartoon-career-woman-png-image_8823006.png'}} 
            />  
            
            <Text style={styles.text}>Abilla As Bebrianti</Text>  
            
            <View style={styles.counterContainer}>  
                <View style={styles.itemContainer}>  
                    <Text style={styles.numberText}>19</Text>  
                    <Text style={styles.labelText}>Age</Text>  
                </View>  
                <View style={styles.itemContainer}>  
                    <Text style={styles.numberText}>Music</Text>  
                    <Text style={styles.labelText}>Hobby</Text>  
                </View>  
                <TouchableOpacity style={buttonStyles.grayOutlinedButton}>  
                    <Text style={buttonStyles.grayOutlinedButtonText}>Edit Profile</Text>  
                </TouchableOpacity>  
            </View>  
            
            <View style={styles.bioContainer}>
                <Text style={styles.bioText}>Bio: A passionate reader and traveler who loves exploring new cultures.</Text>
            </View>

            {/* Additional Personal Information */}
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Location: Pekanbaru, Indonesia</Text>
                <Text style={styles.infoText}>Profession: Software Developer</Text>
                <Text style={styles.infoText}>Website: www.abillaasbebrianti.com</Text>
                <Text style={styles.infoText}>Instagram: @abillasbbrnti</Text>
            </View>
        </View>  
    );  
}  

export default ProfileHeader;  

const styles = StyleSheet.create({  
    container: {  
        paddingVertical: 20,  
        alignItems: "center",  
        borderBottomWidth: 1,  
        borderColor: "lightgray",  
    },  
    image: {  
        width: 100,  
        height: 100,  
        borderRadius: 50,  
        marginBottom: 10,  
    },  
    text: {  
        fontSize: 16,  
        fontWeight: "bold",  
        marginTop: 8,  
    },  
    counterContainer: {  
        flex: 1,  
        flexDirection: "row",  
        padding: 6,  
        alignItems: "center",  
        justifyContent: "center",  
    },  
    itemContainer: {  
        alignItems: "center",  
        margin: 10,  
        justifyContent: "space-between",  
        width: 70,  
    },  
    numberText: {  
        fontWeight: "bold",  
        fontSize: 16,  
    },  
    labelText: {  
        color: "gray",  
        fontSize: 11,  
        fontWeight: "bold",  
    },  
    bioContainer: {  
        marginTop: 15,  
        paddingHorizontal: 20,  
    },  
    bioText: {  
        fontSize: 14,  
        color: "gray",  
        textAlign: "center",  
    },  
    infoContainer: {  
        marginTop: 20,  
        paddingHorizontal: 20,  
        alignItems: "center",  
    },  
    infoText: {  
        fontSize: 14,  
        color: "gray",  
        marginVertical: 5,  
    },  
});  
