import React, { useEffect } from 'react'
import { BaseButton, ScrollView } from 'react-native-gesture-handler'
import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { REACT_APP_BASE_KEY } from 'react-native-dotenv'
import Icon from 'react-native-vector-icons/FontAwesome'
import FastImage from 'react-native-fast-image'
import YouTube from 'react-native-youtube'
import { connect } from 'react-redux'

import { posterOriginal, backGroundColor, primaryColor, poster500 } from '../../utils/constants'
import * as moviesService from '../../state/movies/service'
import * as moviesAction from '../../state/movies/actions'
import Loading from '../../components/shared/Loading'
const { width } = Dimensions.get('window');

const DetailsScreen = ({
  getMovieTrailer,
  isLoadingTrailer,
  getSimilar,
  similarList,
  similarIsLoading,
  navigation
}) => {
  const index = navigation.getParam('index');
  const selected = navigation.getParam('item');

  const handleSelectedSimilar = (selectedMovie, index) => {
    navigation.navigate('Details', { item: selectedMovie, index })
  }

  const handleTrailer = () => {
    getMovieTrailer(selected.id)
  }

  useEffect(() => {
    getSimilar(selected.id)
  }, [selected])

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: backGroundColor }} />

      <View style={{ width: '100%', height: 250 }}>
        {!isLoadingTrailer && selected.videoId ? (
          <YouTube
            style={{ alignSelf: 'stretch', width: '100%', height: '100%' }}
            apiKey={REACT_APP_BASE_KEY}
            videoId={selected.videoId}
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
                  {!isLoadingTrailer && (
                    <BaseButton
                      onPress={handleTrailer}
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
              {isLoadingTrailer && (
                <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
                  <Loading color="red" />
                </View>
              )}
            </>
          )}
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: backGroundColor }}>
        <View style={{ marginHorizontal: 10 }}>

          <Text numberOfLines={2} style={{ color: '#fff', marginBottom: 10, fontWeight: 'bold', fontSize: 20 }}>
            {selected.title}
          </Text>

          <View style={{ flexDirection: 'row', width: '50%', marginBottom: 5 }}>
            <Text style={{ color: '#cecece', lineHeight: 25, fontSize: 12, fontFamily: 'Avenir' }}>
              {selected.release_date.substring(0, 4)}
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
        {similarList.length !== 0 && !similarIsLoading ? (
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
              Não há nenhum títulos similares.
            </Text>
          )}
      </ScrollView>
    </View>
  )
}

DetailsScreen.sharedElements = (navigation, otherNavigation, showing) => {
  const item = navigation.getParam('item');
  const index = navigation.getParam('index');
  return [{ id: `image-${item.id}-${index}`, animation: 'fade' }];
};

const mapStateToProps = state => ({
  selected: state.movies.selected,
  isLoadingTrailer: state.movies.isLoadingTrailer,
  similarList: state.movies.similar.list,
  similarIsLoading: state.movies.similar.isLoading,
})

/* istanbul ignore next */
const mapDispatchToProps = {
  getMovieTrailer: moviesService.getMovieTrailer,
  getSimilar: moviesService.getSimilar,
  successSelectSimilar: moviesAction.successSelectMovie
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsScreen)