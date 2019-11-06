import React from 'react'
import FastImage from 'react-native-fast-image'
import { View, Text } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'
import { posterOriginal } from '../../../utils/constants'
import { styles } from './style'

const Header = ({ mostPopular, popularLoading, onDetails, onFavorite, onTrailer }) => (
  <View style={styles.container}>
    {popularLoading
      ? <Text>•••</Text>
      :
      <FastImage
        style={styles.image}
        source={{
          uri: `${posterOriginal}${mostPopular.poster_path}`,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
    }
    <View style={styles.containerButtons}>
      <BaseButton
        onPress={onFavorite}
        style={styles.lateralBtns}
      >
        <Text style={styles.symbolTxt}>+</Text>
        <Text style={styles.lateralBtnsTxt}>Favoritar</Text>
      </BaseButton>
      <BaseButton
        onPress={onTrailer}
        style={styles.centralBtn}
      >
        <Text style={styles.centralBtnTxt}>Trailer</Text>
      </BaseButton>
      <BaseButton
        onPress={onDetails}
        style={styles.lateralBtns}
      >
        <Text style={styles.symbolTxt}>¡</Text>
        <Text style={styles.lateralBtnsTxt}>Ver detalhes</Text>
      </BaseButton>
    </View>
  </View>
)

export default Header