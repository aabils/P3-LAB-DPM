
import { ScrollView, StyleSheet, View } from "react-native";  
import ProfileNavBar from "../../components/navbarProfil";  
import ProfileHeader from "../../components/headerProfil";  

const ProfileScreen = () => {  
    return (  
        <View style={styles.container}>  
            <ProfileNavBar />  
            <ScrollView>  
                <ProfileHeader />  
            </ScrollView>  
        </View>  
    );  
};  

export default ProfileScreen;  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: "white",  
    },  
});