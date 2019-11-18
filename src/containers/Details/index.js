import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import { BaseButton } from 'react-native-gesture-handler'
import { posterOriginal } from '../../utils/constants'

const DetailsScreen = ({ navigation }) => {
  const { selectedMovie } = navigation.state.params
  console.log(selectedMovie)
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#000105' }} />
      <ScrollView style={{ flex: 1, backgroundColor: '#000105' }}>
        <FastImage
          style={{
            width: '100%',
            height: 300,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={{
            uri: `${posterOriginal}${selectedMovie.poster_path}`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <Text style={{ color: '#fff' }}>{selectedMovie.title}</Text>
        <Text style={{ color: '#fff' }}>{selectedMovie.id}</Text>
        <Text style={{ color: '#fff' }}>{selectedMovie.vote_average}</Text>
        <Text style={{ color: '#fff' }}>{selectedMovie.vote_count}</Text>
        <Text style={{ color: '#fff' }}>{selectedMovie.release_date}</Text>
        <Text style={{ color: '#fff' }}>{selectedMovie.overview}</Text>
        <Text style={{ color: '#fff' }}>{selectedMovie.popularity}</Text>

      </ScrollView>
    </View>
  )
}
export default DetailsScreen