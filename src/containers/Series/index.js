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
          onDetails={handleSelectedSerie}
        />

        {popularList.length !== 0 && (
          <Popular
            title="Most popular"
            popularList={popularList}
            handleDetails={handleSelectedSerie}
          />
        )}

        {onTheAirList.length !== 0 && (
          <Grid
            data={onTheAirList}
            handleDetails={handleSelectedSerie}
            fetchMore={() => handleFetchMore('playing')}
            title="On the air"
          />
        )}

        {topRatedList.length !== 0 && (
          <Grid
            data={topRatedList}
            handleDetails={handleSelectedSerie}
            fetchMore={() => handleFetchMore('playing')}
            title="Top rated"
          />
        )}

        {airingTodayList.length !== 0 && (
          <Grid
            data={airingTodayList}
            handleDetails={handleSelectedSerie}
            fetchMore={() => handleFetchMore('playing')}
            title="Airing today"
          />
        )}

      </ScrollView>
    </View>
  )
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  popularList: state.series.popular.list,
  latest: state.series.latest.latest,
  onTheAirList: state.series.onTheAir.list,
  topRatedList: state.series.topRated.list,
  airingTodayList: state.series.airingToday.list
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