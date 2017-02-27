'use strict'

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import HomeScene from './src/scene/Home.js';

class MyProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var defaultName = 'Home';
    var defaultComponent = HomeScene;
    return (
      <Navigator
        //指定了默认的页面，也就是启动app之后会看到的第一屏，需要两个参数，name跟component
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
          //跳转的动画
          return Navigator.SceneConfigs.FadeAndroid;
        } }
        renderScene={(route, navigator) => {
          let Component = route.component;
          if (route.component) {
            return <Component navigator={navigator} {...route.params} />
          }
        } }
        />
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);