import React from 'react';
import { init, trans} from './IMLocalized';
import { View, StyleSheet, Text } from 'react-native';
export default function App() {
  init()
  return(
      <View style={styles.container} >
          <Text style={styles.welcomeText} >
              {trans('welcome')}
          </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  welcomeText: {
      fontSize: 16,
  }
})
