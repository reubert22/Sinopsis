import React, { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigationFocus } from "react-navigation";
import { View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import * as seriesService from '../../state/series/service';
import Popular from '../../components/shared/Popular';
import Header from '../../components/shared/Header';
import Grid from '../../components/shared/Grid';
import { backGroundColor } from '../../utils/constants';

const SerieScreen = ({
  navigation,
  getPopular,
  popularList,
  latest,
  isFocused,
  getOnTheAir,
  onTheAirList,
  getTopRated,
  topRatedList,
  getAiringToday,
  airingTodayList,
  isLoadingOnTheAir,
  isLoadingTopRated,
  isLoadingAiringToday,
  isLoadingPopular
}) => {
  useEffect(() => {
    if (isFocused) {
      getPopular();
      getOnTheAir();
      getTopRated();
      getAiringToday();
    }
  }, [isFocused]);

  const handleSelectedSerie = (selectedMovie, index) => {
    return navigation.navigate('Details', { item: selectedMovie, index })
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
          isLoading={isLoadingPopular}
          onDetails={handleSelectedSerie}
        />

        <Popular
          title="Most popular"
          isLoading={isLoadingPopular}
          popularList={popularList}
          handleDetails={handleSelectedSerie}
        />

        <Grid
          data={onTheAirList}
          isLoading={isLoadingOnTheAir}
          handleDetails={handleSelectedSerie}
          fetchMore={() => handleFetchMore('playing')}
          title="On the air"
        />

        <Grid
          data={topRatedList}
          isLoading={isLoadingTopRated}
          handleDetails={handleSelectedSerie}
          fetchMore={() => handleFetchMore('playing')}
          title="Top rated"
        />

        <Grid
          data={airingTodayList}
          isLoading={isLoadingAiringToday}
          handleDetails={handleSelectedSerie}
          fetchMore={() => handleFetchMore('playing')}
          title="Airing today"
        />

      </ScrollView>
    </View>
  )
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  popularList: state.series.popular.list,
  latest: state.series.latest.latest,
  isLoadingPopular: state.series.popular.isLoading,
  onTheAirList: state.series.onTheAir.list,
  isLoadingOnTheAir: state.series.onTheAir.isLoading,
  topRatedList: state.series.topRated.list,
  isLoadingTopRated: state.series.topRated.isLoading,
  airingTodayList: state.series.airingToday.list,
  isLoadingAiringToday: state.series.airingToday.isLoading,
})

const mapDispatchToProps = {
  getPopular: seriesService.getPopular,
  getOnTheAir: seriesService.getOnTheAir,
  getTopRated: seriesService.getTopRated,
  getAiringToday: seriesService.getAiringToday,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigationFocus(SerieScreen))