import React, { Component } from 'react';
import { View, Text } from 'react-native';

'use strict'

export default class TextScene extends Component {
    static defaultProps = {
        content: 'Hello World'
    };

    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>{this.props.content}</Text>
            </View>
        )
    }
}