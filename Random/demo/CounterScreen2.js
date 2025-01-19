import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "increment": return { ...state, count: state.count + action.payload }
        case "decrement": return { ...state, count: state.count - action.payload }
        default: state.count
    }
}

//state = count : 0
//action = incremnet, decrement & payload 

export default function CounterScreen2() {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <View>
            <Button
                title='Arttır'
                onPress={() => dispatch({ type: "increment", payload: 1 })}

            />
            <Button
                title='Azalt'
                onPress={() => dispatch({ type: "decrement", payload: 1 })}

            />
            <Text>{state.count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

