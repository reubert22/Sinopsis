import React, { useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import { BaseButton } from 'react-native-gesture-handler'
import YouTube from 'react-native-youtube';
import { posterOriginal, backGroundColor } from '../../utils/constants'
import { connect } from 'react-redux'
import * as moviesAction from '../../state/movies/actions'
import * as moviesService from '../../state/movies/service'
import { REACT_APP_BASE_KEY } from 'react-native-dotenv'

const DetailsScreen = ({ selected, removeSelectedMovie, getMovieTrailer, isLoadingTrailer }) => {
  // useEffect(() => {
  //   return () => {
  //     removeSelectedMovie({})
  //   }
  // }, [])

  const handleTrailer = () => {
    getMovieTrailer(selected.id)
  }

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
      </ScrollView>
    </View>
  )
}

const mapStateToProps = state => console.log('>>> selected', state.movies) || ({
  selected: state.movies.selected,
  isLoadingTrailer: state.movies.isLoadingTrailer
})

/* istanbul ignore next */
const mapDispatchToProps = {
  removeSelectedMovie: moviesAction.successSelectMovie,
  getMovieTrailer: moviesService.getMovieTrailer,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsScreen)