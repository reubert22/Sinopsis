import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const DetailsScreen = ({ navigation }) => {
  const { selectedMovie } = navigation.state.params
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#000105' }}>

          <Text style={{ color: '#fff' }}>{selectedMovie.overview}</Text>

        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
export default DetailsScreen