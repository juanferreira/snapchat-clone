import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import pure from 'recompose/pure';

import Chat from './components/Chat';
import Stories from './components/Stories';
import Camera from './components/camera/Camera';
import Search from './components/Search';
import Memories from './components/Memories';

const MAIN_INDEX = 1;

const state = withState('enabledHorizontalScroll', 'setHorizontal', true);

const handlers = withHandlers({
  handleOnSwipe: ({ setHorizontal }) => (index) => setHorizontal(index === MAIN_INDEX)
});

const App = ({ handleOnSwipe, enabledHorizontalScroll }) => (
  <Swiper
    index={MAIN_INDEX}
    showsPagination={false}
    loop={false}
    scrollEnabled={enabledHorizontalScroll}
  >
    <Chat/>

    <Swiper
      index={MAIN_INDEX}
      showsPagination={false}
      loop={false}
      horizontal={false}
      onIndexChanged={handleOnSwipe}
    >
      <Search/>
      <Camera/>
      <Memories/>
    </Swiper>

    <Stories/>
  </Swiper>
);

export default compose(
  state,
  handlers,
  pure
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
