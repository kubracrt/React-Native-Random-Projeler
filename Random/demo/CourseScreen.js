import { StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'

export default function CourseScreen() {
    const courses = [
        { name: "Angular", id: 1 },
        { name: "React Js", id: 2 },
        { name: "C#", id: 3 },
        { name: "C Programlama", id: 4 },
        { name: "Bootstrap", id: 5 },
    ];

    return (
        <FlatList
            data={courses}
            horizontal={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Text style={styles.content}>{item.name}</Text>
            )}
        />
    );
};


const styles = StyleSheet.create({
    content: {
        fontSize: 16,
        backgroundColor: "blue",
        marginVertical: 10,
        padding: 12,
    },
});
