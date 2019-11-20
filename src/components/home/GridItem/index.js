import React from 'react'
import { FlatList, BaseButton } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import { View } from 'react-native'

import { poster500 } from '../../../utils/constants'
import { styles } from './style'

const GridItem = ({ data, handleDetails, fetchMore }) => {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <View style={styles.containerItems}>
          <BaseButton
            style={{
              width: 150,
              height: 200,
            }}
            onPress={() => handleDetails(item)}
          >
            <FastImage
              style={styles.buttonImg}
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
      onEndReached={fetchMore}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default GridItem