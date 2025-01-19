import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Information from '../components/Information'

export default function CourseInformationScreen() {
    return (
        <ScrollView>
            <Information
                title="Angular Eğitimi"
                imageSource={require("../assets/angular.jpg")}
                desc="Kapsamlı angular eğitimi"
            />
            <Information
                title="Kapsamlı Bootstrap eğitimi"
                imageSource={require("../assets/bootstrap5.png")}
                desc="Kapsamlı Bootstrap eğitimi"
            />
            <Information
                title="C Programlama Eğitimi"
                imageSource={require("../assets/c.png")}
                desc="Kapsamlı C Programlama Eğitimi"
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})