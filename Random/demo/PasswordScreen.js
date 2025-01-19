import { StyleSheet, Text, View, TextInput } from 'react-native'
import React,{useState}from 'react'

export default function PasswordScreen() {
const [password, setPassword] = useState("")
  return (
    <View style={styles.View}>
      <Text>Şifre Giriniz:</Text>
      <TextInput
      style={styles.textInput}
      autoCapitalize='none'
      autoCorrect={true}
      value={password}
      onChangeText={(newValue)=>setPassword(newValue)}
      />
     {password .length <6 ? <Text>
        Şifre en az 6 karakterli olmalıdır</Text> : null}
    </View>

  )
}

const styles = StyleSheet.create({
    View:{
        margin:20,
    },
    textInput:{
        borderColor:"black",
        borderWidth:1,
        padding:8
    }

})



