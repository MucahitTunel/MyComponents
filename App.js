import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from './src/components/AppText';
import AppButton from './src/components/AppButton';
import {Provider} from 'react-redux';
import store from './src/state/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppText>Selamlar</AppText>
        <AppButton text={'Gönder'} />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
