import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, View } from 'react-native';

import Button from '../component/button.js';
import TextScene from './TextScene.js';

'use strict'

export default class HomeScene extends Component {
    constructor(props) {
        super(props);
    }

    jumpToScene = (index) => {
        switch (index) {
            case 0:
                this.props.navigator.push({
                    name: 'Text',
                    component: TextScene
                });
                break;
        }
    };

    render() {
        return (
            <ScrollView style={styles.scrollStyle}>
                <Button content="Text" _onClick={() => { this.jumpToScene(0) } } />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
                <Button content="123" />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollStyle: {
        flex: 1,
        flexDirection: 'column'
    },
});