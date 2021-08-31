import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Task({ text }) {
    return (
        <View>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
