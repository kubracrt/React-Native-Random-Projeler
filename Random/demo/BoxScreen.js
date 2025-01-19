import React, { useState } from 'react';
import { View, Button, FlatList ,Text} from 'react-native';

export default function BoxScreen() {
    const [box, setBox] = useState([]);

    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    };

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Button
                title="Yeni bir kutu oluşturmak için tıklayınız"
                onPress={() => setBox([...box, randomColor()])}
            />
            <FlatList
                data={box}
                numColumns={3} 
                renderItem={({ item }) => (
                    <View
                    style={{
                        height: 50,
                        width: 100,
                        backgroundColor: item,
                        margin: 15,
                        justifyContent: 'center', 
                        alignItems: 'center', 
                    }}
                >
                    <Text
                        style={{
                            color: '#fff', 
                            fontWeight: 'bold',  
                            fontSize:12
                        
                        }}
                    >
                        {`Kutu ${box + 1}`}
                    </Text>
                </View>
            )}
        />
    </View>
    );
}
