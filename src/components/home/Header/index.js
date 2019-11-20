import React from 'react'
import FastImage from 'react-native-fast-image'
import { View, Text } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'
import { posterOriginal } from '../../../utils/constants'
import { styles } from './style'

const Header = ({ latest, latestLoading, onDetails, onFavorite, onTrailer }) => (
  <View style={styles.container}>
    <FastImage
      style={styles.image}
      source={{
        uri: `${posterOriginal}${latest.poster_path}`,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.stretch}
    />
    <BaseButton
      onPress={() => onDetails(latest)}
      style={styles.centralBtn}
    >
      <Text style={styles.centralBtnTxt}>Ver detalhes</Text>
    </BaseButton>
  </View>
)

export default Header