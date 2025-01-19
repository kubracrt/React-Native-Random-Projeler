import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Tasarım() {
  return (
    <View style={styles.View}> 
     <View  style={styles.View1}></View>
     <View  style={styles.View2}></View>
     <View  style={styles.View3}></View>
     <View  style={styles.View4}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    View:{
        borderWidth:2,
        width:"100%",
        height:"100%",
      
    },
    View1:{
        width:100,
        height:150,
        backgroundColor:"red",
        top:0,
        right:0,
        position:'absolute'

    },
    View2:{
        width:100,
        height:150,
        backgroundColor:"blue",
        top:0,
        left:0,
        position:'absolute'


    },
    View3:{
        width:100,
        height:150,
         backgroundColor:"green",
         bottom:0,
         left:0,
         position:'absolute'

    },
    View4:{
        width:100,
        height:150,
        backgroundColor:"yellow",
        bottom:0,
        right:0,
        position:'absolute',

        
    },

})