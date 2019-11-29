import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler'
import { View, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'

import * as moviesService from '../../state/movies/service'
import * as moviesAction from '../../state/movies/actions'
import ItemTitle from '../../components/shared/Title'
import Popular from '../../components/home/Popular'
import Header from '../../components/home/Header'
import Grid from '../../components/home/Grid'
import { backGroundColor } from '../../utils/constants';

const HomeScreen = ({
  navigation,
  getPopular,
  popularList,
  getPlaying,
  playingList,
  getTopRated,
  topRatedList,
  upcomingList,
  getUpcoming,
  latest,
  successSelectMovie
}) => {
  const [isScrolling, setIsScrolling] = useState(false)
  useEffect(() => {
    getPopular()
    getPlaying()
    getTopRated()
    getUpcoming()
  }, [])

  const handleSelectedMovie = (selectedMovie, index) => {
    successSelectMovie(selectedMovie)
    return navigation.navigate('Details', { item: selectedMovie, index })
  }

  const handleFetchMore = (type) => {
    console.log('should fetch more: ', type)
  }

  return (
    <View style={{ flex: 1 }}>
      {isScrolling && <SafeAreaView style={{ flex: 0, backgroundColor: backGroundColor }} />}
      <ScrollView
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y >= 390) {
            setIsScrolling(true)
          } else {
            setIsScrolling(false)
          }
        }}
        scrollEventThrottle={16}
        style={{ flex: 1, backgroundColor: backGroundColor }}
      >

        <Header
          latest={latest}
          onDetails={handleSelectedMovie}
        />

        {popularList.length !== 0 && (
          <Popular
            title="Most popular"
            popularList={popularList}
            handleDetails={handleSelectedMovie}
          />
        )}

        {playingList.length !== 0 && (
          <Grid
            data={playingList}
            handleDetails={handleSelectedMovie}
            fetchMore={() => handleFetchMore('playing')}
            title="Playing now"
          />
        )}

        {topRatedList.length !== 0 && (
          <Grid
            title="Top rated"
            data={topRatedList}
            handleDetails={handleSelectedMovie}
            fetchMore={() => handleFetchMore('topRated')}
          />
        )}

        {upcomingList.length !== 0 && (
          <Grid
            title="Upcoming"
            data={upcomingList}
            handleDetails={handleSelectedMovie}
            fetchMore={() => handleFetchMore('upcoming')}
          />
        )}
      </ScrollView>
    </View >
  )
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  popularList: state.movies.popular.list,
  popularLoading: state.movies.popular.isLoading,
  playingList: state.movies.playing.list,
  playingLoading: state.movies.playing.isLoading,
  topRatedList: state.movies.topRated.list,
  topRatedLoading: state.movies.topRated.isLoading,
  upcomingList: state.movies.upcoming.list,
  upcomingLoading: state.movies.upcoming.isLoading,
  latest: state.movies.latest.latest,
  latestLoading: state.movies.latest.isLoading,
})

/* istanbul ignore next */
const mapDispatchToProps = {
  getPopular: moviesService.getPopular,
  getPlaying: moviesService.getPlaying,
  getTopRated: moviesService.getTopRated,
  getUpcoming: moviesService.getUpcoming,
  successSelectMovie: moviesAction.successSelectMovie
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)