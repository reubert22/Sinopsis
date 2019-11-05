import React from 'react'
import { FlatList, BaseButton } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import { View, Text } from 'react-native'

import { poster500 } from '../../../utils/constants'
import { styles } from './style'

const GridItem = ({ data }) => {
  return (
    <FlatList
      data={[...data, { title: 'Ver Mais' }]}
      horizontal
      renderItem={({ item }) => (
        <View style={styles.containerItems}>
          {item.poster_path
            ? (
              <>
                <BaseButton style={styles.buttonImg}>
                  <FastImage
                    style={styles.buttonImg}
                    source={{
                      uri: `${poster500}${item.poster_path}`,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                </BaseButton>
                <View style={styles.containerTitle}>
                  <Text
                    style={styles.title}
                    numberOfLines={2}
                  >
                    {item.title}
                  </Text>
                </View>
              </>
            ) : (
              <BaseButton style={styles.buttonSeeMore}>
                <Text style={styles.plusTxt}>+</Text>
                <Text style={styles.seeMoreTxt}>Ver mais</Text>
              </BaseButton>
            )}
        </View>
      )}
      keyExtractor={item => `${item.id}-popular-btn`}
    />
  )
}

export default GridItem