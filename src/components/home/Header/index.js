import React from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import { BaseButton } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { posterOriginal } from '../../../utils/constants'
import { styles } from './style'

const Header = ({ latest, onDetails }) => (
  <BaseButton onPress={() => onDetails(latest, 0)} style={styles.container}>
    <SharedElement style={styles.container} id={`image-${latest.id}-0`}>
      <FastImage
        style={styles.image}
        source={{
          uri: `${posterOriginal}${latest.poster_path}`,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
    </SharedElement>
    <View
      style={{
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10,
      }}
    >
      <Icon name="chevron-up" size={20} color="#fff" />

    </View>
  </BaseButton>
)

export default Header