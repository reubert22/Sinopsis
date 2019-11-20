import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler'
import { View, SafeAreaView, Text } from 'react-native'
import { connect } from 'react-redux'

import * as moviesService from '../../state/movies/service'
import * as moviesAction from '../../state/movies/actions'
import GridItem from '../../components/home/GridItem'
import ItemTitle from '../../components/shared/Title'
import Popular from '../../components/home/Popular'
import Header from '../../components/home/Header'
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
  useEffect(() => {
    getPopular()
    getPlaying()
    getTopRated()
    getUpcoming()
  }, [])

  const handleSelectedMovie = (selectedMovie) => {
    successSelectMovie(selectedMovie)
    return navigation.navigate('Details')
  }

  const handleFetchMore = (type) => {
    console.log('should fetch more: ', type)
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: backGroundColor }} />
      <ScrollView style={{ flex: 1, backgroundColor: backGroundColor }}>

        <Header
          latest={latest}
          onDetails={handleSelectedMovie}
        />

        <ItemTitle title="Most popular" />
        {popularList.length !== 0 && (
          <Popular popularList={popularList} handleDetails={handleSelectedMovie} />
        )}

        <ItemTitle title="Playing now" />
        {playingList.length !== 0 && (
          <GridItem data={playingList} handleDetails={handleSelectedMovie} fetchMore={() => handleFetchMore('playing')} />
        )}

        <ItemTitle title="Top rated" />
        {topRatedList.length !== 0 && (
          <GridItem data={topRatedList} handleDetails={handleSelectedMovie} fetchMore={() => handleFetchMore('topRated')} />
        )}

        <ItemTitle title="Upcoming" />
        {upcomingList.length !== 0 && (
          <GridItem data={upcomingList} handleDetails={handleSelectedMovie} fetchMore={() => handleFetchMore('upcoming')} />
        )}
      </ScrollView>
    </View >
  )
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  genresList: state.movies.genres.list,
  genresLoading: state.movies.genres.isLoading,
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
  getGenres: moviesService.getGenres,
  getPopular: moviesService.getPopular,
  getPlaying: moviesService.getPlaying,
  getTopRated: moviesService.getTopRated,
  getUpcoming: moviesService.getUpcoming,
  getMovieTrailer: moviesService.getMovieTrailer,
  successSelectMovie: moviesAction.successSelectMovie
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)