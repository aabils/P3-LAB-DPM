import React, { useState, useEffect } from "react";  
import { Button, Text, View } from "react-native";  

const LifeCycle = () => {  
    const [count, setCount] = useState(0);  

    useEffect(() => {  
        console.log("Component Did Mount");  

        return () => {  
            console.log("Component Will Unmount");  
        };  
    }, []);  

    useEffect(() => {  
        console.log("Component Did Update: Count berubah menjadi", count);  
    }, [count]);  

    const changeCount = () => {  
        setCount(count + 1);  
    };  

    return (  
        <View style={{ padding: 20 }}>  
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>  
                Life Cycle Component  
            </Text>  
            <Button title="Update Count" onPress={changeCount} />  
            <Text style={{ fontSize: 16, marginTop: 10 }}>Count: {count}</Text>  
        </View>  
    );  
};  

export default LifeCycle;