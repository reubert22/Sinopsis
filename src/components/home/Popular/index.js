import React from 'react'
import { FlatList, BaseButton } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import { View, Text } from 'react-native'

import { poster500 } from '../../../utils/constants'
import { styles } from './style'
import { SharedElement } from 'react-navigation-shared-element'
import ItemTitle from '../../shared/Title'

const Popular = ({ popularList, handleDetails, title }) => {
  return (
    <>
      <ItemTitle title={title} />
      <FlatList
        data={popularList}
        horizontal
        style={{ marginBottom: 20, marginTop: 3 }}
        renderItem={({ item, index }) => (
          <View style={styles.containerItems}>
            <BaseButton style={styles.button} onPress={() => handleDetails(item, index)}>
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
        showsHorizontalScrollIndicator={false}
      />
    </>
  )
}

export default Popular