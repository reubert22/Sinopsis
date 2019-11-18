import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, } from 'react-native';
import YouTube from 'react-native-youtube';

const Player = ({ navigation }) => {
  const { selectedMovie } = navigation.state.params

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#000105', alignItems: 'center', justifyContent: 'center' }}>
          <YouTube
            videoId={selectedMovie}
            apiKey="AIzaSyBXdBdwUS-qiMxGjg5sqUKIRMBuu4E_DVc"
            play
            fullscreen
            loop={false}
            // onReady={e => setIsReady(true)}
            // onChangeState={e => this.setState({ status: e.state })}
            // onChangeQuality={e => this.setState({ quality: e.quality })}
            // onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300 }}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Player