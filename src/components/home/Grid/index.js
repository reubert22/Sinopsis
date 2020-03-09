import React from 'react'
import { FlatList, BaseButton } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import { View } from 'react-native'

import { poster500 } from '../../../utils/constants'
import { styles } from './style'
import { SharedElement } from 'react-navigation-shared-element'
import ItemTitle from '../../shared/Title'

const Grid = ({ data, handleDetails, fetchMore, title, rounded }) => {
  return (
    <>
      <ItemTitle title={title} />
      <FlatList
        data={data}
        horizontal
        style={{ marginBottom: 20, marginTop: 3 }}
        renderItem={({ item, index }) => (
          <View style={styles.containerItems}>
            <BaseButton
              style={rounded ? styles.button : styles.buttonImg}
              onPress={() => handleDetails(item, index)}
            >
              <SharedElement id={`image-${item.id}-${index}`}>
                <FastImage
                  style={rounded ? styles.image : styles.picture}
                  source={{
                    uri: `${poster500}${item.poster_path}`,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              </SharedElement>
            </BaseButton>
          </View>
        )}
        keyExtractor={item => `${item.id}-popular-btn`}
        onEndReached={fetchMore}
        showsHorizontalScrollIndicator={false}
      />
    </>
  )
}

export default Grid