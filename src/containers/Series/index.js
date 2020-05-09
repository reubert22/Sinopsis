import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigationFocus } from "react-navigation";
import { View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import * as seriesService from '../../state/series/service';
import Popular from '../../components/shared/Popular';
import Header from '../../components/shared/Header';
import { backGroundColor } from '../../utils/constants';

const SerieScreen = ({
  navigation,
  getPopular,
  popularList,
  latest,
  isFocused
}) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (isFocused) {
      getPopular();
    }
  }, [isFocused]);

  const handleSelectedSerie = (selectedMovie, index) => {
    // successSelectMovie(selectedMovie)
    // return navigation.navigate('Details', { item: selectedMovie, index })
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
          onDetails={handleSelectedSerie}
        />

        {popularList.length !== 0 && (
          <Popular
            title="Most popular"
            popularList={popularList}
            handleDetails={handleSelectedSerie}
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
})

/* istanbul ignore next */
const mapDispatchToProps = {
  getPopular: seriesService.getPopular,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigationFocus(SerieScreen))