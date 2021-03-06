import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import cacheAssetsAsync from './src/cacheAssetsAsync';

import Main from './src/Navigators';


export default class App extends Component {
  state = {
    appIsReady: false
  };

  componentWillMount() {
    this._loadAssetsAsync();
    StatusBar.setBarStyle('light-content', true);

  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/beer.png'),
          require('./assets/images/bud.png'),
          require('./assets/images/checkout.png'),
          require('./assets/images/cocktail.png'),
          require('./assets/images/corona.png'),
          require('./assets/images/decrement.png'),
          require('./assets/images/hein.png'),
          require('./assets/images/home.png'),
          require('./assets/images/increment.png'),
          require('./assets/images/martini.png'),
          require('./assets/images/pbr.png'),
          require('./assets/images/spirits.png'),
          require('./assets/images/verified.png'),          
        ],
        fonts: [
          {
            'abeezee-italic': require('./assets/fonts/ABeeZee-Italic.ttf'),
            'abeezee': require('./assets/fonts/ABeeZee-Regular.ttf'),
            'helvetica-neue-bold': require('./assets/fonts/HelveticaNeue-Bold.ttf'),
            'helvetica-neue-light': require('./assets/fonts/HelveticaNeue-Light.ttf'),
            'helvetica-neue-medium': require('./assets/fonts/HelveticaNeue-Medium.ttf'),
            'helvetica-neue-thin': require('./assets/fonts/HelveticaNeue-Thin.ttf'),
            'helvetica-neue': require('./assets/fonts/HelveticaNeue.ttf'),
          }
        ]
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
        'network timeout, so we skipped caching. Reload the app to try again.'
        );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <Main />
        );
    }
    return <AppLoading />;
  }
};
