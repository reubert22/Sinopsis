import React from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import { BaseButton } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import { View, Text } from 'react-native'

import { posterOriginal } from '../../../utils/constants'
import { styles } from './style'

const Header = ({ latest, onDetails }) => (
  <View style={styles.container}>
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
    <BaseButton
      onPress={() => onDetails(latest, 0)}
      style={styles.centralBtn}
    >
      <Text style={styles.centralBtnTxt}>Details</Text>
    </BaseButton>
  </View>
)

export default Header