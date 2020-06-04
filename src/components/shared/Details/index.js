import React, { useEffect, useState } from 'react';
import { BaseButton, ScrollView } from 'react-native-gesture-handler';
import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { REACT_APP_BASE_KEY } from 'react-native-dotenv';
import Icon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';
import YouTube from 'react-native-youtube';

import { posterOriginal, backGroundColor, primaryColor, poster500 } from '../../../utils/constants';
import Loading from '../Loading';
const { width } = Dimensions.get('window');

const DetailsScreen = ({
  trailerId,
  isLoadingTrailerId,
  similarList,
  isLoadingSimilar,
  getTrailer,
  getSimilar,
  resetTrailerId,
  navigation
}) => {
  const index = navigation.getParam('index');
  const selected = navigation.getParam('item');
  const [shouldPlay, setShouldPlay] = useState(false);

  const handleSelectedSimilar = (selectedMovie, index) => {
    resetTrailerId();
    navigation.navigate('Details', { item: selectedMovie, index })
  }

  useEffect(() => {
    getSimilar(selected.id, selected.type);
    getTrailer(selected.id, selected.type);
    return () => resetTrailerId();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: backGroundColor }} />

      <View style={{ width: '100%', height: 300 }}>
        {!isLoadingTrailerId && trailerId && shouldPlay ? (
          <YouTube
            style={{ alignSelf: 'stretch', width: '100%', height: '100%' }}
            apiKey={REACT_APP_BASE_KEY}
            videoId={trailerId}
            fullscreen={false}
            loop={false}
            play={true}
          />
        ) : (
            <>
              <SharedElement id={`image-${selected.id}-${index}`}>
                <FastImage
                  style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  source={{
                    uri: `${posterOriginal}${selected.poster_path}`,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                >
                  {!isLoadingTrailerId && trailerId && (
                    <BaseButton
                      onPress={() => setShouldPlay(true)}
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="play-circle" size={50} color="#000" />
                    </BaseButton>
                  )}
                </FastImage>
              </SharedElement>
              {isLoadingTrailerId && (
                <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
                  <Loading color="red" />
                </View>
              )}
            </>
          )}
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: backGroundColor }}>
        <View style={{ marginTop: 20, marginBottom: 10, marginHorizontal: 10 }}>

          <Text numberOfLines={2} style={{ color: '#fff', marginBottom: 10, fontWeight: 'bold', fontSize: 20 }}>
            {selected.type === 'movie'
              ? selected.title
              : selected.name
            }
          </Text>

          <View style={{ flexDirection: 'row', width: '100%', marginBottom: 5, display: 'flex', justifyContent: 'space-between' }}>
            <Text style={{ color: '#cecece', lineHeight: 25, fontSize: 16, fontFamily: 'Avenir' }}>
              Date:
              {selected.type === 'movie'
                ? ` ${selected.release_date.substring(0, 4)}`
                : ` ${selected.first_air_date.substring(0, 4)}`
              }
            </Text>
            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
              <Text style={{ color: '#cecece', lineHeight: 25, fontSize: 12, fontFamily: 'Avenir' }}>{selected.vote_average}</Text>
              <Icon name="star" size={15} color={primaryColor} />
            </View>
          </View>

          <Text style={{ color: '#fff', marginBottom: 15, lineHeight: 25, fontSize: 15, fontFamily: 'Avenir' }}>{selected.overview}</Text>
        </View>

        <View style={{ width: '100%', height: 1.5, backgroundColor: '#cecece' }} />
        <View style={{ width: 80, marginHorizontal: 10, borderTopColor: primaryColor, borderTopWidth: 5, alignItems: 'center' }}>
          <Text style={{ color: '#fff', marginBottom: 12, fontWeight: 'bold', fontSize: 20, marginTop: 12 }}>Similar</Text>
        </View>
        {similarList.length !== 0 && !isLoadingSimilar ? (
          <View style={{
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
            {similarList.map((item, index) => (
              <BaseButton
                key={`similar-id-${item.id}`}
                style={{
                  marginHorizontal: 3,
                  marginVertical: 3,
                  width: (width / 3) - 7,
                  height: 150
                }}
                onPress={() => handleSelectedSimilar(item, index)}>

                <FastImage
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={{
                    uri: `${poster500}${item.poster_path}`,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              </BaseButton>
            ))}
          </View>
        ) : isLoadingSimilar ? (
          <Loading color={primaryColor} />
        ) : (
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  marginBottom: 15,
                  lineHeight: 25,
                  fontSize: 15,
                  fontFamily: 'Avenir'
                }}
              >
                Não há títulos similares.
              </Text>
            )}
      </ScrollView>
    </View>
  )
}

export default DetailsScreen