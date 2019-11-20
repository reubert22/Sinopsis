import React from 'react'
import { FlatList, BaseButton } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import { View, Text } from 'react-native'

import { poster500 } from '../../../utils/constants'
import { styles } from './style'

const Popular = ({ popularList, handleDetails }) => {
  return (
    <FlatList
      data={popularList}
      horizontal
      renderItem={({ item }) => (
        <View style={styles.containerItems}>
          <BaseButton style={styles.button} onPress={() => handleDetails(item)}>
            <FastImage
              style={styles.image}
              source={{
                uri: `${poster500}${item.poster_path}`,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </BaseButton>
        </View>
      )}
      keyExtractor={item => `${item.id}-popular-btn`}
    />
  )
}

export default Popular