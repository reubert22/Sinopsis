import React, { useEffect } from 'react'
import { BaseButton, ScrollView } from 'react-native-gesture-handler'
import { REACT_APP_BASE_KEY } from 'react-native-dotenv'
import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import YouTube from 'react-native-youtube';
import { connect } from 'react-redux'
import { posterOriginal, backGroundColor, primaryColor, poster500 } from '../../utils/constants'
import * as moviesService from '../../state/movies/service'
import * as moviesAction from '../../state/movies/actions'

const { width } = Dimensions.get('window');

const DetailsScreen = ({ selected, getMovieTrailer, isLoadingTrailer, getSimilar, similarList, similarIsLoading, successSelectSimilar }) => {

  const handleTrailer = () => {
    getMovieTrailer(selected.id)
  }

  useEffect(() => {
    getSimilar(selected.id)
  }, [selected])

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: backGroundColor }} />
      <ScrollView style={{ flex: 1, backgroundColor: backGroundColor }}>
        {!isLoadingTrailer && selected.videoId ? (
          <YouTube
            style={{ alignSelf: 'stretch', width: '100%', height: 300 }}
            apiKey={REACT_APP_BASE_KEY}
            videoId={selected.videoId}
            onError={e => console.log(e)}
            fullscreen={false}
            loop={false}
            play={true}
          />
        ) : (
            <FastImage
              style={{
                width: '100%',
                height: 300,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              source={{
                uri: `${posterOriginal}${selected.backdrop_path}`,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.stretch}
            >
              {isLoadingTrailer ? <BaseButton style={{ width: 50, height: 50, backgroundColor: 'blue' }} onPress={handleTrailer}><Text>...</Text></BaseButton>
                :
                <BaseButton style={{ width: 50, height: 50, backgroundColor: 'blue' }} onPress={handleTrailer}><Text>Play</Text></BaseButton>
              }
            </FastImage>
          )}
        <View style={{ marginHorizontal: 10 }}>

          <Text numberOfLines={2} style={{ color: '#fff', marginBottom: 12, fontWeight: 'bold', fontSize: 20 }}>
            {selected.title}
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '50%', marginBottom: 12 }}>
            <Text style={{ color: '#cecece', lineHeight: 25, fontSize: 16, fontFamily: 'Avenir' }}>Stars: {selected.vote_average}</Text>
            <Text style={{ color: '#cecece', lineHeight: 25, fontSize: 16, fontFamily: 'Avenir' }}>
              {selected.release_date.substring(0, 4)}
            </Text>
            <Text style={{ color: '#cecece', lineHeight: 25, fontSize: 16, fontFamily: 'Avenir' }}>
              {selected.adult ? "Yes" : "No"}
            </Text>
          </View>
          <Text style={{ color: '#fff', marginBottom: 12, lineHeight: 25, fontSize: 16, fontFamily: 'Avenir' }}>{selected.overview}</Text>
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
            {similarList.map(item => (
              <BaseButton
                style={{
                  marginHorizontal: 3,
                  marginVertical: 3,
                  width: (width / 3) - 7,
                  height: 150
                }}
                onPress={() => successSelectSimilar(item)}>

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

            <View style={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
              {['', '', ''].map(item => (
                <View
                  style={{
                    marginHorizontal: 3,
                    marginVertical: 3,
                    width: (width / 3) - 7,
                    height: 150,
                    backgroundColor: 'rgba(148, 147, 146, 0.2)'
                  }}
                />
              ))}
            </View>
          )}
      </ScrollView>
    </View>
  )
}

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