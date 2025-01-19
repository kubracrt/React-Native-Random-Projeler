import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <Text>Ana Ekran</Text>
      <Button
        title="Kurslar"
        onPress={() => navigation.navigate("Kurslarım")}
      />
      <Button
        title="Kurs Detayları"
        onPress={() => navigation.navigate("Kurs Bilgilerim")}
      />
      <Button
        title="Sayaç"
        onPress={() => navigation.navigate("Sayaç")}
      />
      <Button
        title="Kutu Oyunu"
        onPress={() => navigation.navigate("Kutu Oyunu")}
      />
      <Button
        title="Sayaç 2"
        onPress={() => navigation.navigate("Sayaç 2")}
      />
       <Button
        title="Şifre Ekranı"
        onPress={() => navigation.navigate("Şifre Ekranı")}
      />
        <Button
        title="Tasarım"
        onPress={() => navigation.navigate("Tasarım")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});